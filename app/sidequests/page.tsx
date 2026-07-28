import Link from "next/link";
import PhotoGallery from "./PhotoGallery";
import SidequestsGlobeLoader from "./SidequestsGlobeLoader";

export default function Sidequests() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-gradient-to-b from-[#f7faff] via-white to-white text-black font-krub overflow-x-hidden">
      <main className="max-w-5xl w-full min-w-0">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-[#7691cc] border border-[#7691cc]/40 rounded-full px-3 py-1 hover:bg-[#7691cc]/10 transition font-medium"
          >
            ← back to home
          </Link>
        </div>

        <h1 className="text-5xl font-bold mb-2 text-[#4f67a8]">sidequests</h1>
        <p className="text-sm mb-8">
          places i&apos;ve &apos;lived&apos; — click a pin (or the labels below)
          to read each story. i love traveling and experiencing new cultures and
          people.<br />  i also enjoy photography, skiing, cooking and tennis! SCROLL FOR PHOTOS!!!
        </p>

        <SidequestsGlobeLoader />
        <PhotoGallery />
      </main>
    </div>
  );
}
