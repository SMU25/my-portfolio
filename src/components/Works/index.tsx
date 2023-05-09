import React, { FC, memo } from "react";
import { IWorkItem } from "src/types/work";
import { Preloader } from "./Preloader";
import { WorkCard } from "./WorkCard";

interface Props {
  className?: string;
  isLoading: boolean;
  items: IWorkItem[];
  countItemsPreloader?: number;
}

export const Works: FC<Props> = memo(
  ({ className, isLoading, items, countItemsPreloader }) => {
    if (isLoading) return <Preloader countItems={countItemsPreloader} />;

    //CHANGE - Змінити ьрохи відображення тексту опису, щоб заповнювв до кінця блока
    // 2 варінати відображення в рядок і колонку,як  в блозі
    return (
      <div className={className}>
        {items?.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </div>
    );
  }
);
