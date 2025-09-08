import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      {/* Sleek spinner */}
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-2 border-gray-300"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-2 border-t-blue-500 border-r-blue-500 animate-spin"></div>
      </div>

      {/* Text */}
      <p className="text-gray-600 text-lg font-medium animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
