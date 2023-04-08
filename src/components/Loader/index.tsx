import React, { FC } from "react";
import cn from "classnames";
import { Sizes } from "src/types/sizes";
import { LOADER_SIZES } from "./constants";

interface Props {
  size?: Sizes;
  className?: string;
}

export const Loader: FC<Props> = ({
  size = LOADER_SIZES[Sizes.M],
  className,
}) => (
  <div
    className={cn(
      "mx-auto border-2 border-gray-lighter border-t-black-dark rounded-full animate-spin",
      LOADER_SIZES[size],
      className
    )}
  />
);
