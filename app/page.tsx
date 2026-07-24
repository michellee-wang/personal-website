"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        <div className="absolute top-4 right-4 z-10 flex gap-4">
          <Link
            href="/projects"
            className="text-[#7691cc] hover:underline font-medium text-lg"
          >
            /projects
          </Link>
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
              <div className="flex gap-6 mt-4 justify-center">
                <a
                  href="https://github.com/michellee-wang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/github.svg"
                    alt="GitHub"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mw857/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="https://instagram.com/michellee.wang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={28}
                    height={28}
                  />
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
                  className={`absolute top-0 left-0 z-0 transform translate-x-[2px] translate-y-[2px] text-[#7691cc] blur-[4px] transition-all duration-1000 delay-300 ${
                    isAnimated ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="font-bold">hiii </span>
                  <span className="font-bold">i'm michelle!</span>
                </span>
              </h1>
              <p className="text-lg mb-3 font-bold">
                I'm 2nd year @ Northwestern University majoring in cs +
                industrial engineering management sciences
              </p>

              <ul className="space-y-1 text-sm pl-9 mt-1">
                <li>from alpharetta, georgia</li>
                <li>moved across the nation to SF last summer to work @ a startup </li>
                <li>tennis & pickleball addict!</li>
              </ul>

              <h2 className="text-lg font-normal mt-3 mb-1 italic relative inline-block">
                currently:
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#7691cc]"></span>
              </h2>
              <ul className="space-y-1 text-sm pl-9">
              <li>
                 in school :D (very involved in the startup space @ NU)
                </li>
                <li>
                  <Link href="/projects" className="group relative inline-block">
                    building projects - <u>interested devtools/SDKS + agent orchestration</u>!
                    <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
                  </Link>
                </li>
                <li>
                  sidequesting (Italy 6/13-7/18) & trying to find myself
                </li>
                <li>
                  looking for roles in intersection of product, growth & engineering!
                </li>
              </ul>

              <h2 className="text-lg font-normal mt-3 mb-1 italic relative inline-block">
                previously:
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#7691cc]"></span>
              </h2>
              
              <ul className="space-y-1 text-sm pl-9">
              <li>
                  <Link
                    href="https://generaltranslation.com"
                    className="group relative inline-block"
                  >
                    swe + growth eng intern @ general translation (5th employee, 2nd intern)
                    <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
                  </Link>
                </li>
                <li>
                  RF comms research @ georgia tech research institute
                </li>

                <li>
                  <Link
                    href="https://github.com/hackclub/ascend"
                    className="group relative inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    logistics for hackathons w/ hack club (and spaceX)!
                    <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
                  </Link>
                </li>
                <li>
                  <u>national science olympiad:</u> top 10 individual, best placement for GA since 2005, most medals for GA ever
                </li>
              </ul>

              <div className="mt-6 text-sm text-[#7691cc] flex flex-wrap items-center">
                <span>reach me @&nbsp;</span>
                <span>{email}</span>
                <span>
                  &nbsp;i love meeting new people :D <br />
                </span>
              </div>
              <p className="mt-2 text-sm text-[#7691cc]">
                please check out my{" "}
                <Link
                  href="/projects"
                  className="underline underline-offset-2 hover:text-[#5f7ab8]"
                >
                  projects
                </Link>{" "}
                and{" "}
                <Link
                  href="/sidequests"
                  className="underline underline-offset-2 hover:text-[#5f7ab8]"
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
