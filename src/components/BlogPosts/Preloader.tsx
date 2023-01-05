import React, { FC } from "react";
import cn from "classnames";
import { Shimmer } from "src/components/Shimmer";
import { getArrayNumbers } from "src/utils/getArrayNumbers";

interface SkeletonBlogPostProps {
  isRowVariant?: boolean;
}

const SkeletonBlogPost: FC<SkeletonBlogPostProps> = ({ isRowVariant }) => (
  <div
    className={cn("bg-white py-6", {
      "min-h-75 pt-8 px-5 rounded": isRowVariant,
    })}
  >
    <Shimmer className="w-50 h-7" />
    <div className="flex h-5 mt-3">
      <Shimmer className="w-22.5" />
      <Shimmer className="w-22.5 ml-4" />
    </div>
    <div className="mt-3">
      {isRowVariant ? (
        <>
          <Shimmer className="w-11/12 h-3 mt-1.5" />
          <Shimmer className="h-3 mt-1.5" />
          <Shimmer className="w-10/12 h-3 mt-1.5" />
          <Shimmer className="w-11/12 h-3 mt-1.5" />
          <Shimmer className="w-11/12 h-3 mt-1.5" />
          <Shimmer className="h-3 mt-1.5" />
          <Shimmer className="w-10/12 h-3 mt-1.5" />
          <Shimmer className="w-11/12 h-3 mt-1.5" />
          <Shimmer className="h-3 mt-1.5" />
          <Shimmer className="w-1/3 h-3 mt-1.5" />
        </>
      ) : (
        <>
          <Shimmer className="h-3 mt-1.5" />
          <Shimmer className="w-10/12 h-3 mt-1.5" />
          <Shimmer className="w-11/12 h-3 mt-1.5" />
          <Shimmer className="h-3 mt-1.5" />
          <Shimmer className="w-1/4 h-3 mt-1.5" />
        </>
      )}
    </div>
  </div>
);

export const renderPreloader = (
  isRowVariant?: boolean,
  maxCount: number = 3
) => {
  const arrayNumbers = getArrayNumbers(maxCount);

  return arrayNumbers.map((item) => (
    <SkeletonBlogPost key={item} isRowVariant={isRowVariant} />
  ));
};
