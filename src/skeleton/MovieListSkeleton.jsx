import React from "react";
import Shimmer from "./Shimmer";

const MovieListSkeleton = () => {
  const skeletonImg = [1, 2, 3, 4];
  return (
    <div className="mt-10 block  md:grid grid-cols-4x gap-5 w-full overflow-hidden ">
      {skeletonImg.map((num) => (
        <div
          className=" h-40 w-full rounded relative overflow-hidden mt-5 "
          key={num}
        >
          <div className="bg-[#060b20] text-[#0c1127] w-full h-full"></div>
          <Shimmer />
        </div>
      ))}
    </div>
  );
};

export default MovieListSkeleton;
