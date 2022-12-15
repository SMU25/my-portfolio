import React, { FC } from "react";
import cn from "classnames";
import format from "date-fns/format";
import { uk } from "date-fns/locale";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { IPostItem } from "src/types/post";
import { CARD_VIEW_VARIANTS_STYLES } from "./constants";
import { ViewVariants } from "./types";

const DATE_FORMAT = "d MMM yyyy";
interface Props extends Omit<IPostItem, "id"> {
  variant?: ViewVariants;
}

//CHANGE - Додати переводи, підключити редакс і запити отримати, спробувати слайдера самому зробити

export const BlogCard: FC<Props> = ({
  variant = ViewVariants.ROW,
  title,
  createdAt,
  category,
  message,
}) => {
  const date = format(createdAt, DATE_FORMAT, {
    locale: uk,
    //CHANGE - add dynamic choose language
  });

  const classNames = CARD_VIEW_VARIANTS_STYLES[variant];

  return (
    <div className={cn("w-full", classNames.container)}>
      <Heading className={classNames.title} tagHeading={TagsHeading.H4}>
        {title}
      </Heading>
      <div className={cn("truncate", classNames.infoContainer)}>
        <time className={cn("font-medium", classNames.date)} dateTime={date}>
          {date}
        </time>
        <span
          className={cn(
            "capitalize border-l border-black-base",
            classNames.category
          )}
        >
          {category}
        </span>
      </div>
      <p className={cn("leading-6", classNames.message)}>{message}</p>
    </div>
  );
};
