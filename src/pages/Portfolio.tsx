import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { useQueryParams } from "src/hooks/useQueryParams";
import { getWorksAsync } from "src/redux/works/action";
import { selectIsLoading, selectWorks } from "src/redux/works/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import { ShowMore } from "src/components/Button/ShowMore";
import { TagsHeading } from "src/components/Heading/types";
import {
  DEFAULT_SECTION_CLASS_NAME,
  DEFAULT_ITEMS_COMPONENT_CLASS_NAME,
} from "./constants";

const T_PREFIX = "portfolio";

const HEADING = "title";

// CHANGE - Додати ліміт , оффсет та номер сторінки в редакс і в ньому додавати в query параметри і звідти брати дані + пагінацію додати
// Додати,якщо ліміт = 5 , то не відображає загрузку на кнопці

// додати відключену кнопку і стилі її
// прокрутити до того місця, де з'являться нові пости

const Portfolio: FC = () => {
  const { t } = useTranslation();

  const {
    limitInitialValue,
    page,
    limit,
    offset,
    isChangedLimit,
    incrementLimit,
  } = useQueryParams();

  const isLoading = useAppSelector(selectIsLoading);
  const works = useAppSelector(selectWorks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorksAsync({ limit, page }));
  }, [page, limit, dispatch]);

  const isLoadingShowMore = isLoading && isChangedLimit;

  return (
    <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        tagHeading={TagsHeading.H2}
      />
      <Works
        className={DEFAULT_ITEMS_COMPONENT_CLASS_NAME}
        isLoading={isLoading}
        items={works}
        countItemsPreloader={limit}
      />
      <div className="flex justify-center w-full mt-6">
        <ShowMore
          isLoading={isLoadingShowMore}
          showMoreItemsCount={limitInitialValue}
          onClick={incrementLimit}
        />
      </div>
      pagination
    </SectionWrapper>
  );
};

export default Portfolio;
