import React from "react";
import { Shimmer } from "src/components/Shimmer";

export const Preloader = () => (
  <div>
    <div className="pb-13.5">
      <Shimmer className="w-3/5 md:w-1/3 h-8 sm:h-10" />
      <div className="flex items-center my-1 sm:my-3">
        <Shimmer className="w-4/5 md:w-2/5 h-5" />
        <Shimmer className="w-6 h-6 ml-3 rounded" />
      </div>
      <div className="flex w-full h-7">
        <Shimmer className="w-17 rounded-full" />
        <Shimmer className="w-1/3 h-7 ml-4.5" />
      </div>
      <Shimmer className="w-full h-50 xs:h-56 sm:h-96 md:h-125 mt-3 sm:mt-4 rounded-10" />
      <div className="mt-3">
        <Shimmer className="w-64 h-5 sm:h-6" />
        <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
          <Shimmer className="w-24 h-7 rounded-2xl" />
          <Shimmer className="w-16 h-7 rounded-2xl" />
          <Shimmer className="w-28 h-7 rounded-2xl" />
          <Shimmer className="w-20 h-7 rounded-2xl" />
          <Shimmer className="w-36 h-7 rounded-2xl" />
        </div>
      </div>
      <div className="mt-5 sm:mt-7">
        <Shimmer className="w-40 h-5 sm:h-6" />
        <div className="mt-3 sm:mt-4">
          <Shimmer className="w-full h-4 mt-2.5" />
          <Shimmer className="w-11/12 h-4 mt-2.5" />
          <Shimmer className="w-10/12 h-4 mt-2.5" />
          <Shimmer className="w-full h-4 mt-2.5" />
          <Shimmer className="w-1/3 h-4 mt-2.5" />
        </div>
      </div>
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
