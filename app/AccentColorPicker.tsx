"use client";

import { useEffect, useState } from "react";

export const DEFAULT_ACCENT = "#7691cc";
export const ACCENT_STORAGE_KEY = "accent-color";

export function darkenHex(hex: string, amount: number): string {
  const raw = hex.replace("#", "");
  if (raw.length !== 6) return hex;
  const num = parseInt(raw, 16);
  const r = Math.max(0, Math.round(((num >> 16) & 0xff) * (1 - amount)));
  const g = Math.max(0, Math.round(((num >> 8) & 0xff) * (1 - amount)));
  const b = Math.max(0, Math.round((num & 0xff) * (1 - amount)));
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

export const ACCENT_CHANGE_EVENT = "accent-color-change";

export function applyAccent(hex: string) {
  const root = document.documentElement;
  root.style.setProperty("--accent-color", hex);
  root.style.setProperty("--accent-color-hover", darkenHex(hex, 0.12));
  root.style.setProperty("--accent-color-dark", darkenHex(hex, 0.22));
  root.style.setProperty("--accent-color-darker", darkenHex(hex, 0.32));
  window.dispatchEvent(new CustomEvent(ACCENT_CHANGE_EVENT, { detail: hex }));
}

/** Applies saved accent on every page so /projects and /sidequests match. */
export function AccentColorHydrator() {
  useEffect(() => {
    const saved = localStorage.getItem(ACCENT_STORAGE_KEY);
    if (saved && /^#[0-9a-fA-F]{6}$/.test(saved)) {
      applyAccent(saved);
    }
  }, []);
  return null;
}

function canDisplayColorPicker() {
  const probe = document.createElement("input");
  probe.type = "color";
  if (probe.type !== "color") return false;

  return !window.matchMedia("(pointer: coarse), (max-width: 767px)").matches;
}

export default function AccentColorPicker() {
  const [color, setColor] = useState(DEFAULT_ACCENT);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(ACCENT_STORAGE_KEY);
    const next =
      saved && /^#[0-9a-fA-F]{6}$/.test(saved) ? saved : DEFAULT_ACCENT;
    setColor(next);
    applyAccent(next);

    const mq = window.matchMedia("(pointer: coarse), (max-width: 767px)");
    const sync = () => setVisible(canDisplayColorPicker());
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setColor(next);
    applyAccent(next);
    localStorage.setItem(ACCENT_STORAGE_KEY, next);
  };

  const handleReset = () => {
    setColor(DEFAULT_ACCENT);
    applyAccent(DEFAULT_ACCENT);
    localStorage.removeItem(ACCENT_STORAGE_KEY);
  };

  if (!visible) return null;

  const isCustom = color.toLowerCase() !== DEFAULT_ACCENT.toLowerCase();

  return (
    <div className="mt-1 flex items-center print:hidden">
      <label className="relative p-1 rounded-md text-[var(--accent-color)] hover:bg-[color-mix(in_srgb,var(--accent-color)_10%,transparent)] transition cursor-pointer inline-flex">
        <span className="sr-only">Change accent color</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m2 22 1-1h3l9-9" />
          <path d="M3 21v-3l9-9" />
          <path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l-3-3Z" />
        </svg>
        <input
          type="color"
          value={color}
          onChange={handleChange}
          title="Change accent color"
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
      </label>
      {isCustom && (
        <button
          type="button"
          onClick={handleReset}
          title="Reset accent color"
          className="p-1 rounded-md text-[var(--accent-color)] hover:bg-[color-mix(in_srgb,var(--accent-color)_10%,transparent)] transition"
        >
          <span className="sr-only">Reset accent color</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
        </button>
      )}
    </div>
  );
}
