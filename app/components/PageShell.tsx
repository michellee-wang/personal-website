import { type ReactNode } from "react";

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-4xl",
  wide: "max-w-5xl",
} as const;

type PageShellProps = {
  children: ReactNode;
  width?: keyof typeof widths;
  variant?: "home" | "inner";
  top?: ReactNode;
};

export function PageShell({
  children,
  width = "default",
  variant = "inner",
  top,
}: PageShellProps) {
  const outer =
    variant === "home"
      ? "flex flex-col items-center justify-center min-h-screen p-8 bg-white text-black font-krub"
      : "flex flex-col items-center min-h-screen p-4 sm:p-8 bg-gradient-to-b from-[#f7faff] via-white to-white text-black font-krub overflow-x-hidden";

  return (
    <div className={outer}>
      {top}
      <main className={`${widths[width]} w-full min-w-0`}>{children}</main>
    </div>
  );
}
