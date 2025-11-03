"use client";

import React from "react";

const LoadingPlaceholder = ({ items = 8 }: { items?: number }) => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 p-6">
      {Array.from({ length: items }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-700 h-60 rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default LoadingPlaceholder;
