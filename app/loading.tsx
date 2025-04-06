export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-black font-krub">
      <main className="max-w-3xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile image skeleton */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] bg-gray-200 rounded-md animate-pulse"></div>
            <div className="flex gap-6 mt-4 justify-center">
              <div className="w-7 h-7 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-7 h-7 bg-gray-200 rounded-full animate-pulse"></div>
              <div className="w-7 h-7 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Content skeleton */}
          <div className="mt-4 md:mt-0 flex-1">
            <div className="h-16 bg-gray-200 rounded-md w-3/4 animate-pulse mb-4"></div>
            <div className="h-6 bg-gray-200 rounded-md w-4/5 animate-pulse mb-6"></div>
            
            <div className="space-y-2 pl-9 mt-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
            
            <div className="h-6 bg-gray-200 rounded-md w-1/3 animate-pulse my-6"></div>
            <div className="space-y-2 pl-9">
              <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/5 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
            </div>
            
            <div className="h-6 bg-gray-200 rounded-md w-1/3 animate-pulse my-6"></div>
            <div className="space-y-2 pl-9">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/5 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
            
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mt-6"></div>
          </div>
        </div>
      </main>
    </div>
  );
} 