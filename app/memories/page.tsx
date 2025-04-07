'use client';

import Image from "next/image";
import Link from "next/link";

export default function Memories() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black font-krub">
      <main className="w-full max-w-5xl mx-auto p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <Link href="/" className="text-[#D3ABAB] hover:underline mb-4 sm:mb-0">
            ← Back to home
          </Link>
          <h1 className="text-lg sm:text-xl font-normal text-center sm:mx-auto">
            chasing sunsets & making the most of my senior year with my friends
          </h1>
        </div>
        
        {/* Social icons - Hidden on mobile, visible on desktop */}
        <div className="hidden sm:flex fixed left-4 top-4 flex-col gap-4 z-20">
          <a href="https://github.com/michellee-wang" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D3ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://instagram.com/michellee.wang" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D3ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mw857/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D3ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://x.com/michellewang857" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D3ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
        
        {/* Photo Grid - Mobile grid and desktop varied layout */}
        <div className="flex flex-col gap-4 pb-20 sm:pb-0">
          {/* Mobile: one per row, Desktop: Original varied layout */}
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:hidden gap-4">
            {/* Mobile Layout - single column photos */}
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_0098 2 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_4971 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_5689 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_4877 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
           
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_4493 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_0256 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_0591 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_7848 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_0589 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_0267_Original 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_5478 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_2915 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_6156 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_4249 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_4983 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="aspect-square relative rounded-[20px] overflow-hidden">
              <Image 
                src="/photos/IMG_7694 1.png" 
                alt="Memory photo"
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Desktop layout with varying widths */}
          <div className="hidden sm:flex flex-col gap-2">
            {/* Row 1 */}
            <div className="flex gap-2 w-full h-72">
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_0098 2 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_4971 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_5689 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="42vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex gap-2 w-full h-96">
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_4877 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="50vw"
                  className="object-cover"
                  priority
                />
              </div>
             
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_4493 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="50vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="flex gap-2 w-full h-96">
              <div className="w-3/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_0256 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="25vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-4/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_0591 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-3/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_7848 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="16vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-3/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_0589 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="16vw"
                  className="object-cover"
                  priority
                />
              </div>
              
            </div>
            
            {/* Row 4 */}
            <div className="flex gap-2 w-full h-72">
              <div className="w-3/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_0267_Original 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="25vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-3/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_5478 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="25vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-3/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_2915 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="25vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-3/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_6156 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="25vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Row 5 */}
            <div className="flex gap-2 w-full h-80">
              <div className="w-2/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_4249 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="16vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-4/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_4983 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_7694 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="50vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

        
        {/* Row 6 */}
        <div className="flex gap-2 w-full h-80">
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/Screenshot 2025-04-06 at 9.40.17 PM.png" 
                  alt="Memory photo"
                  fill
                  sizes="16vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-7/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/Screenshot 2025-04-06 at 9.39.53 PM.png" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Row 7 */}
            <div className="flex gap-2 w-full h-80">
              <div className="w-4/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/Screenshot 2025-04-06 at 9.39.30 PM.png" 
                  alt="Memory photo"
                  fill
                  sizes="16vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-4/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_0335 2 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-5/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_5949 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Row 8 */}
            <div className="flex gap-2 w-full h-80">
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_6340 1.png" 
                  alt="Memory photo"
                  fill
                  sizes="16vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/Screenshot 2025-04-06 at 10.01.37 PM.png" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-5/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_5896.PNG" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
             </div> 
             {/* Row 9 */}
             <div className="flex gap-2 w-full h-80">
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_5708.JPG" 
                  alt="Memory photo"
                  fill
                  sizes="16vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="w-6/12 relative rounded-[20px] overflow-hidden">
                <Image 
                  src="/photos/IMG_6406.JPG" 
                  alt="Memory photo"
                  fill
                  sizes="33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Spotify Playlist */}
        <div className="w-full max-w-md mx-auto my-8 px-4">
          <h3 className="text-center text-lg mb-3 font-light italic text-[#D3ABAB]">my fav song rn</h3>
          <iframe 
            src="https://open.spotify.com/embed/track/1bqrRn1pJWowNLA5N9L6uW?utm_source=generator"
            width="100%" 
            height="152" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="rounded-[20px] shadow-md"
          ></iframe>
        </div>
        
        {/* Mobile social icons at bottom of page */}
        <div className="sm:hidden flex justify-center gap-6 mt-8 mb-4">
          <a href="https://github.com/michellee-wang" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D3ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://instagram.com/michellee.wang" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D3ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mw857/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D3ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://x.com/michellewang857" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D3ABAB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
        
        {/* Footer text */}
        <p className="mt-4 sm:mt-8 text-center text-gray-600 text-sm px-4">
          © 2025 Michelle Wang. Built with Next.js and Tailwind CSS.
        </p>
      </main>
    </div>
  );
} 