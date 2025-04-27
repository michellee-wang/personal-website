'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-black font-krub">
      <div className="w-full max-w-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
        <p className="text-md mb-6 text-gray-600">
          Sorry, an unexpected error has occurred.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-[#D3ABAB] text-white rounded-lg hover:bg-[#c19b9b] transition"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-4 py-2 border border-[#D3ABAB] text-[#D3ABAB] rounded-lg hover:bg-gray-50 transition"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
} 