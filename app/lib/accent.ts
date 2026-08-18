export const DEFAULT_ACCENT = "#7691cc";
export const DEFAULT_ACCENT_DARK = "#4f67a8";
export const ACCENT_STORAGE_KEY = "accent-color";
export const ACCENT_CHANGE_EVENT = "accent-color-change";
export const ACCENT_HEX_RE = /^#[0-9a-fA-F]{6}$/;

export function darkenHex(hex: string, amount: number): string {
  const raw = hex.replace("#", "");
  if (raw.length !== 6) return hex;
  const num = parseInt(raw, 16);
  const r = Math.max(0, Math.round(((num >> 16) & 0xff) * (1 - amount)));
  const g = Math.max(0, Math.round(((num >> 8) & 0xff) * (1 - amount)));
  const b = Math.max(0, Math.round((num & 0xff) * (1 - amount)));
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

export function hexToRgb(hex: string) {
  const raw = hex.replace("#", "");
  if (raw.length !== 6) return "118, 145, 204";
  const num = parseInt(raw, 16);
  return `${(num >> 16) & 0xff}, ${(num >> 8) & 0xff}, ${num & 0xff}`;
}

export function applyAccent(hex: string) {
  const root = document.documentElement;
  root.style.setProperty("--accent-color", hex);
  root.style.setProperty("--accent-color-hover", darkenHex(hex, 0.12));
  root.style.setProperty("--accent-color-dark", darkenHex(hex, 0.22));
  root.style.setProperty("--accent-color-darker", darkenHex(hex, 0.32));
  window.dispatchEvent(new CustomEvent(ACCENT_CHANGE_EVENT, { detail: hex }));
}

export function readAccent(varName: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return value || fallback;
}

export function savedAccent(): string {
  const saved = localStorage.getItem(ACCENT_STORAGE_KEY);
  return saved && ACCENT_HEX_RE.test(saved) ? saved : DEFAULT_ACCENT;
}
