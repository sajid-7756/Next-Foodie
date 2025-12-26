import Image from "next/image";

const ReviewCard = ({ review }) => {
  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <Image
          src={review.photo}
          alt={review.user}
          height={200}
          width={200}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">
            {review.user}
          </h4>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>

        {/* Rating */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < review.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.097 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed text-sm">
        {review.review}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{review.likes.length} people found this helpful</span>

        <button className="hover:text-emerald-600 transition">
          👍 Like
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
