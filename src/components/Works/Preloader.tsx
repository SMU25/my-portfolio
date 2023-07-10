import React, { FC } from "react";
import cn from "classnames";
import { Shimmer } from "src/components/Shimmer";
import { getArrayNumbers } from "src/utils/getArrayNumbers";

interface SkeletonWorkCardProps {
  isRowListTypeView?: boolean;
}

const SkeletonWorkCard: FC<SkeletonWorkCardProps> = ({ isRowListTypeView }) => (
  <div
    className={cn(
      "relative flex flex-col justify-between w-full bg-white transition-all duration-300",
      {
        "py-4 px-3 rounded-lg shadow-card-primary": isRowListTypeView,
        "py-4.5 sm:py-8": !isRowListTypeView,
      }
    )}
  >
    <div
      className={cn("w-full", {
        "flex flex-col sm:flex-row": !isRowListTypeView,
      })}
    >
      <Shimmer
        className={cn("w-full rounded-md", {
          "h-24 xs:h-28 sm:h-45 xl:h-60": isRowListTypeView,
          "sm:min-w-61.5 sm:max-w-61.5 h-45": !isRowListTypeView,
        })}
      />
      <div
        className={cn("w-full min-h-56 bg-white", {
          "mt-3 sm:mt-4.5": isRowListTypeView,
          "mt-5 sm:mt-0 sm:ml-4.5": !isRowListTypeView,
        })}
      >
        <Shimmer
          className={cn("w-60.5 h-7", {
            "default:w-28 sm:w-60 default:h-4 sm:h-6 md:h-7": isRowListTypeView,
          })}
        />
        <div
          className={cn("flex h-5 mt-4", {
            "default:h-4 sm:h-5 mt-3 sm:mt-4": isRowListTypeView,
          })}
        >
          <Shimmer className="w-17.5 rounded-2xl" />
          <Shimmer className="w-35 ml-6" />
        </div>
        <div
          className={cn("mt-6", {
            "mt-3 sm:mt-4": isRowListTypeView,
          })}
        >
          <Shimmer
            className={cn("h-3 mt-1.5", {
              "default:h-2.5 sm:h-3 mt-1 sm:mt-1.5": isRowListTypeView,
            })}
          />
          <Shimmer
            className={cn("w-11/12 h-3 mt-1.5", {
              "default:h-2.5 sm:h-3 mt-1 sm:mt-1.5": isRowListTypeView,
            })}
          />
          <Shimmer
            className={cn("h-3 mt-1.5", {
              "default:h-2.5 sm:h-3 mt-1 sm:mt-1.5": isRowListTypeView,
            })}
          />
          <Shimmer
            className={cn("xl:hidden w-10/12 h-3 mt-1.5", {
              "default:h-2.5 sm:h-3 mt-1 sm:mt-1.5": isRowListTypeView,
            })}
          />
          <Shimmer
            className={cn("xl:hidden h-3 mt-1.5", {
              "default:h-2.5 sm:h-3 mt-1 sm:mt-1.5": isRowListTypeView,
            })}
          />
          <Shimmer
            className={cn("w-1/4 h-3 mt-1.5", {
              "default:h-2.5 sm:h-3 mt-1 sm:mt-1.5": isRowListTypeView,
            })}
          />
        </div>
      </div>
    </div>

    <Shimmer
      className={cn("h-11 rounded-10", {
        "w-full mt-3 sm:mt-5": isRowListTypeView,
        "md:absolute md:top-8 md:right-0 w-full md:w-40 mt-3 sm:mt-5 md:mt-0":
          !isRowListTypeView,
      })}
    />
  </div>
);

export const renderPreloader = (isRowListTypeView: boolean, countItems = 3) => {
  const arrayEmptyItems = getArrayNumbers(countItems);

  return arrayEmptyItems.map((item) => (
    <SkeletonWorkCard key={item} isRowListTypeView={isRowListTypeView} />
  ));
};
