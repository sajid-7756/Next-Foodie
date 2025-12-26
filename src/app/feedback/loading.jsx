import FeedbackCardSkeleton from "@/components/skeletons/FeedbackSkeleton";
import getAllFeedbacks from "@/lib/getAllFeedbacks";
import React from "react";

const loading = async () => {
  const feedbacks = await getAllFeedbacks();
  return (
    <div className="space-y-4">
      {[Array(feedbacks.length)].map((_, index) => (
        <FeedbackCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;
