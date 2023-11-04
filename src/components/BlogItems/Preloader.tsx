import React, { FC } from "react";
import cn from "classnames";
import { Shimmer } from "src/components/Shimmer";
import { getArrayNumbers } from "src/utils/getArrayNumbers";

interface SkeletonBlogCardProps {
  isRowListTypeView?: boolean;
  isBlogPostPage?: boolean;
}

export const SkeletonBlogCard: FC<SkeletonBlogCardProps> = ({
  isRowListTypeView,
  isBlogPostPage,
}) => (
  <div
    className={cn(
      "relative flex flex-col justify-between bg-white rounded-10 shadow-card-hard-gray overflow-hidden transition-all duration-300",
      {
        "sm:min-h-75 pt-2 xs:pt-4 pb-3 xs:pb-4 sm:pt-5 sm:pb-5 px-2 xs:px-3 sm:px-5":
          isRowListTypeView,
        "first:mt-0 mt-5 pt-4.5 sm:pt-8 pb-6 sm:pb-7.5 px-4":
          !isRowListTypeView,
      }
    )}
  >
    <div>
      <Shimmer
        className={cn("w-50 h-7", {
          "!w-full xs:w-40 sm:w-50 default:h-4.5 sm:h-7": isRowListTypeView,
        })}
      />
      <div
        className={cn("flex h-5 mt-3 sm:mt-4", {
          "default:h-3 sm:h-5": isRowListTypeView,
        })}
      >
        <Shimmer className="w-22.5" />
        <Shimmer className="w-22.5 ml-4" />
      </div>
      {isBlogPostPage && (
        <Shimmer className="w-full h-50 xs:h-56 sm:h-96 md:h-125 mt-2.5 sm:mt-4 rounded-10" />
      )}
      <div className="mt-3">
        {isRowListTypeView ? (
          <>
            <Shimmer className="w-11/12 h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-10/12 h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-11/12 h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-11/12 h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-10/12 h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-11/12 h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-1/3 h-2.5 sm:h-3 mt-1 sm:mt-1.5" />
          </>
        ) : (
          <>
            <Shimmer className="h-3 mt-1.5" />
            <Shimmer className="w-10/12 h-3 mt-1.5" />
            <Shimmer className="w-11/12 h-3 mt-1.5" />
            <Shimmer className="xs:hidden h-3 mt-1.5" />
            <Shimmer className="xs:hidden w-11/12 h-3 mt-1.5" />
            <Shimmer className="sm:hidden h-3 mt-1.5" />
            <Shimmer className="sm:hidden w-11/12 h-3 mt-1.5" />
            <Shimmer className="h-3 mt-1.5" />
            <Shimmer className="w-1/4 h-3 mt-1.5" />
          </>
        )}
      </div>
    </div>
    {!isBlogPostPage && (
      <Shimmer
        className={cn("h-11 rounded-10", {
          "w-full mt-3 sm:mt-5": isRowListTypeView,
          "md:absolute md:top-8 md:right-4 w-full md:w-40 mt-3 sm:mt-5 md:mt-0":
            !isRowListTypeView,
        })}
      />
    )}
  </div>
);

export const renderPreloader = (isRowListTypeView: boolean, itemCount = 3) => {
  const arrayNumbers = getArrayNumbers(itemCount);

  return arrayNumbers.map((item) => (
    <SkeletonBlogCard key={item} isRowListTypeView={isRowListTypeView} />
  ));
};