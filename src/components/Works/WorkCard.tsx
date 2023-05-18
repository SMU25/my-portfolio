import React, { FC, memo } from "react";
import cn from "classnames";
import format from "date-fns/format";
import { activeLanguage } from "src/services/i18n";
import { DATE_LOCALES } from "src/translate/locales";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { MarkLabel } from "src/components/MarkLabel";
import { getTruncateString } from "src/utils/getTruncateString";
import { getPathName } from "src/utils/getPathName";
import { PATHNAMES } from "src/constants/routes";
import { ListTypeView } from "src/types";
import { IWorkItem } from "src/types/work";
import { CARD_VIEW_VARIANTS_STYLES } from "./constants";
import { Link } from "../Link";

const DATE_FORMAT = "yyyy";

const WORK_IMG_SIZE = {
  WIDTH: 246,
  HEIGHT: 180,
};

//CHANGE - зробити, щоб контролювалося із редакся,але + додавало ще типу (пост чи проект із портфоліо)

/////////
/////////
// Інші варіанти поки відкидаємо, так як апішка не дозволяє нормально працювати
/////////
//   - додати поле в АПІ для посилання на елемент і видалити функцію для отримання шляху + додати отримання по імені
// або взагалі, щоб breadcrumbs вертало з АПІ
// Або просто по імені отримувати і робити лінку,але ім'я бає бути бзе пробілів і в малому регістрі, тобто через дифіс там де був пробіл
/////////
/////////

interface Props extends IWorkItem {
  // containerClassName?: string;
  listTypeView?: ListTypeView;
  maxLengthDesciption?: number;
}

export const WorkCard: FC<Props> = memo(
  ({
    listTypeView = ListTypeView.COLUMN,
    // containerClassName,
    maxLengthDesciption,
    id,
    title,
    description,
    category,
    createdAt,
    screenSaver,
  }) => {
    const pathname = getPathName(id, PATHNAMES.PORTFOLIO);

    const date = format(createdAt, DATE_FORMAT, {
      locale: DATE_LOCALES[activeLanguage],
    });

    const classNames = CARD_VIEW_VARIANTS_STYLES[listTypeView];

    const truncatedDescription = getTruncateString(
      description,
      maxLengthDesciption
    );

    return (
      <div
        className={cn(
          "flex flex-col border-gray-lighter transition-all duration-300",
          classNames.container
        )}
      >
        <Link href={pathname}>
          <img
            className={cn("w-full object-cover rounded-md", classNames.img)}
            src={screenSaver}
            width={WORK_IMG_SIZE.WIDTH}
            height={WORK_IMG_SIZE.HEIGHT}
            alt={title}
          />
        </Link>
        <div className={classNames.infoContainer}>
          <Link
            href={pathname}
            className="hover:underline hover:underline-offset-8"
          >
            <Heading
              className={cn(
                "md:text-3xl font-bold leading-8 md:leading-11",
                classNames.title
              )}
              tagHeading={TagsHeading.H4}
            >
              {title}
            </Heading>
          </Link>
          <div
            className={cn(
              "flex items-center leading-6.5",
              classNames.infoContainerCenter
            )}
          >
            <MarkLabel className={cn(classNames.date)}>
              <time dateTime={date}>{date}</time>
            </MarkLabel>
            <span className="ml-3 md:ml-6.5 text-gray-light text-base md:text-xl break-all">
              {category}
            </span>
          </div>
          <p
            className={cn("leading-6 overflow-hidden", classNames.description)}
          >
            {truncatedDescription}
          </p>
        </div>
      </div>
    );
  }
);
