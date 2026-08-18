import Link from "next/link";

export function BackLink({
  href = "/",
  label = "← back to home",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-8">
      <Link
        href={href}
        className="text-[var(--accent-color)] border border-[color:color-mix(in_srgb,var(--accent-color)_40%,transparent)] rounded-full px-3 py-1 hover:bg-[color-mix(in_srgb,var(--accent-color)_10%,transparent)] transition font-medium"
      >
        {label}
      </Link>
    </div>
  );
}
