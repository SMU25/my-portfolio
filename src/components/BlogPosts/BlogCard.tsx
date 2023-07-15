import React, { FC, memo } from "react";
import { useTranslation } from "react-i18next";
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
import { Button } from "../Button";
import { ButtonVariants } from "../Button/types";
import { Link } from "../Link";

const DATE_FORMAT = "d MMM yyyy";

const T_PREFIX = "blog-card";

const VIEW_BUTTON_NAME = "view-btn";
interface Props extends IPostItem {
  containerClassName?: string;
  listTypeView?: ListTypeView;
  isLink?: boolean;
  isShownPostImg?: boolean;
  maxLengthDesciption?: number;
}

export const BlogCard: FC<Props> = memo(
  ({
    listTypeView = ListTypeView.ROW,
    img,
    containerClassName,
    isLink,
    isShownPostImg,
    maxLengthDesciption,
    id,
    title,
    createdAt,
    category,
    description,
  }) => {
    const { t } = useTranslation();

    const pathname = getPathName(id, PATHNAMES.BLOG);

    const date = format(createdAt, DATE_FORMAT, {
      locale: DATE_LOCALES[activeLanguage],
    });

    const classNames = CARD_VIEW_VARIANTS_STYLES[listTypeView];

    const isShownImg = isShownPostImg && img;

    const truncateDescription = getTruncateString(
      description,
      maxLengthDesciption
    );

    return (
      <div
        className={cn(
          "relative flex flex-col justify-between w-full flex-1 overflow-hidden transition-all duration-300",
          classNames.container,
          containerClassName
        )}
      >
        <div>
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
          {isShownImg && (
            <img
              className="w-full h-50 xs:h-56 sm:h-96 md:h-125 object-cover my-2.5 sm:my-4 rounded-10"
              src={img.url}
              alt={img?.title}
            />
          )}
          <p className={cn(classNames.description)}>{truncateDescription}</p>
        </div>
        {isLink && (
          <Link href={pathname}>
            <Button
              className={classNames.viewButton}
              variant={ButtonVariants.BORDERED_SECONDARY}
            >
              {t(`${T_PREFIX} - ${VIEW_BUTTON_NAME}`)}
            </Button>
          </Link>
        )}
      </div>
    );
  }
);
