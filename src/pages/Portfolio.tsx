import React, { FC, useState, useEffect, useCallback } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { useQueryParams } from "src/hooks/useQueryParams";
import { usePageTitle } from "src/hooks/usePageTitle";
import { useOnLoadPage } from "src/hooks/useOnLoadPage";
import { getPortfolioProjectsAsync } from "src/redux/portfolio/actions";
import { togglePortfolioListTypeView } from "src/redux/config/actions";
import {
  selectIsLoading,
  selectPortfolioProjects,
} from "src/redux/portfolio/selectors";
import { selectPortfolioListTypeView } from "src/redux/config/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { PortfolioItems } from "src/components/PortfolioItems";
import { ChangeViewButton } from "src/components/Button/ChangeViewButton";
import { ShowMore } from "src/components/Button/ShowMore";
import { Pagination } from "src/components/Pagination";
import { TagsHeading } from "src/components/Heading/types";
import { QueryParams } from "src/types";
import {
  DEFAULT_SECTION_CLASSNAME,
  DEFAULT_ITEMS_COMPONENT_CLASSNAME,
  DEFAULT_SHOW_MORE_BTN_CONTAINER_CLASSNAME,
} from "./constants";

const T_PREFIX = "portfolio";

const HEADING = "title";

// CHANGE - Додати ліміт , оффсет та номер сторінки в редакс і в ньому додавати в query параметри і звідти брати дані + пагінацію додати
// Додати,якщо ліміт = 5 , то не відображає загрузку на кнопці

// прокрутити до того місця, де з'являться нові пости

const Portfolio: FC = () => {
  const { t } = useTranslation();

  const pageTitle = t(`${T_PREFIX} - ${HEADING}`);

  usePageTitle(pageTitle);

  const { isLoadingPage, setIsLoadingPage } = useOnLoadPage();

  const dispatch = useAppDispatch();

  const { limitInitialValue, page, limit, setPage } = useQueryParams();

  const isLoading = useAppSelector(selectIsLoading);
  const projects = useAppSelector(selectPortfolioProjects);
  // CHANGE - буде змінено,коли буде АПІ
  // const {pageCount} = useAppSelector(selectPortfolioProjects);
  const pageCount = 5;
  const portfolioListTypeView = useAppSelector(selectPortfolioListTypeView);

  const tooglePortfolioListView = useCallback(() => {
    dispatch(togglePortfolioListTypeView());
  }, [dispatch]);

  const getProjects = useCallback(
    (queryParams: QueryParams = {}) =>
      dispatch(getPortfolioProjectsAsync({ page, limit, ...queryParams })),
    [dispatch, page, limit]
  );

  useEffect(() => {
    if (!projects?.length && !isLoadingPage) {
      getProjects();
    }
  }, [getProjects, projects, isLoadingPage]);

  const [selectedPages, setSelectedPages] = useState([page]);

  const isDataMissing = !isLoading && !projects?.length;
  //CHANGE - тут буде ще 1 значення (!isDataMissing && countPages > 1). Якщо кількість сторінок не більше 1, то не показувати пагінацію
  const isShownPagination = !isDataMissing;
  // зміню тут , щоб пагінацію показувалоЮ тільки коли countPages > 1 , а інші умовив видалити, і скривати тільки show more,Ю о коли елементи не завантажило, щоб було відображення піганації для переходу на іншу сторінку

  // CHANGE - add preloader for ROW items
  // add animation for toggle view type list
  // на головній перша секції з бека отримання можна зробити, і потім залежно від мови, щоб отримувати переклад роботи або посту із API (по ід та lang)

  const isLoadingShowMore = isLoading && selectedPages.length > 1;

  const onLoadMoreItems = useCallback(() => {
    if (page < pageCount) {
      const nextPage = page + 1;

      setPage(nextPage);
      setSelectedPages((prevPagesArray) => [...prevPagesArray, nextPage]);
      getProjects({ page: nextPage });
    }
  }, [setPage, getProjects, page]);

  useEffect(() => {
    setIsLoadingPage(true);
  }, [setIsLoadingPage]);

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
              listTypeView={portfolioListTypeView}
              toogleListTypeView={tooglePortfolioListView}
            />
          )}
        </ContainerHead>
        <PortfolioItems
          className={DEFAULT_ITEMS_COMPONENT_CLASSNAME}
          isLoading={isLoading}
          listTypeView={portfolioListTypeView}
          preloaderItemCount={limit}
          items={projects}
          getPortfolioItems={getProjects}
        />
        {isShownPagination && (
          <>
            <div className={DEFAULT_SHOW_MORE_BTN_CONTAINER_CLASSNAME}>
              <ShowMore
                isLoading={isLoadingShowMore}
                isDisabled={page >= pageCount}
                loadableItemCountLabel={limitInitialValue}
                onClick={onLoadMoreItems}
              />
            </div>
            <Pagination
              // тут буде братися значення з АПІ і буде передаватися кількість сторінок
              currentPage={page}
              selectedPages={selectedPages}
              setCurrentPage={setPage}
              setSelectedPages={setSelectedPages}
              pageCount={pageCount}
              // Також зберігати поточну сторінку або сторінки в редаксі,
              //  щоб коли я перехожу назад на неї, то показувало її або їх, а не першу(1)
              // і щоб це додавало в query params , і звідти буде брати це значення для пагінації

              // АБО зберігати і додавати одразу силку на цю сторінку,
              // щоб поверталося на цю сторінку вірну + також зберігати інші параметри (limit , offset)
              // limit може вже і не потрібен
              getItems={getProjects}
            />
          </>
        )}
      </SectionWrapper>
    </>
  );
};

export default Portfolio;
