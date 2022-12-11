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
        "bg-blue-darken px-3.5 text-white text-lg font-black rounded-2xl",
        className
      )}
    >
      {children}
    </span>
  );
};
