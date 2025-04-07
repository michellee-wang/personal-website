'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    // Start the animation after component mounts
    setIsAnimated(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-black font-krub">
      {/* Memories link in top right */}
      <div className="absolute top-4 right-4 z-10">
        <Link 
          href="/memories" 
          className="text-[#D3ABAB] hover:underline font-medium text-lg"
        >
          /memories
        </Link>
      </div>

      <main className="max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] relative">
              <Image
                src="/photos/idk.png"
                alt=" "
                width={200}
                height={200}
                className="rounded-md"
                priority
              />
            </div>
            <div className="flex gap-6 mt-4 justify-center">
              <a href="https://github.com/michellee-wang" target="_blank" rel="noopener noreferrer">
                <Image src="/github.svg" alt="GitHub" width={28} height={28} />
              </a>
              <a href="https://www.linkedin.com/in/mw857/" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} />
              </a>
              <a href="https://instagram.com/michellee.wang" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.svg" alt="Instagram" width={28} height={28} />
              </a>
              <a href="https://x.com/michellewang857" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="/x logo.svg" 
                  alt="X" 
                  width={28} 
                  height={28}
                  className="filter-pink"
                  style={{ filter: 'invert(85%) sepia(8%) saturate(529%) hue-rotate(314deg) brightness(98%) contrast(86%)' }}
                />
              </a>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 flex-1">
            <h1 className={`text-6xl font-light mb-2 relative transition-all duration-700 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="relative z-10">
                <span className="font-bold italic">hiii  </span>
                <span className="font-bold">i'm michelle!</span>
              </span>
              <span className={`absolute top-0 left-0 z-0 transform translate-x-[2px] translate-y-[2px] text-[#D3ABAB] blur-[4px] transition-all duration-1000 delay-300 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}>
                <span className="font-bold italic">hiii  </span>
                <span className="font-bold">i'm michelle!</span>
              </span>
            </h1>
            <p className="text-lg mb-3 font-bold">
              i'm an incoming freshmen @ northwestern majoring in cs + industrial engineering
            </p>
            
            <ul className="space-y-1 text-sm pl-9 mt-1">
              <li>hs senior in atlanta & 17 years old</li>
              <li>tennis & pickleball addict</li>
              <li>science olympiad 2x state champion 3x nats competitor (14th @ nats)</li>
            </ul>
            
            <h2 className="text-lg font-normal mt-3 mb-1 italic relative inline-block">
              currently:
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#D3ABAB]"></span>
            </h2>
            <ul className="space-y-1 text-sm pl-9">
              <li>
                <Link 
                  href="/memories" 
                  className="group relative inline-block"
                >
                  chasing sunsets & making the most of my senior year with my friends
                  <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#D3ABAB] transition-all duration-200"></span>
                </Link>
              </li>
              <li>
                sidequesting @ ga tech & startup exchange
              </li>
              <li>
                <Link 
                  href="https://x.com/michellewang857/status/1908747846569824715"
                  className="group relative inline-block"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  working on an AI PDF text editor (cursor for pdfs)
                  <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#D3ABAB] transition-all duration-200"></span>
                </Link>
              </li>
              <li>learning machine learning & data sci</li>
            </ul>
            
            <h2 className="text-lg font-normal mt-3 mb-1 italic relative inline-block">
              previously:
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#D3ABAB]"></span>
            </h2>
            <ul className="space-y-1 text-sm pl-9">
              <li>RF comms research @ georgia tech research institute</li>
              <li>
                <Link 
                  href="https://github.com/michellee-wang/wharton-data-sci"
                  className="group relative inline-block"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  wharton hs data sci competition
                  <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#D3ABAB] transition-all duration-200"></span>
                </Link>
              </li>

                <li>
                <Link 
                  href="https://ascend.hackclub.com"
                  className="group relative inline-block"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  organized hackathons w/ hack club (and spaceX)!
                  <span className="absolute left-0 bottom-0 w-full h-0 group-hover:h-[3px] bg-[#D3ABAB] transition-all duration-200"></span>
                </Link>
              </li>
            </ul>
            
            <p className="mt-6 text-sm text-[#D3ABAB]">
              reach me @ michellewang857 [at] gmail [dot] com i love meeting new people :D
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
