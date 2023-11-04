import React, { FC, useMemo, memo } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ListTypeView } from "src/types";
import { IPortfolioProject } from "src/types/portfolio";
import { ReactComponent as DataMissing } from "src/assets/icons/data-missing.svg";
import { renderPreloader } from "./Preloader";
import { PortfolioCard } from "./PortfolioCard";

const T_PREFIX = "portfolio-items";

const DATA_MISSING_TEXT = "data-missing-text";

interface Props {
  className?: string;
  listTypeView?: ListTypeView;
  isLoading: boolean;
  items: IPortfolioProject[];
  preloaderItemCount?: number;
  isSlider?: boolean;
}

export const PortfolioItems: FC<Props> = memo(
  ({
    className,
    listTypeView = ListTypeView.ROW,
    isLoading,
    items,
    preloaderItemCount,
    isSlider,
  }) => {
    const { t } = useTranslation();

    const isRowListTypeView = ListTypeView.ROW === listTypeView;

    const renderedPortfolioItems = useMemo(() => {
      if (isLoading) {
        return renderPreloader(isRowListTypeView, isSlider, preloaderItemCount);
      } else if (items?.length) {
        return items.map((item) => (
          <PortfolioCard
            key={item.id}
            className={cn({
              "default:shadow-light-white default:hover:scale-100 sm:hover:scale-105":
                isSlider,
            })}
            listTypeView={listTypeView}
            {...item}
          />
        ));
      }
    }, [
      listTypeView,
      isRowListTypeView,
      isLoading,
      items,
      preloaderItemCount,
      isSlider,
    ]);

    //CHANGE - Змінити ьрохи відображення тексту опису, щоб заповнювв до кінця блока

    if (!renderedPortfolioItems)
      return (
        <div className="flex flex-col items-center justify-center mt-5 xs:mt-8 sm:mt-15">
          <DataMissing className="fill-g-red-medium w-16 xs:w-24 sm:w-32 h-16 xs:h-24 sm:h-32" />
          <p className="mt-1 xs:mt-2 sm:mt-5 mb-5 text-center text-red-medium text-xl sm:text-3xl font-bold">
            {t(`${T_PREFIX} - ${DATA_MISSING_TEXT}`)}
          </p>
        </div>
      );

    return isSlider ? (
      <SwiperSlider
        className="!pt-3.5 md:!pt-7 !pb-10 !overflow-visible"
        slideClassName="flex"
        items={renderedPortfolioItems}
        isShownNavigationButtons
        isShownKeyboardInfoPopup
      />
    ) : (
      <div
        className={cn(className, {
          "grid grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-8 xl:gap-y-10 gap-x-4 sm:gap-x-6 xl:gap-x-7":
            isRowListTypeView,
        })}
      >
        {renderedPortfolioItems}
      </div>
    );
  }
);
