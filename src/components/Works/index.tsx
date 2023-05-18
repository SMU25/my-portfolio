// import React, { FC, memo } from "react";
// import cn from "classnames";
// import { ListTypeView } from "src/types";
// import { IWorkItem } from "src/types/work";
// import { Preloader } from "./Preloader";
// import { WorkCard } from "./WorkCard";

// interface Props {
//   className?: string;
//   listTypeView?: ListTypeView;
//   isLoading: boolean;
//   items: IWorkItem[];
//   countItemsPreloader?: number;
// }

// export const Works: FC<Props> = memo(
//   ({ className, listTypeView, isLoading, items, countItemsPreloader }) => {
//     const isRowListTypeView = ListTypeView.ROW === listTypeView;

//     if (isLoading) return <Preloader countItems={countItemsPreloader} />;

//     //CHANGE - Змінити ьрохи відображення тексту опису, щоб заповнювв до кінця блока
//     // 2 варінати відображення в рядок і колонку,як  в блозі
//     return (
//       <div
//         className={cn(className, {
//           "grid grid-cols-2 lg:grid-cols-3 gap-2": isRowListTypeView,
//         })}
//       >
//         {items?.map((item) => (
//           <WorkCard key={item.id} {...item} />
//         ))}
//       </div>
//     );
//   }
// );

import React, { FC, useMemo, memo } from "react";
import cn from "classnames";
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
}

export const Works: FC<Props> = memo(
  ({ className, listTypeView, isLoading, items, countItemsPreloader }) => {
    const isRowListTypeView = ListTypeView.ROW === listTypeView;

    const renderedWorkItems = useMemo(() => {
      if (isLoading)
        return renderPreloader(isRowListTypeView, countItemsPreloader);

      return items?.map((item) => (
        <WorkCard
          key={item.id}
          listTypeView={listTypeView}
          maxLengthDesciption={MAX_LENGTH_DESCRIPTION}
          {...item}
        />
      ));
    }, [
      listTypeView,
      isRowListTypeView,
      isLoading,
      items,
      countItemsPreloader,
    ]);

    //CHANGE - Змінити ьрохи відображення тексту опису, щоб заповнювв до кінця блока

    return (
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
