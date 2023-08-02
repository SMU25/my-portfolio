import React, { FC } from "react";
import { Shimmer } from "src/components/Shimmer";

export const Preloader: FC = () => (
  <div>
    <div className="pb-13.5">
      <Shimmer className="w-3/5 md:w-1/3 h-9 sm:h-12" />
      <div className="flex items-center my-1 sm:my-3">
        <Shimmer className="w-4/5 md:w-2/5 h-5" />
        <Shimmer className="w-6 h-6 ml-3 rounded" />
      </div>
      <div className="flex w-full h-7">
        <Shimmer className="w-17 rounded-full" />
        <Shimmer className="w-1/3 h-7 ml-4.5" />
      </div>
      <Shimmer className="w-full max-h-50 xs:max-h-56 sm:max-h-96 md:max-h-125 mt-3 sm:mt-4 rounded-10" />
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
        <div className="mt-2 sm:mt-4">
          <Shimmer className="w-full h-3 sm:h-4 mt-2 sm:mt-2.5" />
          <Shimmer className="w-11/12 h-3 sm:h-4 mt-2 sm:mt-2.5" />
          <Shimmer className="w-10/12 h-3 sm:h-4 mt-2 sm:mt-2.5" />
          <Shimmer className="w-full h-3 sm:h-4 mt-2 sm:mt-2.5" />
          <Shimmer className="w-1/3 h-3 sm:h-4 mt-2 sm:mt-2.5" />
        </div>
      </div>
    </div>

    <div>
      <Shimmer className="w-2/5 h-6 sm:h-8 mt-5 mb-4 sm:mb-6 ml-1" />
      <div>
        <div className="flex flex-col h-87.5 xs:h-125 sm:h-150 lg:h-200">
          <Shimmer className="w-2/5 max-h-4.5 sm:max-h-6 h-full" />
          <div className="mt-0.5 sm:mt-3 mb-2 xs:mb-3 sm:mb-5 lg:mb-7.5">
            <Shimmer className="w-full h-2 xs:h-3 sm:h-4 mt-1.5 xs:mt-2 sm:mt-2.5" />
            <Shimmer className="w-11/12 h-2 xs:h-3 sm:h-4 mt-1.5 xs:mt-2 sm:mt-2.5" />
            <Shimmer className="w-10/12 h-2 xs:h-3 sm:h-4 mt-1.5 xs:mt-2 sm:mt-2.5" />
            <Shimmer className="w-full h-2 xs:h-3 sm:h-4 mt-1.5 xs:mt-2 sm:mt-2.5" />
            <Shimmer className="w-1/3 h-2 xs:h-3 sm:h-4 mt-1.5 xs:mt-2 sm:mt-2.5" />
          </div>
          <Shimmer className="w-full h-full rounded-10" />
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 h-17.5 xs:h-20 sm:h-32.5 md:h-35 lg:h-40 mt-2 xs:mt-3 sm:mt-4 md:mt-5">
          <Shimmer className="w-full h-full rounded-10" />
          <Shimmer className="w-full h-full rounded-10" />
          <Shimmer className="w-full h-full rounded-10" />
          <Shimmer className="hidden lg:block w-full h-full rounded-10" />
          <Shimmer className="hidden xl:block w-full h-full rounded-10" />
        </div>
      </div>
    </div>

    <div>
      <Shimmer className="w-2/5 h-6 sm:h-8 mt-5 mb-4 sm:mb-5 ml-1" />
      <div className="mt-2 ml-1">
        <Shimmer className="w-full h-3 sm:h-4 mt-2 sm:mt-2.5" />
        <Shimmer className="w-11/12 h-3 sm:h-4 mt-2 sm:mt-2.5" />
        <Shimmer className="w-10/12 h-3 sm:h-4 mt-2 sm:mt-2.5" />
        <Shimmer className="w-full h-3 sm:h-4 mt-2 sm:mt-2.5" />
        <Shimmer className="w-1/3 h-3 sm:h-4 mt-2 sm:mt-2.5" />
      </div>
      <Shimmer className="w-full h-60 sm:h-100 md:h-125 gl:h-150 xl:h-160 mt-3 sm:mt-5 md:mt-7.5" />
    </div>
  </div>
);
