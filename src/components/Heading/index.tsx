import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { TagsHeading } from "./types";

interface Props {
  children: ReactNode;
  className?: string;
  tagHeading?: TagsHeading;
}

export const Heading: FC<Props> = ({
  children,
  className,
  tagHeading = TagsHeading.H1,
}) => {
  const Heading = tagHeading;

  return <Heading className={cn("font-bold", className)}>{children}</Heading>;
};
