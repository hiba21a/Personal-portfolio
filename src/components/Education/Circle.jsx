
import React from "react";

const Circle = () => {
  return (
    <div className="relative flex items-start justify-center w-24 h-24 pt-2.5">
      <div className="w-3 h-3 bg-blue-600 rounded-full "></div>

      <div className="absolute w-full h-full  ">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-5 border-t-3 border-gray-500 rounded-t-full"></div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-2.5 h-5 border-b-3 border-gray-500 rounded-b-full"></div>

        <div className="absolute left-9.5 top-1.5 -translate-y-1/2 h-2 w-4 border-l-3 border-gray-500 rounded-l-full"></div>

        <div className="absolute right-9.5  top-1.5  -translate-y-1/2 h-2 w-4 border-r-3 border-gray-500 rounded-r-full"></div>
      </div>
    </div>
  );
};

export default Circle;
