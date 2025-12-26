
const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const formattedDate = new Date(feedback.createAt).toLocaleString();

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
      {/* Message */}
      <p className="text-gray-800 text-base leading-relaxed">
        {feedback.message}
      </p>

      {/* Footer */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <span className="text-sm text-gray-500">
          {formattedDate}
        </span>

        <div className="flex gap-3">
          <button
            // onClick={() => onUpdate(feedback)}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-blue-500 text-blue-600 hover:bg-blue-50 transition"
          >
            Update
          </button>

          <button
            // onClick={() => onDelete(feedback._id)}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-red-500 text-red-600 hover:bg-red-50 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
