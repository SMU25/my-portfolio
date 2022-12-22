import React, { FC } from "react";
import { Shimmer } from "src/components/Shimmer";
import { getArrayNumbers } from "src/utils/getArrayNumbers";

const SkeletonWorkCard: FC = () => (
  <div className="flex flex-col sm:flex-row py-5">
    <Shimmer className="sm:max-w-61.5 w-full rounded-md" />
    <div className="w-full min-h-56 bg-white mt-5 sm:mt-0 sm:ml-4.5">
      <Shimmer className="w-60.5 h-7" />
      <div className="flex h-5 mt-4">
        <Shimmer className="w-17.5 rounded-2xl" />
        <Shimmer className="w-35 ml-6" />
      </div>
      <div className="mt-6">
        <Shimmer className="h-3 mt-1.5" />
        <Shimmer className="w-11/12 h-3 mt-1.5" />
        <Shimmer className="h-3 mt-1.5" />
        <Shimmer className="w-1/4 h-3 mt-1.5" />
      </div>
    </div>
  </div>
);

interface Props {
  maxCount?: number;
}

export const Preloader: FC<Props> = ({ maxCount }) => {
  const arrayEmptyItems = getArrayNumbers(maxCount);

  return (
    <>
      {arrayEmptyItems.map((item) => (
        <SkeletonWorkCard key={item} />
      ))}
    </>
  );
};
