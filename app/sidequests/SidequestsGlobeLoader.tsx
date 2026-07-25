"use client";

import dynamic from "next/dynamic";

const SidequestsGlobe = dynamic(() => import("./SidequestsGlobe"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full flex items-center justify-center text-sm text-[#4f67a8]/70">
      loading globe...
    </div>
  ),
});

export default function SidequestsGlobeLoader() {
  return <SidequestsGlobe />;
}
