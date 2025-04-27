import Link from 'next/link';

export default function MemoriesNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-black font-krub">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Memories Not Found</h1>
        <p className="text-md mb-6 text-gray-600">
          Sorry, the memory you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/memories"
            className="px-4 py-2 bg-[#D3ABAB] text-white rounded-lg hover:bg-[#c19b9b] transition"
          >
            See All Memories
          </Link>
          <Link
            href="/"
            className="px-4 py-2 border border-[#D3ABAB] text-[#D3ABAB] rounded-lg hover:bg-gray-50 transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 