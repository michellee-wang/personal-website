export default function MemoriesLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black font-krub">
      <main className="w-full max-w-5xl mx-auto p-4">
        {/* Header Skeleton */}
        <div className="flex items-center mb-8">
          <div className="w-24 h-5 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded mx-auto w-3/4 animate-pulse"></div>
        </div>
        
        {/* Social icons skeleton */}
        <div className="fixed left-4 top-4 flex flex-col gap-4 z-20">
          <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        
        {/* Grid Skeleton */}
        <div className="flex flex-col gap-2">
          {/* Row 1 */}
          <div className="flex gap-2 w-full h-72">
            <div className="w-5/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-5/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-6/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
          </div>
          
          {/* Row 2 */}
          <div className="flex gap-2 w-full h-96">
            <div className="w-6/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-6/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
          </div>
          
          {/* Row 3 */}
          <div className="flex gap-2 w-full h-96">
            <div className="w-3/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-4/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-3/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-3/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
          </div>
          
          {/* Row 4 */}
          <div className="flex gap-2 w-full h-72">
            <div className="w-3/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-3/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-3/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-3/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
          </div>
          
          {/* Row 5 */}
          <div className="flex gap-2 w-full h-80">
            <div className="w-2/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-4/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
            <div className="w-6/12 bg-gray-200 rounded-[20px] animate-pulse"></div>
          </div>
        </div>
        
        {/* Footer Skeleton */}
        <div className="mt-8 h-4 bg-gray-200 rounded w-full max-w-md mx-auto animate-pulse"></div>
      </main>
    </div>
  );
} 