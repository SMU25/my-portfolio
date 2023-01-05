import React, { FC } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import { activeLanguage } from "src/services/i18n";
import { DATE_LOCALES } from "src/translate/locales";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { IPostItem } from "src/types/post";
import { getPathName } from "src/utils/getPathName";
import { PATHNAMES } from "src/constants/routes";
import { CARD_VIEW_VARIANTS_STYLES } from "./constants";
import { ViewVariants } from "./types";

const DATE_FORMAT = "d MMM yyyy";
interface Props extends IPostItem {
  variant?: ViewVariants;
}

export const BlogCard: FC<Props> = ({
  id,
  variant = ViewVariants.ROW,
  title,
  createdAt,
  category,
  message,
}) => {
  const date = format(createdAt, DATE_FORMAT, {
    locale: DATE_LOCALES[activeLanguage],
  });

  const classNames = CARD_VIEW_VARIANTS_STYLES[variant];

  // CHANGE - додати динамічний Title на вкладку

  return (
    <Link to={getPathName(id, PATHNAMES.BLOG)}>
      <div className={cn("w-full flex-1", classNames.container)}>
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
    </Link>
  );
};
