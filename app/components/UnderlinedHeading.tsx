import { type ReactNode } from "react";

export function UnderlinedHeading({
  children,
  className = "text-lg font-normal mt-3 mb-1 italic relative inline-block",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={className}>
      {children}
      <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[var(--accent-color)]" />
    </h2>
  );
}
