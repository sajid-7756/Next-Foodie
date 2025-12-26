const FeedbackCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 animate-pulse">
      
      {/* Message skeleton */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-11/12"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      </div>

      {/* Footer skeleton */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="h-3 bg-gray-300 rounded w-32"></div>

        <div className="flex gap-3">
          <div className="h-9 w-20 bg-gray-300 rounded-lg"></div>
          <div className="h-9 w-20 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCardSkeleton;
