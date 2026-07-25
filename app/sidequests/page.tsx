import Link from "next/link";
import SidequestsGlobeLoader from "./SidequestsGlobeLoader";

export default function Sidequests() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-b from-[#f7faff] via-white to-white text-black font-krub">
      <main className="max-w-6xl w-full pb-16">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-[#7691cc] border border-[#7691cc]/40 rounded-full px-3 py-1 hover:bg-[#7691cc]/10 transition font-medium"
          >
            ← back to home
          </Link>
          <Link
            href="/projects"
            className="text-[#7691cc] border border-[#7691cc]/40 rounded-full px-3 py-1 hover:bg-[#7691cc]/10 transition font-medium"
          >
            /projects
          </Link>
        </div>

        <h1 className="text-5xl font-bold mb-2 text-[#4f67a8]">sidequests</h1>
        <p className="text-sm text-black/70 mb-10 max-w-xl">
          places that I&apos;ve lived for the sidequest — click around the globe
          and read the story for each pin. I love traveling and experiencing new
          cultures and people.
        </p>

        <SidequestsGlobeLoader />
      </main>
    </div>
  );
}
