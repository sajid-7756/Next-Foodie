"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    // Create a new search params
    const newParams = new URLSearchParams(params.toString());
    // Set the params
    newParams.set("search", value);
    // Push it to route
    router.push(`?${newParams.toString()}`);
    e.reset()
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input type="text" name="search" className="px-2 py-3 border" />
        <button type="submit" className="px-3 py-2 bg-blue-300 rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
