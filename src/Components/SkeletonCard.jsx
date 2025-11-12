import React from "react";

const SkeletonCard = () => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="bg-gray-300 h-48 w-full"></div>
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
