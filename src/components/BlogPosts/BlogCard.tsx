import React, { FC } from "react";
import cn from "classnames";
import format from "date-fns/format";
import { uk } from "date-fns/locale";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { CARD_VIEW_VARIANTS_STYLES } from "./constants";
import { ViewVariants } from "./types";

interface Props {
  variant?: ViewVariants;
  title: string;
  dateCreated: Date;
  role: string;
  message: string;
}

export const BlogCard: FC<Props> = ({
  variant = ViewVariants.ROW,
  title,
  dateCreated,
  role,
  message,
}) => {
  const date = format(dateCreated, "d MMM yyyy", {
    locale: uk,
    //CHANGE - add dynamic choose language
  });

  const classNames = CARD_VIEW_VARIANTS_STYLES[variant];

  return (
    <div className={cn("w-full", classNames.container)}>
      <Heading className={classNames.title} tagHeading={TagsHeading.H4}>
        {title}
      </Heading>
      <div className={classNames.infoContainer}>
        <time className={classNames.date} dateTime={date}>
          {date}
        </time>
        <span
          className={cn(
            "capitalize border-l border-black-base",
            classNames.role
          )}
        >
          {role}
        </span>
      </div>
      <p className={cn("leading-6", classNames.message)}>{message}</p>
    </div>
  );
};
