import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { TagsHeading } from "./types";

interface Props {
  children: ReactNode;
  classNames?: string;
  tagHeading?: TagsHeading;
}

export const Heading: FC<Props> = ({
  children,
  classNames,
  tagHeading = TagsHeading.H1,
}) => {
  const Heading = tagHeading;

  return (
    <Heading className={cn("capitalize text-black-dark font-bold", classNames)}>
      {children}
    </Heading>
  );
};
