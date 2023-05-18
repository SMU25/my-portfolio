import React, { FC, ReactNode, memo } from "react";
import cn from "classnames";
import format from "date-fns/format";
import { activeLanguage } from "src/services/i18n";
import { DATE_LOCALES } from "src/translate/locales";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { getPathName } from "src/utils/getPathName";
import { getTruncateString } from "src/utils/getTruncateString";
import { PATHNAMES } from "src/constants/routes";
import { ListTypeView } from "src/types";
import { IPostItem } from "src/types/post";
import { CARD_VIEW_VARIANTS_STYLES } from "./constants";
import { Link } from "../Link";

const DATE_FORMAT = "d MMM yyyy";

interface Props extends IPostItem {
  children?: ReactNode | ChildNode;
  containerClassName?: string;
  listTypeView?: ListTypeView;
  isLink?: boolean;
  maxLengthDesciption?: number;
}

export const BlogCard: FC<Props> = memo(
  ({
    listTypeView = ListTypeView.ROW,
    children,
    containerClassName,
    isLink,
    maxLengthDesciption,
    id,
    title,
    createdAt,
    category,
    description,
  }) => {
    const pathname = getPathName(id, PATHNAMES.BLOG);

    const date = format(createdAt, DATE_FORMAT, {
      locale: DATE_LOCALES[activeLanguage],
    });

    const classNames = CARD_VIEW_VARIANTS_STYLES[listTypeView];

    const truncateDescription = getTruncateString(
      description,
      maxLengthDesciption
    );

    // CHANGE - додати динамічний Title на вкладку (в браузері)

    return (
      <>
        <div
          className={cn(
            "w-full flex-1 transition-all duration-300 hover:scale-105",
            classNames.container,
            containerClassName
          )}
        >
          <Link
            href={pathname}
            className="hover:underline hover:underline-offset-8"
            isDisabled={!isLink}
          >
            <Heading className={classNames.title} tagHeading={TagsHeading.H4}>
              {title}
            </Heading>
          </Link>
          <div className={cn("truncate", classNames.infoContainer)}>
            <time
              className={cn("font-medium", classNames.date)}
              dateTime={date}
            >
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
          <p className={cn(classNames.description)}>{truncateDescription}</p>
        </div>
        {children}
      </>
    );
  }
);
