import React, { FC } from "react";
import cn from "classnames";
import { Shimmer } from "src/components/Shimmer";
import { getArrayNumbers } from "src/utils/getArrayNumbers";

interface SkeletonBlogPostProps {
  isRowListTypeView?: boolean;
  isPostPage?: boolean;
}

export const SkeletonBlogPost: FC<SkeletonBlogPostProps> = ({
  isRowListTypeView,
  isPostPage,
}) => (
  <div
    className={cn(
      "relative flex flex-col justify-between bg-white overflow-hidden transition-all duration-300",
      {
        "sm:min-h-75 pt-2 xs:pt-4 pb-3 xs:pb-4 sm:pt-5 sm:pb-5 px-2 xs:px-3 sm:px-5 rounded shadow-light-white":
          isRowListTypeView,
        "pt-4.5 sm:pt-8 pb-6 sm:pb-7.5 border-gray-lighter border-b":
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
        className={cn("flex h-5 mt-3", {
          "default:h-3 sm:h-5": isRowListTypeView,
        })}
      >
        <Shimmer className="w-22.5" />
        <Shimmer className="w-22.5 ml-4" />
      </div>
      {isPostPage && (
        <Shimmer className="w-full h-50 xs:h-56 sm:h-96 md:h-125 mt-2.5 sm:mt-4 rounded-10" />
      )}
      <div className="mt-3">
        {isRowListTypeView ? (
          <>
            <Shimmer className="w-11/12 h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-10/12 h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-11/12 h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-11/12 h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-10/12 h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-11/12 h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
            <Shimmer className="w-1/3 h-1.5 sm:h-3 mt-1 sm:mt-1.5" />
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
    {!isPostPage && (
      <Shimmer
        className={cn("h-11 rounded-10", {
          "w-full mt-3 sm:mt-5": isRowListTypeView,
          "md:absolute md:top-8 md:right-0 w-full md:w-40 mt-3 sm:mt-5 md:mt-0":
            !isRowListTypeView,
        })}
      />
    )}
  </div>
);

export const renderPreloader = (isRowListTypeView: boolean, countItems = 3) => {
  const arrayNumbers = getArrayNumbers(countItems);

  return arrayNumbers.map((item) => (
    <SkeletonBlogPost key={item} isRowListTypeView={isRowListTypeView} />
  ));
};
