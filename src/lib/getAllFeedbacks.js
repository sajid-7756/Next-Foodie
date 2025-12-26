import React from "react";

const getAllFeedbacks = async () => {
  const res = await fetch("http://localhost:3000/api/feedback", {
    cache: "force-cache",
    next: { revalidate: 60 },
  });
  return res.json();
};

export default getAllFeedbacks;
