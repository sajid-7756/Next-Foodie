const FoodCardSkeleton = () => {
  return (
    <div className="card w-full bg-base-100 shadow-md animate-pulse">
      <div className="h-48 bg-gray-300 rounded-t-xl"></div>

      <div className="card-body space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>

        <div className="flex gap-3 pt-2">
          <div className="h-9 w-full bg-gray-300 rounded"></div>
          <div className="h-9 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
