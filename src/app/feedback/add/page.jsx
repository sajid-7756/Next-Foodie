export const dynamic = "force-dynamic";

import FeedbackForm from "@/components/forms/FeedbackForm";
import React from "react";


const AddFeedback = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-center my-3">Add your Feedback here:</h3>
      <FeedbackForm />
    </div>
  );
};

export default AddFeedback;
