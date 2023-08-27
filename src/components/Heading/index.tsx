import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { DEFAULT_HEADING_CLASSNAMES } from "./constants";
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

  return (
    <Heading
      className={cn(
        "font-bold",
        DEFAULT_HEADING_CLASSNAMES[tagHeading],
        className
      )}
    >
      {children}
    </Heading>
  );
};
