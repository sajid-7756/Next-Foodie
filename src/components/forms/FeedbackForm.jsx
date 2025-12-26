"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FeedbackForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFeedback = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (data.insertedId) {
        alert("Feedback Added Successfully");
        e.target.reset();
        router.push("/feedback");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleFeedback} className="text-center space-y-5 p-3">
        <textarea
          required
          className="w-xl border border-dashed"
          placeholder="Write your feedback here..."
          name="message"
          rows={4}
        ></textarea>
        <br />
        <button className="btn" type="submit">
          {loading ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
