import React, { FC, useMemo, memo } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ListTypeView } from "src/types";
import { IWorkItem } from "src/types/work";
import { renderPreloader } from "./Preloader";
import { WorkCard } from "./WorkCard";

const MAX_LENGTH_DESCRIPTION = 175;
// якщо буде тільки 1 значення то змінити тут і в постах та перенести його в карточку елемента

const T_PREFIX = "works";

const DATA_MISSING_TEXT = "data-missing-text";

interface Props {
  className?: string;
  listTypeView?: ListTypeView;
  isLoading: boolean;
  items: IWorkItem[];
  countItemsPreloader?: number;
  isSlider?: boolean;
}

export const Works: FC<Props> = memo(
  ({
    className,
    listTypeView = ListTypeView.ROW,
    isLoading,
    items,
    countItemsPreloader,
    isSlider,
  }) => {
    const { t } = useTranslation();

    const isRowListTypeView = ListTypeView.ROW === listTypeView;

    const renderedWorks = useMemo(() => {
      if (isLoading) {
        return renderPreloader(
          isRowListTypeView,
          isSlider,
          countItemsPreloader
        );
      } else if (items?.length) {
        return items.map((item) => (
          <WorkCard
            key={item.id}
            className={cn({
              "default:shadow-light-white default:hover:scale-100 sm:hover:scale-105":
                isSlider,
            })}
            listTypeView={listTypeView}
            maxLengthDesciption={MAX_LENGTH_DESCRIPTION}
            {...item}
          />
        ));
      }
    }, [
      listTypeView,
      isRowListTypeView,
      isLoading,
      items,
      countItemsPreloader,
      isSlider,
    ]);

    //CHANGE - Змінити ьрохи відображення тексту опису, щоб заповнювв до кінця блока

    if (!renderedWorks)
      return (
        <p className="mt-1 sm:mt-3 mb-5 text-red-dark text-xl sm:text-3xl font-bold">
          {t(`${T_PREFIX} - ${DATA_MISSING_TEXT}`)}
        </p>
      );

    return isSlider ? (
      <SwiperSlider
        className="!pt-3.5 md:!pt-7 !pb-10 !overflow-visible"
        slideClassName="flex"
        items={renderedWorks}
        isShownNavigationButtons
        isShownKeyboardInfoPopUp
      />
    ) : (
      <div
        className={cn(className, {
          "grid grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-8 xl:gap-y-10 gap-x-4 sm:gap-x-6 xl:gap-x-7":
            isRowListTypeView,
        })}
      >
        {renderedWorks}
      </div>
    );
  }
);
