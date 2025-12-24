"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
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
