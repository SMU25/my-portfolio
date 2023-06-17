import React from "react";
import { Shimmer } from "src/components/Shimmer";

export const Preloader = () => (
  <div>
    <div className="pb-13.5">
      <Shimmer className="w-3/5 md:w-1/3 h-10" />
      <div className="flex items-center my-3">
        <Shimmer className="w-4/5 md:w-2/5 h-5" />
        <Shimmer className="w-6 h-6 ml-3 rounded" />
      </div>
      <div className="flex w-full h-7">
        <Shimmer className="w-15 rounded-full" />
        <Shimmer className="w-1/3 h-7 ml-4.5" />
      </div>
      <div className="mt-6">
        <Shimmer className="w-full h-4 mt-2.5" />
        <Shimmer className="w-11/12 h-4 mt-2.5" />
        <Shimmer className="w-10/12 h-4 mt-2.5" />
        <Shimmer className="w-full h-4 mt-2.5" />
        <Shimmer className="w-1/3 h-4 mt-2.5" />
      </div>
      <Shimmer className="w-full h-150 mt-11.5" />
    </div>
    {/* <div>
        <Shimmer className="w-2/5 h-9 my-5 ml-1" />
        <div className="grid grid-cols-2 gap-x-5">
          <div>
            <Shimmer className="w-2/5 h-6 my-5" />
            <div>
              <Shimmer className="w-full h-4 mt-2" />
              <Shimmer className="w-11/12 h-4 mt-2" />
              <Shimmer className="w-10/12 h-4 mt-2" />
              <Shimmer className="w-full h-4 mt-2" />
              <Shimmer className="w-1/3 h-4 mt-2" />
            </div>
            <Shimmer className="w-full h-96 mt-7.5" />
          </div>
          <div>
            <Shimmer className="w-2/5 h-6 my-5" />
            <div>
              <Shimmer className="w-full h-4 mt-2" />
              <Shimmer className="w-11/12 h-4 mt-2" />
              <Shimmer className="w-10/12 h-4 mt-2" />
              <Shimmer className="w-full h-4 mt-2" />
              <Shimmer className="w-1/3 h-4 mt-2" />
            </div>
            <Shimmer className="w-full h-96 mt-7.5" />
          </div>
        </div>
      </div> */}
    <div>
      <Shimmer className="w-2/5 h-6 my-5 ml-1" />
      <div className="mt-2 ml-1">
        <Shimmer className="w-full h-4 mt-2" />
        <Shimmer className="w-11/12 h-4 mt-2" />
        <Shimmer className="w-10/12 h-4 mt-2" />
        <Shimmer className="w-full h-4 mt-2" />
        <Shimmer className="w-1/3 h-4 mt-2" />
      </div>
      <Shimmer className="w-full h-60 sm:h-100 md:h-125 gl:h-150 xl:h-160 mt-7.5" />
    </div>
  </div>
);
