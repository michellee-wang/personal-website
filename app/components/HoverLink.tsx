import Link from "next/link";
import { type ReactNode } from "react";

export function HoverLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-block"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[var(--accent-color)] transition-all duration-200" />
    </Link>
  );
}
