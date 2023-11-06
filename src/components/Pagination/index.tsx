import React, { FC, useEffect, useCallback, useMemo, memo } from "react";
import { useTranslation } from "react-i18next";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { useQueryParams } from "src/hooks/useQueryParams";
import { PaginationItem } from "./PaginationItem";
import { ButtonVariants } from "../Button/types";

const T_PREFIX = "pagination";

const PREVIOUS_LABEL_NAME = "previous-label";
const NEXT_LABEL_NAME = "next-label";
const BREAK_LABEL_NAME = "break-label";

interface Props {
  currentPage: number;
  selectedPages: number[];
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  setCurrentPage: (value: number) => void;
  setSelectedPages: (value: number[]) => void;
  getItems: VoidFunction;
}

export const Pagination: FC<Props> = memo(
  ({
    currentPage,
    selectedPages,
    pageCount,
    pageRangeDisplayed = 5,
    marginPagesDisplayed = 3,
    setCurrentPage,
    setSelectedPages,
    getItems,
  }) => {
    const { t } = useTranslation();

    const { generatePagePathName } = useQueryParams();

    const firstPageInSelectedPages = selectedPages[0];
    const lastPageInSelectedPages = selectedPages[selectedPages.length - 1];

    const forcePage = currentPage - 1;

    const checkIsSelectedPage = useCallback(
      (page: number) => selectedPages.includes(page),
      [selectedPages]
    );

    const isSelectedFirstPage = checkIsSelectedPage(1);
    const isSelectedLastPage = checkIsSelectedPage(pageCount);

    // CHANGE - додати, щоб був 1 запит, тобто якщо дані відсутні, то далі не підгружає
    useEffect(() => {
      if (!checkIsSelectedPage(currentPage)) {
        setSelectedPages([currentPage]);
        getItems();
      }
    }, [checkIsSelectedPage, setSelectedPages, getItems, currentPage]);

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

        hrefBuilder: generatePagePathName,
      }),
      [
        t,
        checkIsSelectedPage,
        generatePagePathName,
        isSelectedFirstPage,
        isSelectedLastPage,
      ]
    );

    const onClickPage: ReactPaginateProps["onClick"] = useCallback(
      ({ isPrevious, isNext }) => {
        if (isPrevious) {
          const prevPage = firstPageInSelectedPages - 1;

          setCurrentPage(prevPage);
        }

        if (isNext) {
          const nextPage = lastPageInSelectedPages + 1;

          setCurrentPage(nextPage);
        }
      },
      [setCurrentPage, firstPageInSelectedPages, lastPageInSelectedPages]
    );

    const onPageChange: ReactPaginateProps["onPageChange"] = useCallback(
      ({ selected }) => {
        const newCurrentPage = selected + 1;

        if (!checkIsSelectedPage(newCurrentPage)) {
          setCurrentPage(newCurrentPage);
        }
      },
      [setCurrentPage, checkIsSelectedPage]
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
  }
);
