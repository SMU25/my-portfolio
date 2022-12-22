import React, { FC } from "react";
import { IWorkItem } from "src/types/work";
import { Preloader } from "./Preloader";
import { WorkCard } from "./WorkCard";

interface Props {
  className?: string;
  isLoading: boolean;
  items: IWorkItem[];
  maxCountItemsPreloader?: number;
}

export const Works: FC<Props> = ({
  className,
  isLoading,
  items,
  maxCountItemsPreloader,
}) => {
  if (isLoading) return <Preloader maxCount={maxCountItemsPreloader} />;

  //CHANGE - Змінити ьрохи відображення тексту опису, щоб заповнювв до кінця блока
  return (
    <div className={className}>
      {items?.map((item) => (
        <WorkCard key={item.id} {...item} />
      ))}
    </div>
  );
};
