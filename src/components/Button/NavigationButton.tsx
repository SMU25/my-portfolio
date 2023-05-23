import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { ReactComponent as Chevron } from "src/assets/chevron-right.svg";

interface Props {
  children?: ReactNode;
  className?: string;
  isDisabled?: boolean;
  onClick: VoidFunction;
}

export const NavigationButton: FC<Props> = ({
  children,
  className,
  isDisabled,
  onClick,
}) => (
  <button
    className={cn(
      "bg-white p-2 xs:p-3 shadow-hard-white rounded-full z-10 transition-all duration-150 opacity-80 hover:opacity-100 active:mt-1 disabled:opacity-100",
      className
    )}
    onClick={onClick}
    disabled={isDisabled}
  >
    {children || (
      <Chevron
        className={cn("w-6 xs:w-8 sm:w-12 h-6 xs:h-8 sm:h-12", {
          "opacity-50": isDisabled,
        })}
      />
    )}
  </button>
);
