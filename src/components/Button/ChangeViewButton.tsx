import React, { FC, memo } from "react";
import cn from "classnames";
import { getArrayNumbers } from "src/utils/getArrayNumbers";
import { ListTypeView } from "src/types";
import { Button } from ".";
import { ButtonVariants } from "./types";

const ARRAY_NUMBERS = getArrayNumbers(4);

interface Props {
  variant?: ButtonVariants;
  className?: string;
  listTypeView: string;
  toogleListTypeView: VoidFunction;
}

export const ChangeViewButton: FC<Props> = memo(
  ({
    variant = ButtonVariants.SECONDARY,
    className,
    listTypeView,
    toogleListTypeView,
  }) => {
    const isColumnListTypeView = listTypeView === ListTypeView.COLUMN;

    return (
      <Button
        className={cn("!p-2 !rounded-10 active:!translate-y-0", className, {
          "rotate-180": !isColumnListTypeView,
        })}
        variant={variant}
        onClick={toogleListTypeView}
      >
        <div
          className={cn(
            "relative items-center w-7 h-7 transition-all duration-300",
            {
              "flex flex-col justify-center gap-1.5": isColumnListTypeView,
              "grid grid-cols-2 gap-0.5": !isColumnListTypeView,
            }
          )}
        >
          {ARRAY_NUMBERS.map((item) => (
            <div
              key={item}
              className={cn({
                "flex justify-between items-center h-1 first:invisible first:absolute":
                  isColumnListTypeView,
              })}
            >
              <div
                className={cn("transition-all duration-300", {
                  "w-1.5 h-1.5 bg-white mr-0.5 border-0 rounded-sm":
                    isColumnListTypeView,
                  "w-3 h-3 border-2 border-white rounded":
                    !isColumnListTypeView,
                })}
              />
              <div
                className={cn("bg-white transition-all duration-300", {
                  "w-4.5 h-0.75  rounded": isColumnListTypeView,
                  "absolute translate-x-10 overflow-hidden":
                    !isColumnListTypeView,
                })}
              />
            </div>
          ))}
        </div>
      </Button>
    );
  }
);
