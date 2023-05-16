import React, { FC, memo } from "react";
import cn from "classnames";
import { ListTypeView } from "src/types";
import { IWorkItem } from "src/types/work";
import { Preloader } from "./Preloader";
import { WorkCard } from "./WorkCard";

interface Props {
  className?: string;
  listTypeView?: ListTypeView;
  isLoading: boolean;
  items: IWorkItem[];
  countItemsPreloader?: number;
}

export const Works: FC<Props> = memo(
  ({ className, listTypeView, isLoading, items, countItemsPreloader }) => {
    const isRowListTypeView = ListTypeView.ROW === listTypeView;

    if (isLoading) return <Preloader countItems={countItemsPreloader} />;

    //CHANGE - Змінити ьрохи відображення тексту опису, щоб заповнювв до кінця блока
    // 2 варінати відображення в рядок і колонку,як  в блозі
    return (
      <div
        className={cn(className, {
          "grid grid-cols-2 lg:grid-cols-3 gap-2": isRowListTypeView,
        })}
      >
        {items?.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </div>
    );
  }
);
