"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AccentColorPicker from "./AccentColorPicker";

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [email, setEmail] = useState("Loading...");

  useEffect(() => {
    setIsAnimated(true);

    const emailParts = ["michellewang", "u.northwestern.edu"];
    setTimeout(() => {
      setEmail(`${emailParts[0]}@${emailParts[1]}`);
    }, 800);
  }, []);

  const handleEmailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email !== "Loading...") {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-black font-krub">
        <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-1">
          <Link
            href="/projects"
            className="text-[var(--accent-color)] hover:underline font-medium text-lg"
          >
            /projects
          </Link>
          <Link
            href="/sidequests"
            className="text-[var(--accent-color)] hover:underline font-medium text-lg"
          >
            /sidequests
          </Link>
          <AccentColorPicker />
        </div>
        <main className="max-w-3xl w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="flex flex-col items-center">
              <div className="w-[180px] h-[200px] relative">
                <Image
                  src="/photos/idk1.jpg"
                  alt=" "
                  width={300}
                  height={300}
                  className="rounded-[30px]"
                  priority
                />
              </div>
              <div className="flex gap-6 mt-4 justify-center text-[var(--accent-color)]">
                <a
                  href="https://github.com/michellee-wang"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mw857/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://x.com/michellewang857"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/michellee.wang"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex-1">
              <h1
                className={`text-6xl font-light mb-2 relative transition-all duration-700 ${
                  isAnimated
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="relative z-10">
                  <span className="font-bold">hiii </span>
                  <span className="font-bold">i'm michelle!</span>
                </span>
                <span
                  className={`absolute top-0 left-0 z-0 transform translate-x-[2px] translate-y-[2px] text-[var(--accent-color)] blur-[4px] transition-all duration-1000 delay-300 ${
                    isAnimated ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="font-bold">hiii </span>
                  <span className="font-bold">i'm michelle!</span>
                </span>
              </h1>
              <p className="text-lg mb-3 font-bold">
                passionate about the intersection of technology, growth &amp; storytelling
              </p>

              <ul className="space-y-1 text-sm pl-9 mt-1">
                <li>2nd year @ Northwestern University - majoring in cs +
                industrial engineering</li>
                <li>i love tennis & pickleball</li>
              </ul>

              <h2 className="text-lg font-normal mt-3 mb-1 italic relative inline-block">
                currently:
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[var(--accent-color)]"></span>
              </h2>
              <ul className="space-y-1 text-sm pl-9">
              <li>
                 in school :D (involved in the startup space @ NU)
                </li>
                <li>
                  <Link href="/projects" className="group relative inline-block">
                    building projects - <u>interested devtools/SDKS + productivity tools</u>!
                    <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[var(--accent-color)] transition-all duration-200"></span>
                  </Link>
                </li>
                <li>
                  eating 1000 sweet potatoes (they are my favorite food)
                </li>
              </ul>

              <h2 className="text-lg font-normal mt-3 mb-1 italic relative inline-block">
                previously:
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[var(--accent-color)]"></span>
              </h2>
              
              <ul className="space-y-1 text-sm pl-9">
              <li>
                  <Link
                    href="https://generaltranslation.com"
                    className="group relative inline-block"
                  >
                    swe + growth eng intern @ general translation 5th employee. SF (17)
                    <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[var(--accent-color)] transition-all duration-200"></span>
                  </Link>
                </li>
                <li>
                  RF systems research @ georgia tech research institute. ATL (15)
                </li>

                <li>
                  <Link
                    href="https://github.com/hackclub/ascend"
                    className="group relative inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    logistics for hackathon w/ hack club & spaceX. LA (16)
                    <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[var(--accent-color)] transition-all duration-200"></span>
                  </Link>
                </li>
                <li>
                  national science olympiad: top 10 individual, best placement for GA since 2005, most medals for GA ever
                </li>
              </ul>

              <div className="mt-6 text-sm text-[var(--accent-color)] flex flex-wrap items-center">
                <span>reach me @&nbsp;</span>
                <span>{email}</span>
                <span>
                  &nbsp;i love meeting new people :D <br />
                </span>
              </div>
              <p className="mt-2 text-sm text-[var(--accent-color)]">
                check out my{" "}
                <Link
                  href="/projects"
                  className="underline underline-offset-2 hover:text-[var(--accent-color-hover)]"
                >
                  projects
                </Link>{" "}
                and{" "}
                <Link
                  href="/sidequests"
                  className="underline underline-offset-2 hover:text-[var(--accent-color-hover)]"
                >
                  sidequests
                </Link>{" "}
                page
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
