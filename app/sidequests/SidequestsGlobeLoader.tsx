"use client";

import dynamic from "next/dynamic";

const SidequestsGlobe = dynamic(() => import("./SidequestsGlobe"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full flex items-center justify-center text-sm text-[color-mix(in_srgb,var(--accent-color-dark)_70%,transparent)]">
      loading globe...
    </div>
  ),
});

export default function SidequestsGlobeLoader() {
  return <SidequestsGlobe />;
}
