"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Globe, { type GlobeMethods } from "react-globe.gl";
import { globePlaces, journeyPath, places, type Place } from "./places";

const ACCENT_DARK = "#4f67a8";
const PIN = "#7691cc";
const PIN_ACTIVE = "#4f67a8";
const PIN_ACTIVE_RGB = "79, 103, 168";
const PIN_RGB = "118, 145, 204";

type Arc = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
};

type Ring = {
  lat: number;
  lng: number;
  maxR: number;
  propagationSpeed: number;
  repeatPeriod: number;
  color: (t: number) => string;
};

export default function SidequestsGlobe() {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectPlaceRef = useRef<(place: Place) => void>(() => {});
  const selectedIdRef = useRef<string | null>(null);
  const hoveredIdRef = useRef<string | null>(null);

  const [selectedId, setSelectedId] = useState<string | null>(
    globePlaces[0]?.id ?? null,
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [dims, setDims] = useState({ width: 560, height: 560 });
  const [ready, setReady] = useState(false);
  const didInitialFly = useRef(false);

  selectedIdRef.current = selectedId;
  hoveredIdRef.current = hoveredId;

  const selected = useMemo(
    () => places.find((p) => p.id === selectedId) ?? null,
    [selectedId],
  );

  const arcs: Arc[] = useMemo(() => {
    const byId = new Map(globePlaces.map((p) => [p.id, p]));
    const path = journeyPath
      .map((id) => byId.get(id))
      .filter((p): p is Place => Boolean(p));

    return path.slice(0, -1).map((from, i) => {
      const to = path[i + 1];
      return {
        startLat: from.lat,
        startLng: from.lng,
        endLat: to.lat,
        endLng: to.lng,
      };
    });
  }, []);

  const rings: Ring[] = useMemo(
    () =>
      globePlaces.map((p) => {
        const active = p.id === selectedId;
        return {
          lat: p.lat,
          lng: p.lng,
          maxR: active ? 4.5 : 2.8,
          propagationSpeed: active ? 2.2 : 1.4,
          repeatPeriod: active ? 900 : 1400,
          color: (t: number) => {
            const base = active ? PIN_ACTIVE_RGB : PIN_RGB;
            return `rgba(${base}, ${Math.max(0, 1 - t)})`;
          },
        };
      }),
    [selectedId],
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      const h = Math.min(Math.max(w * 0.95, 360), 620);
      setDims({ width: w, height: h });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const tryInit = () => {
      const globe = globeRef.current;
      if (!globe) {
        if (attempts++ < 90) requestAnimationFrame(tryInit);
        return;
      }
      if (cancelled) return;
      const controls = globe.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.35;
      controls.enableZoom = false;
      controls.enablePan = false;
      if (!didInitialFly.current) {
        globe.pointOfView({ lat: 35, lng: -40, altitude: 2.0 });
        didInitialFly.current = true;
      }
      setReady(true);
    };

    tryInit();
    return () => {
      cancelled = true;
    };
  }, [dims.width, dims.height]);

  const flyTo = useCallback((place: Place) => {
    const globe = globeRef.current;
    if (!globe) return;
    globe.controls().autoRotate = false;
    const currentAltitude = globe.pointOfView().altitude;
    globe.pointOfView(
      { lat: place.lat, lng: place.lng, altitude: currentAltitude },
      1100,
    );
  }, []);

  const selectPlace = useCallback(
    (place: Place) => {
      setSelectedId(place.id);
      setHoveredId(null);
      if (place.onGlobe !== false) flyTo(place);
    },
    [flyTo],
  );

  selectPlaceRef.current = selectPlace;

  const makePinElement = useCallback((place: Place) => {
    const wrap = document.createElement("button");
    wrap.type = "button";
    wrap.className = "globe-pin";
    wrap.setAttribute("aria-label", place.name);
    wrap.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translate(-50%, -100%);
      cursor: pointer;
      pointer-events: auto;
      border: none;
      background: transparent;
      padding: 0;
      font-family: inherit;
    `;

    const paint = () => {
      const active = selectedIdRef.current === place.id;
      const hovered = hoveredIdRef.current === place.id;
      const color = active ? PIN_ACTIVE : PIN;
      const scale = active || hovered ? 1.18 : 1;

      wrap.innerHTML = `
        <span style="
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding:3px 9px;
          margin-bottom:4px;
          border-radius:999px;
          background:${active ? color : "rgba(255,255,255,0.95)"};
          color:${active ? "#fff" : ACCENT_DARK};
          border:1.5px solid ${color};
          font-size:11px;
          font-weight:600;
          letter-spacing:0.02em;
          white-space:nowrap;
          box-shadow:0 4px 14px rgba(79,103,168,0.22);
          transform:scale(${scale});
          transition:transform 160ms ease, background 160ms ease;
        ">${place.shortLabel}</span>
        <svg width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden="true" style="transform:scale(${scale}); transition:transform 160ms ease; filter:drop-shadow(0 3px 6px rgba(0,0,0,0.25));">
          <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.268 21.732 0 14 0z" fill="${color}"/>
          <circle cx="14" cy="14" r="5.5" fill="white"/>
        </svg>
      `;
    };

    paint();
    wrap.addEventListener("mouseenter", () => {
      setHoveredId(place.id);
      paint();
    });
    wrap.addEventListener("mouseleave", () => {
      setHoveredId((current) => (current === place.id ? null : current));
      requestAnimationFrame(paint);
    });
    wrap.addEventListener("click", (e) => {
      e.stopPropagation();
      selectPlaceRef.current(place);
      paint();
    });

    (wrap as HTMLElement & { __paint?: () => void }).__paint = paint;
    return wrap;
  }, []);

  useEffect(() => {
    document
      .querySelectorAll<HTMLElement & { __paint?: () => void }>(".globe-pin")
      .forEach((el) => {
        el.__paint?.();
      });
  }, [selectedId, hoveredId]);

  const hoverPlace =
    (hoveredId && globePlaces.find((p) => p.id === hoveredId)) || null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-8 lg:gap-10 items-start">
      <div className="w-full">
        <div
          ref={containerRef}
          className="relative w-full overflow-visible"
          style={{ height: dims.height }}
        >
          {!ready && (
            <div className="absolute inset-0 z-10 flex items-center justify-center text-sm text-[#4f67a8]/70">
              loading globe...
            </div>
          )}

          {hoverPlace && hoverPlace.id !== selectedId && (
            <div className="pointer-events-none absolute left-4 top-4 z-20">
              <p className="text-sm font-medium text-[#7691cc]">
                
              </p>
            </div>
          )}

          <Globe
            ref={globeRef}
            width={dims.width}
            height={dims.height}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            atmosphereColor="#8eabd0"
            atmosphereAltitude={0.2}
            showGraticules={false}
            htmlElementsData={globePlaces}
            htmlLat="lat"
            htmlLng="lng"
            htmlAltitude={0.02}
            htmlElement={(d) => makePinElement(d as Place)}
            htmlElementVisibilityModifier={(el, isVisible) => {
              el.style.opacity = isVisible ? "1" : "0";
              el.style.pointerEvents = isVisible ? "auto" : "none";
            }}
            ringsData={rings}
            ringColor="color"
            ringMaxRadius="maxR"
            ringPropagationSpeed="propagationSpeed"
            ringRepeatPeriod="repeatPeriod"
            arcsData={arcs}
            arcColor={() => [`rgba(118,145,204,0.15)`, `rgba(91,127,214,0.85)`]}
            arcDashLength={0.4}
            arcDashGap={0.2}
            arcDashAnimateTime={2800}
            arcStroke={0.6}
            arcAltitude={0.22}
            arcAltitudeAutoScale={0.4}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {places.map((place) => {
            const active = place.id === selectedId;
            return (
              <button
                key={place.id}
                type="button"
                onClick={() => selectPlace(place)}
                onMouseEnter={() =>
                  place.onGlobe !== false && setHoveredId(place.id)
                }
                onMouseLeave={() => setHoveredId(null)}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-[#7691cc] underline underline-offset-4"
                    : "text-black/70 hover:text-[#7691cc]"
                }`}
              >
                {place.shortLabel}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm text-[#7691cc]/80">
          drag to spin · tap a pin or label
        </p>
      </div>

      <aside
        className={`transition-all duration-500 ${
          selected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {selected && (
          <div className="lg:sticky lg:top-8 max-w-md">
            <h2 className="text-lg font-normal italic relative inline-block mb-4">
              {selected.name}
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#7691cc]" />
            </h2>
            <div className="space-y-3 text-sm leading-relaxed pl-1">
              {selected.description.split(/\n\n+/).map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
