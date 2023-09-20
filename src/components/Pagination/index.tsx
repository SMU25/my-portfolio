// import React, { FC, useState, useEffect } from "react";
// import { PaginationItem } from "./PaginationItem";
// import { ButtonVariants } from "../Button/types";
// import ReactPaginate from "react-paginate";

// interface Props {}

// // лишні return, перевод для арія лейбел та просто для некст і прев, скоротити елемент пагінації + числа повиносити в пропси чи тіпа того
// // компоненти краще структуризувати,а то є дублювання тут в PaginationItem

// // якщо що, то можна просто стилі вставити і не тикати ці еомпоненти, і так теж буде норм
// export const Pagination: FC<Props> = () => {
//   const [forcePage, setForcePage] = useState<number>(null);
//   const [selectedPages, setSelectedPages] = useState([8, 9, 10, 11, 12, 13]);

//   const countSelectedPages = selectedPages.length - 1;
//   const defaultForcePage = selectedPages[Math.round(countSelectedPages / 2)];

//   console.log(defaultForcePage);

//   useEffect(() => {
//     if (forcePage) {
//       setSelectedPages([forcePage]);
//     }
//   }, [forcePage]);

//   return (
//     <div className="flex justify-center items-center mt-10">
//       <ReactPaginate
//         onClick={(state) => {
//           if (state.isPrevious) {
//             const prevPage = selectedPages[0] - 1;

//             setForcePage(prevPage);
//           }

//           if (state.isNext) {
//             const nextPage = selectedPages[countSelectedPages] + 1;

//             setForcePage(nextPage);
//           }
//         }}
//         onPageChange={({ selected }) => {
//           const currentPage = selected + 1;

//           if (!selectedPages.includes(currentPage)) {
//             setSelectedPages([currentPage]);
//           }
//         }}
//         containerClassName="flex flex items-center gap-x-2"
//         forcePage={forcePage || defaultForcePage}
//         pageRangeDisplayed={5}
//         marginPagesDisplayed={3}
//         pageCount={100}
//         previousLabel={
//           <PaginationItem
//             variant={ButtonVariants.SECONDARY}
//             isDisabled={selectedPages.includes(1)}
//           >
//             prev
//           </PaginationItem>
//         }
//         nextLabel={
//           <PaginationItem
//             variant={ButtonVariants.SECONDARY}
//             isDisabled={selectedPages.includes(100)}
//           >
//             next
//           </PaginationItem>
//         }
//         breakLabel={<PaginationItem>...</PaginationItem>}
//         // змінити ^
//         pageLabelBuilder={(page) => (
//           <PaginationItem isDisabled={selectedPages.includes(page)}>
//             {page}
//           </PaginationItem>
//         )}
//       />
//     </div>
//   );
// };

import React, { FC, useState, useEffect } from "react";
import { PaginationItem } from "./PaginationItem";
import { ButtonVariants } from "../Button/types";
import ReactPaginate from "react-paginate";

interface Props {}

// лишні return, перевод для арія лейбел та просто для некст і прев, скоротити елемент пагінації + числа повиносити в пропси чи тіпа того
// компоненти краще структуризувати,а то є дублювання тут в PaginationItem
// повиносити в функції, в значення (пропси), компонент придумати, як не дублювати , РЕФАКТОРИНГ

export const Pagination: FC<Props> = () => {
  const [selectedPages, setSelectedPages] = useState([8, 9, 10, 11, 12, 13]);
  const countSelectedPages = selectedPages.length - 1;

  const defaultForcePage = selectedPages[Math.round(countSelectedPages / 2)];
  const [forcePage, setForcePage] = useState(defaultForcePage);

  useEffect(() => {
    if (forcePage !== defaultForcePage) {
      setSelectedPages([forcePage]);
    }
    // When adding defaultForcePage in the dependencies, the pagination does not work correctly.
    // It updates every time, when selectedPages changes, so this value is not added in them!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forcePage]);

  return (
    <div className="flex justify-center items-center mt-10">
      <ReactPaginate
        onClick={(state) => {
          if (state.isPrevious) {
            const prevPage = selectedPages[0] - 1;

            setForcePage(prevPage);
          }

          if (state.isNext) {
            const nextPage = selectedPages[countSelectedPages] + 1;

            setForcePage(nextPage);
          }
        }}
        onPageChange={({ selected }) => {
          const currentPage = selected + 1;

          if (!selectedPages.includes(currentPage)) {
            setSelectedPages([currentPage]);
          }
        }}
        containerClassName="flex flex items-center gap-x-2"
        forcePage={forcePage}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        pageCount={100}
        previousLabel={
          <PaginationItem
            variant={ButtonVariants.SECONDARY}
            isDisabled={selectedPages.includes(1)}
          >
            prev
          </PaginationItem>
        }
        nextLabel={
          <PaginationItem
            variant={ButtonVariants.SECONDARY}
            isDisabled={selectedPages.includes(100)}
          >
            next
          </PaginationItem>
        }
        breakLabel={<PaginationItem>...</PaginationItem>}
        // змінити ^
        pageLabelBuilder={(page) => (
          <PaginationItem isDisabled={selectedPages.includes(page)}>
            {page}
          </PaginationItem>
        )}
      />
    </div>
  );
};
