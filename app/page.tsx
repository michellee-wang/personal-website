"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HoverLink } from "./components/HoverLink";
import { PageShell } from "./components/PageShell";
import { SiteNav } from "./components/SiteNav";
import { SocialLinks } from "./components/SocialLinks";
import { UnderlinedHeading } from "./components/UnderlinedHeading";

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [email, setEmail] = useState("Loading...");

  useEffect(() => {
    setIsAnimated(true);
    const emailParts = ["michellewang", "u.northwestern.edu"];
    const timer = setTimeout(() => {
      setEmail(`${emailParts[0]}@${emailParts[1]}`);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageShell variant="home" width="narrow" top={<SiteNav />}>
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
          <SocialLinks />
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
              <span className="font-bold">i&apos;m michelle!</span>
            </span>
            <span
              className={`absolute top-0 left-0 z-0 transform translate-x-[2px] translate-y-[2px] text-[var(--accent-color)] blur-[4px] transition-all duration-1000 delay-300 ${
                isAnimated ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="font-bold">hiii </span>
              <span className="font-bold">i&apos;m michelle!</span>
            </span>
          </h1>
          <p className="text-lg mb-3 font-bold">
          passionate about the intersection of technology, growth &amp; storytelling
          </p>

          <ul className="space-y-1 text-sm pl-9 mt-1">
            <li>
              2nd year @ Northwestern &mdash; cs + industrial engineering
              management sciences
            </li>
            <li>i love tennis &amp; pickleball</li>
          </ul>

          <UnderlinedHeading>currently:</UnderlinedHeading>
          <ul className="space-y-1 text-sm pl-9">
            <li>in school (involved in the startup space @ NU)</li>
            <li>
              <HoverLink href="/projects">
                building projects -{" "}
                interested devtools/SDKS, productivity tools
              </HoverLink>
            </li>
            <li>
              eating 10000 sweet potatoes (they are my favorite food)
            </li>
          </ul>

          <UnderlinedHeading>previously:</UnderlinedHeading>
          <ul className="space-y-1 text-sm pl-9">
            <li>
              <HoverLink href="https://generaltranslation.com">
                swe + growth eng intern @ general translation, 5th employee. SF (17)
              </HoverLink>
            </li>
            <li>rf systems research @ georgia tech research institute. ATL (15)</li>
            <li>
              <HoverLink href="https://github.com/hackclub/ascend" external>
                logistics for hackathons w/ hack club &amp; spaceX. LA (16)
              </HoverLink>
            </li>
            <li>
              national science olympiad: top 10 individual, best
              placement for GA since 2005, most medals for GA ever 
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
    </PageShell>
  );
}
