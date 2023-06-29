import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { getRandomFromSelectValues } from "src/utils/getRandomFromSelectValues ";
import { COLORS_LIST } from "./constants";
interface Props {
  children: ReactNode;
  className?: string;
}

export const MarkLabel: FC<Props> = ({ children, className }) => (
  <span
    className={cn(
      "px-2.5 md:px-3.5 text-white text-base md:text-lg font-black rounded-2xl",
      className,
      getRandomFromSelectValues(COLORS_LIST)
    )}
  >
    {children}
  </span>
);
