export const dynamic = "force-dynamic";

import FeedbackCard from "@/components/cards/FeedbackCard";
import getAllFeedbacks from "@/lib/getAllFeedbacks";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Feedbacks",
};

const FeedbackPage = async () => {
  const feedbacks = await getAllFeedbacks();

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">User Feedback</h1>
          <p className="text-gray-500 mt-1">
            What users are saying about the food & service
          </p>
        </div>

        <Link href={"/feedback/add"}>
          <button className="px-3 py-2 bg-blue-400 rounded cursor-pointer my-4">
            Add Feedback
          </button>
        </Link>
    
        {/* Feedback List */}
        <div className="space-y-4">
          {feedbacks.map((feedback) => (
            <FeedbackCard key={feedback._id} feedback={feedback} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeedbackPage;
