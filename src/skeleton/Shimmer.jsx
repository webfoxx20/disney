import React from "react";

const Shimmer = () => {
  return (
    <div className="absolute w-full h-full left-0 top-0">
      <div className="bg-[#0c1127] h-full w-[50%]  transform -skew-x-[30deg] animate-shimmer"></div>
    </div>
  );
};

export default Shimmer;
