import React, { FC, useMemo, memo } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ListTypeView } from "src/types";
import { IPortfolioProject } from "src/types/portfolio";
import { renderPreloader } from "./Preloader";
import { PortfolioCard } from "./PortfolioCard";
import { DataMissing } from "../DataMissing";

const T_PREFIX = "portfolio-items";

const DATA_MISSING_TEXT = "data-missing-text";

interface Props {
  className?: string;
  listTypeView?: ListTypeView;
  isLoading: boolean;
  items: IPortfolioProject[];
  preloaderItemCount?: number;
  isSlider?: boolean;
  getPortfolioItems: VoidFunction;
}

export const PortfolioItems: FC<Props> = memo(
  ({
    className,
    listTypeView = ListTypeView.ROW,
    isLoading,
    items,
    preloaderItemCount,
    isSlider,
    getPortfolioItems,
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
        <DataMissing
          dataMissingText={t(`${T_PREFIX} - ${DATA_MISSING_TEXT}`)}
          fetchMissingData={getPortfolioItems}
        />
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
