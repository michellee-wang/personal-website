"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectLink = {
  label: string;
  href: string;
};

type Highlight = {
  title: string;
  body: string;
};

type Project = {
  id: string;
  title: string;
  category: string;
  context: string;
  summary: string;
  links: ProjectLink[];
  image?: string;
  highlights?: Highlight[];
  stack?: string;
};

const projects: Project[] = [
  {
    id: "general-translation",
    title: "General Translation",
    category: "internship",
    context: "SWE + growth eng intern · SF summer · 5th employee, 2nd intern",
    summary:
      "Before my freshman year of college, I moved to SF to work on this startup. General Translation is a dev tool used for localization (translating websites in different languages). During my time here, I one of the coolest things I did was help build an AI agent to implement our library on Next.JS webpages through Github PR. Outside of pure SWE I also worked on redesigning + coding the landing page, growth and small bug fixes",
    image: "/projects/general-translation.jpg",
    links: [{ label: "Site", href: "https://generaltranslation.com" }],
    highlights: [
      {
        title: "Landing page redesign",
        body: "Redesigned and coded the whole landing page, iterating with the founder — result got compliments from the board and investors.",
      },
      {
        title: "Locadex testing + eval",
        body: "Testing and eval for Locadex, an AI agent that implements the library — covering edge cases like React fragments and bad async rendering practices.",
      },
      {
        title: "CI/CD actions + dashboard",
        body: "Built CI/CD GitHub Action commands that work with the Locadex agent, and implemented the dashboard side so teams can run and monitor those flows.",
      },
      {
        title: "Growth engineering",
        body: "Built features for virality and gathered ~300k views on technical spaces.",
      },
    ],
    stack: "TypeScript, Next.js, React, GitHub Actions / CI/CD, Python",
  },
  {
    id: "gtri",
    title: "RF Comms — GTRI",
    category: "research",
    context:
      "Systems Intern · Georgia Tech Research Institute · Sensor & Electromagnetic Applications Lab · June–July 2024",
    summary:
      "Under the mentorship of Daniel Martinez from the SEAL Lab, my team designed, prototyped, and validated an RF transmitter/receiver achieving under 10dB signal loss and 99% transmission efficiency across 2.4–5.8 GHz frequency bands.",
    image: "/projects/gtri.png",
    links: [],
    highlights: [
      {
        title: "RF TX/RX design",
        body: "Designed, prototyped, and validated an RF transmitter/receiver with under 10dB signal loss and 99% transmission efficiency across the 2.4–5.8 GHz bands.",
      },
      {
        title: "Lab validation",
        body: "Validated performance with spectrum and network analyzers across 5+ circuit configurations.",
      },
      {
        title: "Documentation + presentation",
        body: "Documented test procedures so other researchers could reproduce them, and presented findings to senior research staff.",
      },
    ],
    stack: "RF circuit design, spectrum analyzer, network analyzer",
  },
  {
    id: "muse",
    title: "Muse 🎵",
    category: "full stack",
    context:
      "built for an open ended assignment for Northwestern's Disc club · API may be asleep on Render's free tier — first request can take a minute",
    summary:
      "Muse is a social app that matches people by music taste via Spotify — profiles, top artists, and saved connections. This started as a club project with a stubbed user API; I later migrated auth to Supabase so real accounts replace the random artist data.",
    links: [
      { label: "Live", href: "https://disc-app-five.vercel.app" },
      { label: "API", href: "https://disc-users-api.onrender.com" },
      { label: "GitHub", href: "https://github.com/michellee-wang/muse" },
    ],
    highlights: [
      {
        title: "Spotify OAuth",
        body: "Spotify OAuth 2.0 + Web API to authenticate users, sync profile data, and display personalized top artists.",
      },
      {
        title: "Social Discovery",
        body: "Browse users by taste, open profiles, and save connections in-app against persisted user records.",
      },
      {
        title: "Auth Migration",
        body: "Replaced stub/random artist flows with Supabase Auth + PostgreSQL so real accounts and saved connections persist across sessions.",
      },
      {
        title: "Backend API",
        body: "RESTful API with 6+ endpoints for auth, connection saving, and Spotify data. Frontend on Vercel, backend on Render — CORS middleware and environment-based config for production cross-origin requests.",
      },
    ],
    stack: "React, Node.js, Express, PostgreSQL, Supabase, Spotify API",
  },
  {
    id: "ascend",
    title: "Ascend",
    category: "events",
    context: "Hack Club Athena · hackathon organizer · Jan 2023–Present",
    summary:
      "A lot of my work in high school was with non profit Hack Club to introduce more girls to CS. I organized Ascend, the largest U.S. high school girls' hackathon in 2024. Hack Club gave us full autonomy (even though we were all high schoolers) of the event. I owned all logistics from venue to food to flights. I organized coding workshops and mentorship throughout the event",
    image: "/projects/ascend.png",
    links: [
      { label: "GitHub", href: "https://github.com/hackclub/ascend" },
    ],
    highlights: [
      {
        title: "Ascend logistics",
        body: "Brought 50 students from 6 countries and 27 states to LA to build and ship projects, then pitch them to VCs and SpaceX engineers.",
      },
      {
        title: "Fundraising + budget",
        body: "Raised $53,560 and partnered with SpaceX, Girls Who Code, and Kode with Klossy, and managed the full budget including international travel logistics for attendees who otherwise could not have attended.",
      },
      {
        title: "Blossom",
        body: "Co-Organized Blossom, Atlanta's first gender-focused hackathon, in partnership with Girl Scouts of Atlanta — taught 40 students with no prior programming experience to build and demo their first project.",
      },
    ],
  },
  {
    id: "tiltstack",
    title: "TiltStack",
    category: "full stack",
    context: "coming soon",
    summary: "details coming in a bit — placeholder for now.",
    links: [],
  },
  {
    id: "sync",
    title: "Sync",
    category: "full stack",
    context: "HackIllinois · Modal + Solana tracks",
    summary:
      "Geometry Dash on crack. Most of my team was new to hackathons, so we aimed for something that was actually fun to play and technically ambitious enough to compete. I'd wanted to train a model on MIDI for a while to create custom music and one of my friends and I's favorite game is Geometry Dash so we thought to integrate solona with it to create a fun and gambling aspect while having music created by a ML model in the background. Practical? Not really but very creative! I learned a lot and am very proud of this project because it was so technically difficult (read more in the README).",
    links: [
      { label: "GitHub", href: "https://github.com/michellee-wang/sync" },
    ],
    highlights: [
      {
        title: "Music Generation",
        body: "Trained an LSTM on Modal GPUs to generate tracks from a user's top song MIDI, then deployed inference as a REST API on Modal so the game client could request levels without running training locally.",
      },
      {
        title: "TypeScript Game Engine",
        body: "Built the full game in TypeScript with custom gravity, collisions, jump arcs, and terrain generation synced to the music beat (Tone.js for audio timing).",
      },
      {
        title: "Verifiable Randomness",
        body: "Used ORAO VRF on Solana so terrain generation is cryptographically verifiable — not just a client-side PRNG that duel opponents could game.",
      },
      {
        title: "Auth + Data",
        body: "Privy for wallet auth (no browser extension required), Firebase for scores and duel match state; wallet connect only when staking or dueling. Solana/Anchor programs handle on-chain stake and duel settlement.",
      },
    ],
    stack:
      "Next.js + React (TypeScript), custom TS game engine, Tone.js, Solana/Anchor, ORAO VRF, Privy, Firebase, Modal-hosted LSTM inference",
  },
  {
    id: "wharton",
    title: "Basketball Tournament Prediction Analysis",
    category: "data science",
    context: "Wharton Data Science Competition",
    summary:
      "Predictive analytics pipeline over 10,438+ NCAA basketball game records — Elo, WHR, and KenPom team ratings plus an ensemble of classifiers. Achieved 78.5% prediction accuracy and 0.86 AUC.",
    links: [
      {
        label: "Competition",
        href: "https://wsb.wharton.upenn.edu/wharton-data-competition/",
      },
      {
        label: "GitHub",
        href: "https://github.com/michellee-wang/wharton-data-sci",
      },
    ],
    highlights: [
      {
        title: "Rating Systems",
        body: "Implemented Elo, Whole-History Rating (WHR), and KenPom algorithms to generate dynamic team strength rankings used as model features.",
      },
      {
        title: "Model Benchmarking",
        body: "Trained and tuned Logistic Regression, Random Forest, and Gradient Boosting with Scikit-learn — 78.5% accuracy and 0.86 AUC via tuning and cross-validation.",
      },
      {
        title: "Ensemble",
        body: "Combined model outputs into an ensemble for more stable tournament predictions than any single classifier alone.",
      },
      {
        title: "Data Pipeline",
        body: "Processed 10,438+ game records — joined game logs, regional groups, and team metadata across CSVs; visualized performance with Matplotlib and Seaborn for the Wharton presentation.",
      },
    ],
    stack:
      "Python, pandas, numpy, scikit-learn, XGBoost, matplotlib, seaborn, Jupyter",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasDetails = !!(project.highlights && project.highlights.length > 0);

  return (
    <article className="relative border border-[#7691cc]/30 bg-[#7691cc]/[0.05] rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-md">
      <span className="absolute top-3 right-3 z-10 rounded-full border border-[#7691cc]/40 bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#3f568f]">
        {project.category}
      </span>

      <div
        className={`grid ${
          project.image ? "md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]" : ""
        }`}
      >
        {project.image && (
          <div className="relative h-44 md:h-full md:min-h-[220px] bg-[#d8e0f2]">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        )}

        <div className="p-5 pr-24">
          <div className="flex items-center gap-2.5 flex-wrap mb-1">
            <h2 className="text-xl font-bold text-[#3f568f]">{project.title}</h2>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7691cc] text-sm font-medium underline underline-offset-2 hover:text-[#5f7ab8]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-black/55 mb-2">{project.context}</p>
          <p className="text-sm text-black/80 leading-relaxed mb-3">
            {project.summary}
          </p>
          {project.stack && (
            <p className="text-xs text-black/55 mb-4 leading-relaxed">
              <span className="font-semibold text-[#3f568f]">STACK: </span>
              {project.stack}
            </p>
          )}

          {hasDetails && (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                open
                  ? "border-[#7691cc]/40 text-[#3f568f] bg-white/70 hover:bg-white"
                  : "border-[#7691cc] text-white bg-[#7691cc] hover:bg-[#5f7ab8]"
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7691cc]/50 focus-visible:ring-offset-2`}
            >
              {open ? "hide details" : "more details"}
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {hasDetails && (
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 pt-0 border-t border-[#7691cc]/20">
              <div className="pt-4">
                <h3 className="text-sm font-semibold mb-2 text-[#3f568f] uppercase tracking-wide">
                  Highlights
                </h3>
                <ul className="space-y-2 text-sm">
                  {project.highlights!.map((h) => (
                    <li key={h.title} className="leading-relaxed">
                      <span className="font-semibold text-[#3f568f]">
                        {h.title}.{" "}
                      </span>
                      <span className="text-black/75">{h.body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-b from-[#f7faff] via-white to-white text-black font-krub">
      <main className="max-w-4xl w-full">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-[#7691cc] border border-[#7691cc]/40 rounded-full px-3 py-1 hover:bg-[#7691cc]/10 transition font-medium"
          >
            ← back to home
          </Link>
          <Link
            href="/memories"
            className="text-[#7691cc] border border-[#7691cc]/40 rounded-full px-3 py-1 hover:bg-[#7691cc]/10 transition font-medium"
          >
            /memories
          </Link>
        </div>

        <h1 className="text-5xl font-bold mb-2 text-[#4f67a8]">projects</h1>
        <p className="text-sm mb-8">
          a few things i&apos;ve built recently — open more details on any
          project. full history on{" "}
          <a
            href="https://github.com/michellee-wang"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block text-[#7691cc]"
          >
            github
            <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#7691cc] transition-all duration-200"></span>
          </a>
          .
        </p>

        <div className="grid grid-cols-1 gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
