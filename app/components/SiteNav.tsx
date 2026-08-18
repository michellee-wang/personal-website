import Link from "next/link";
import AccentColorPicker from "./AccentColorPicker";

const links = [
  { href: "/projects", label: "/projects" },
  { href: "/sidequests", label: "/sidequests" },
] as const;

export function SiteNav() {
  return (
    <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-1">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[var(--accent-color)] hover:underline font-medium text-lg"
        >
          {link.label}
        </Link>
      ))}
      <AccentColorPicker />
    </div>
  );
}
