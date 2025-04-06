'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-black">
          <div className="w-full max-w-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
            <p className="text-md mb-6 text-gray-600">
              Sorry, an unexpected error occurred in the application.
            </p>
            <button
              onClick={() => reset()}
              className="px-4 py-2 bg-[#D3ABAB] text-white rounded-lg hover:bg-[#c19b9b] transition"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 