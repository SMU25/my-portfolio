import React, { FC, useEffect, useCallback } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { useQueryParams } from "src/hooks/useQueryParams";
import { usePageTitle } from "src/hooks/usePageTitle";
import { getWorksAsync } from "src/redux/works/action";
import { toggleWorkListTypeView } from "src/redux/config/action";
import { selectIsLoading, selectWorks } from "src/redux/works/selectors";
import { selectWorkListTypeView } from "src/redux/config/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import { ChangeViewButton } from "src/components/Button/ChangeViewButton";
import { ShowMore } from "src/components/Button/ShowMore";
import { Pagination } from "src/components/Pagination";
import { TagsHeading } from "src/components/Heading/types";
import {
  DEFAULT_SECTION_CLASSNAME,
  DEFAULT_ITEMS_COMPONENT_CLASSNAME,
  DEFAULT_SHOW_MORE_BTN_CONTAINER_CLASSNAME,
} from "./constants";

const T_PREFIX = "portfolio";

const HEADING = "title";

// CHANGE - Додати ліміт , оффсет та номер сторінки в редакс і в ньому додавати в query параметри і звідти брати дані + пагінацію додати
// Додати,якщо ліміт = 5 , то не відображає загрузку на кнопці

// додати відключену кнопку і стилі її
// прокрутити до того місця, де з'являться нові пости

const Portfolio: FC = () => {
  const { t } = useTranslation();

  const pageTitle = t(`${T_PREFIX} - ${HEADING}`);

  const dispatch = useAppDispatch();

  const {
    limitInitialValue,
    page,
    limit,
    offset,
    isChangedQueryParams,
    incrementLimit,
  } = useQueryParams();

  const isLoading = useAppSelector(selectIsLoading);
  const works = useAppSelector(selectWorks);

  const workListTypeView = useAppSelector(selectWorkListTypeView);

  const toogleWorkView = useCallback(() => {
    dispatch(toggleWorkListTypeView());
  }, [dispatch]);

  useEffect(() => {
    if (!works || isChangedQueryParams) {
      dispatch(getWorksAsync({ limit, page }));
    }
  }, [dispatch, works, page, limit, isChangedQueryParams]);

  usePageTitle(pageTitle);

  const isDataMissing = !isLoading && !works?.length;
  //CHANGE - тут буде ще 1 значення (!isDataMissing && countPages > 1). Якщо кількість сторінок не більше 1, то не показувати пагінацію
  const isShownPagination = !isDataMissing;

  // CHANGE - add preloader for ROW items
  // add animation for toggle view type list
  // на головній перша секції з бека отримання можна зробити, і потім залежно від мови, щоб отримувати переклад роботи або посту із API (по ід та lang)

  const isLoadingShowMore = isLoading && Boolean(works);

  return (
    <>
      <BreadCrumbs />
      <SectionWrapper
        className={cn("bg-gradient-blue-sky", DEFAULT_SECTION_CLASSNAME)}
      >
        <ContainerHead
          titleClassName="!py-1.5"
          title={pageTitle}
          tagHeading={TagsHeading.H2}
        >
          {!isDataMissing && (
            <ChangeViewButton
              listTypeView={workListTypeView}
              toogleListTypeView={toogleWorkView}
            />
          )}
        </ContainerHead>
        <Works
          className={DEFAULT_ITEMS_COMPONENT_CLASSNAME}
          isLoading={isLoading}
          items={works}
          countItemsPreloader={limit}
          listTypeView={workListTypeView}
        />
        {isShownPagination && (
          <>
            <div className={DEFAULT_SHOW_MORE_BTN_CONTAINER_CLASSNAME}>
              <ShowMore
                isLoading={isLoadingShowMore}
                buttonTitleCountLabel={limitInitialValue}
                onClick={incrementLimit}
              />
            </div>
            <Pagination />
          </>
        )}
      </SectionWrapper>
    </>
  );
};

export default Portfolio;
