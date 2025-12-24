const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Image Skeleton */}
        <div className="w-full h-[350px] bg-gray-300 rounded-2xl"></div>

        {/* Info Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>

          <div className="flex gap-3">
            <div className="h-6 w-32 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-32 bg-gray-300 rounded-full"></div>
          </div>

          <div className="h-7 bg-gray-300 rounded w-1/4"></div>

          <div className="h-12 bg-gray-300 rounded-xl w-full md:w-40"></div>
        </div>
      </div>

      {/* Video Section Skeleton */}
      <div className="mt-14">
        <div className="h-7 bg-gray-300 rounded w-64 mb-4"></div>
        <div className="w-full aspect-video bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
