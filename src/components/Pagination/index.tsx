import React, { FC, useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { PaginationItem } from "./PaginationItem";
import { ButtonVariants } from "../Button/types";

const T_PREFIX = "pagination";

const PREVIOUS_LABEL_NAME = "previous-label";
const NEXT_LABEL_NAME = "next-label";
const BREAK_LABEL_NAME = "break-label";

interface Props {
  pageCount: number;
  selectedPagesArray: number[];
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
}

export const Pagination: FC<Props> = ({
  pageCount,
  selectedPagesArray,
  pageRangeDisplayed = 5,
  marginPagesDisplayed = 3,
}) => {
  const { t } = useTranslation();

  const [selectedPages, setSelectedPages] = useState(selectedPagesArray);
  const countSelectedPages = selectedPages.length - 1;

  const defaultCurrentPage = selectedPages[Math.round(countSelectedPages / 2)];
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);

  const forcePage = currentPage - 1;

  useEffect(() => {
    if (currentPage !== defaultCurrentPage) {
      setSelectedPages([currentPage]);
    }
    // When adding defaultCurrentPage in the dependencies, the pagination does not work correctly.
    // It updates every time, when selectedPages changes, so this value is not added in them!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const checkIsSelectedPage = useCallback(
    (page: number) => selectedPages.includes(page),
    [selectedPages]
  );

  const isSelectedFirstPage = checkIsSelectedPage(1);
  const isSelectedLastPage = checkIsSelectedPage(pageCount);

  const paginationLabels = useMemo(
    () => ({
      previousLabel: (
        <PaginationItem
          variant={ButtonVariants.SECONDARY}
          isDisabled={isSelectedFirstPage}
        >
          {t(`${T_PREFIX} - ${PREVIOUS_LABEL_NAME}`)}
        </PaginationItem>
      ),

      nextLabel: (
        <PaginationItem
          variant={ButtonVariants.SECONDARY}
          isDisabled={isSelectedLastPage}
        >
          {t(`${T_PREFIX} - ${NEXT_LABEL_NAME}`)}
        </PaginationItem>
      ),

      breakLabel: (
        <PaginationItem>
          {t(`${T_PREFIX} - ${BREAK_LABEL_NAME}`)}
        </PaginationItem>
      ),

      pageLabelBuilder: (page: number) => (
        <PaginationItem isDisabled={checkIsSelectedPage(page)}>
          {page}
        </PaginationItem>
      ),
    }),
    [t, checkIsSelectedPage, isSelectedFirstPage, isSelectedLastPage]
  );

  const onClickPage: ReactPaginateProps["onClick"] = useCallback(
    ({ isPrevious, isNext }) => {
      if (isPrevious) {
        const prevPage = selectedPages[0] - 1;

        setCurrentPage(prevPage);
      }

      if (isNext) {
        const nextPage = selectedPages[countSelectedPages] + 1;

        setCurrentPage(nextPage);
      }
    },
    [selectedPages, countSelectedPages]
  );

  const onPageChange: ReactPaginateProps["onPageChange"] = useCallback(
    ({ selected }) => {
      const currentPage = selected + 1;

      if (!checkIsSelectedPage(currentPage)) {
        setCurrentPage(currentPage);
      }
    },
    [checkIsSelectedPage]
  );

  return (
    <div className="flex justify-center items-center mt-10">
      <ReactPaginate
        containerClassName="flex items-center gap-x-2"
        forcePage={forcePage}
        pageRangeDisplayed={pageRangeDisplayed}
        marginPagesDisplayed={marginPagesDisplayed}
        pageCount={pageCount}
        onClick={onClickPage}
        onPageChange={onPageChange}
        {...paginationLabels}
      />
    </div>
  );
};
