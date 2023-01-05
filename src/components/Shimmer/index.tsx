import React, { FC } from "react";
import cn from "classnames";
import "./style.css";

interface Props {
  className?: string;
}

export const Shimmer: FC<Props> = ({ className }) => (
  <div className={cn("shimmer", className)} />
);
