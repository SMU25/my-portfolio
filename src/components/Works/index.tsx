import React, { FC, useMemo, memo } from "react";
import cn from "classnames";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ListTypeView } from "src/types";
import { IWorkItem } from "src/types/work";
import { renderPreloader } from "./Preloader";
import { WorkCard } from "./WorkCard";

const MAX_LENGTH_DESCRIPTION = 175;

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
    const isRowListTypeView = ListTypeView.ROW === listTypeView;

    const renderedWorkItems = useMemo(() => {
      if (isLoading)
        return renderPreloader(isRowListTypeView, countItemsPreloader);

      return items?.map((item) => (
        <WorkCard
          key={item.id}
          className={cn({
            "hover:!shadow-light-white default:hover:scale-100 sm:hover:scale-105":
              isSlider,
          })}
          listTypeView={listTypeView}
          maxLengthDesciption={MAX_LENGTH_DESCRIPTION}
          {...item}
        />
      ));
    }, [
      listTypeView,
      isRowListTypeView,
      isLoading,
      isSlider,
      items,
      countItemsPreloader,
    ]);

    //CHANGE - Змінити ьрохи відображення тексту опису, щоб заповнювв до кінця блока

    return isSlider ? (
      <SwiperSlider
        className="!pt-3.5 md:!pt-7 !pb-10 sm:!px-15 md:!px-20"
        items={renderedWorkItems}
      />
    ) : (
      <div
        className={cn(className, {
          "grid grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-8 xl:gap-y-10 gap-x-4 sm:gap-x-6 xl:gap-x-7":
            isRowListTypeView,
        })}
      >
        {renderedWorkItems}
      </div>
    );
  }
);
