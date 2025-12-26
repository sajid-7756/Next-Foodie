import React from "react";

const getAllFeedbacks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`, {
    // cache: "force-cache",
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch feedbacks");
  }

  return res.json();
};

export default getAllFeedbacks;
