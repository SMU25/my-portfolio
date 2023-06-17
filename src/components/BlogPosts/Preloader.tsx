import React, { FC } from "react";
import cn from "classnames";
import { Shimmer } from "src/components/Shimmer";
import { getArrayNumbers } from "src/utils/getArrayNumbers";

interface SkeletonBlogPostProps {
  isRowListTypeView?: boolean;
}

export const SkeletonBlogPost: FC<SkeletonBlogPostProps> = ({
  isRowListTypeView,
}) => (
  <div
    className={cn("bg-white py-6", {
      "min-h-75 pt-8 px-5 rounded": isRowListTypeView,
      "pt-4.5 sm:pt-8 pb-6 sm:pb-7.5": !isRowListTypeView,
    })}
  >
    <Shimmer className="w-50 h-7" />
    <div className="flex h-5 mt-3">
      <Shimmer className="w-22.5" />
      <Shimmer className="w-22.5 ml-4" />
    </div>
    <div className="mt-3">
      {isRowListTypeView ? (
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

export const renderPreloader = (isRowListTypeView: boolean, countItems = 3) => {
  const arrayNumbers = getArrayNumbers(countItems);

  return arrayNumbers.map((item) => (
    <SkeletonBlogPost key={item} isRowListTypeView={isRowListTypeView} />
  ));
};
