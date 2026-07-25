import Link from "next/link";
import SidequestsGlobeLoader from "./SidequestsGlobeLoader";

export default function Sidequests() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-white text-black font-krub">
      <main className="max-w-6xl w-full pb-16">
        <div className="absolute top-4 right-4 z-10 flex gap-4">
          <Link
            href="/"
            className="text-[#7691cc] hover:underline font-medium text-lg"
          >
            /home
          </Link>
          <Link
            href="/projects"
            className="text-[#7691cc] hover:underline font-medium text-lg"
          >
            /projects
          </Link>
        </div>

        <h1 className="text-5xl font-bold mb-3 mt-8 text-[#4f67a8]">sidequests</h1>
        <p className="text-sm mb-10 max-w-xl leading-relaxed">
          places I&apos;ve lived and traveled — click a pin (or the labels
          below) to read each story. I love traveling and experiencing new
          cultures and people.
        </p>

        <SidequestsGlobeLoader />
      </main>
    </div>
  );
}
