import cn from "classnames";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const MarkLabel: FC<Props> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "bg-blue-darken px-2.5 md:px-3.5 text-white text-base md:text-lg font-black rounded-2xl",
        className
      )}
    >
      {children}
    </span>
  );
};
