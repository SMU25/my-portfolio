import React, { FC, memo } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
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
import { Button } from "../Button";
import { ButtonVariants } from "../Button/types";
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

const T_PREFIX = "work-card";

const VIEW_BUTTON_NAME = "view-btn";
interface Props extends IWorkItem {
  className?: string;
  listTypeView?: ListTypeView;
  maxLengthDesciption?: number;
}

export const WorkCard: FC<Props> = memo(
  ({
    className,
    listTypeView = ListTypeView.COLUMN,
    maxLengthDesciption = 175,
    id,
    title,
    description,
    category,
    createdAt,
    screenSaver,
  }) => {
    const { t } = useTranslation();

    const pathname = getPathName(id, PATHNAMES.PORTFOLIO);

    const date = format(createdAt, DATE_FORMAT, {
      locale: DATE_LOCALES[activeLanguage],
    });

    const classNames = CARD_VIEW_VARIANTS_STYLES[listTypeView];

    const truncatedDescription = getTruncateString(
      description,
      maxLengthDesciption
    );

    //CHANGE slug замість path (частина урли це) - замінити скрізь можливо

    return (
      <div
        className={cn(
          "relative flex flex-col justify-between bg-white overflow-hidden border-gray-lighter transition-all duration-300",
          classNames.container,
          className
        )}
      >
        <div className={classNames.wrapper}>
          <Link href={pathname}>
            <img
              className={cn("w-full object-cover rounded-10", classNames.img)}
              src={screenSaver}
              width={WORK_IMG_SIZE.WIDTH}
              height={WORK_IMG_SIZE.HEIGHT}
              alt={title}
            />
          </Link>
          <div className={classNames.infoContainer}>
            <Link
              href={pathname}
              className="transition-all duration-200 hover:text-blue-light"
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
              <MarkLabel className={classNames.date}>
                <time dateTime={date}>{date}</time>
              </MarkLabel>
              <span className="ml-3 md:ml-6.5 text-gray-light text-base md:text-xl break-all">
                {category}
              </span>
            </div>
            <p
              className={cn(
                "leading-6 overflow-hidden",
                classNames.description
              )}
            >
              {truncatedDescription}
            </p>
          </div>
        </div>

        <Link href={pathname}>
          <Button
            className={classNames.viewButton}
            variant={ButtonVariants.BORDERED_SECONDARY}
          >
            {t(`${T_PREFIX} - ${VIEW_BUTTON_NAME}`)}
          </Button>
        </Link>
      </div>
    );
  }
);
