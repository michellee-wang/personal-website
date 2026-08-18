"use client";

import { useEffect, useState } from "react";
import {
  ACCENT_HEX_RE,
  ACCENT_STORAGE_KEY,
  DEFAULT_ACCENT,
  applyAccent,
  savedAccent,
} from "../lib/accent";

/** Applies saved accent on every page so /projects and /sidequests match. */
export function AccentColorHydrator() {
  useEffect(() => {
    const saved = localStorage.getItem(ACCENT_STORAGE_KEY);
    if (saved && ACCENT_HEX_RE.test(saved)) applyAccent(saved);
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
    const next = savedAccent();
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

  if (!visible) return null;

  return (
    <label className="relative mt-1 p-1 rounded-md text-[var(--accent-color)] hover:bg-[color-mix(in_srgb,var(--accent-color)_10%,transparent)] transition cursor-pointer print:hidden inline-flex">
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
  );
}
