const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4 animate-pulse">
      
      {/* Header */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

        {/* Name + Date */}
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-32"></div>
          <div className="h-3 bg-gray-300 rounded w-24"></div>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-5 h-5 bg-gray-300 rounded"
            ></div>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="h-3 bg-gray-300 rounded w-40"></div>
        <div className="h-8 bg-gray-300 rounded w-16"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
