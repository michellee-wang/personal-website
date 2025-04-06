import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-black font-krub">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-md mb-6 text-gray-600">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-[#D3ABAB] text-white rounded-lg hover:bg-[#c19b9b] transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 