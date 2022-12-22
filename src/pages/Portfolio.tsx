import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWorksAsync } from "src/redux/works/action";
import { selectIsLoading, selectWorks } from "src/redux/works/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import {
  DEFAULT_SECTION_CLASS_NAME,
  DEFAULT_HEADING_CLASS_NAME,
  DEFAULT_ITEMS_COMPONENT_CLASS_NAME,
} from "./constants";

const MAX_COUNT_WORKS_LIMIT = 5;

const T_PREFIX = "portfolio";

const HEADING = "title";

//CHANGE - Винести можливо все в Воркс компоннт, там де отримання робіт, а туди кидати об'єкт із даними: макс кількість, сортування і т.д.

const Portfolio: FC = () => {
  const { t } = useTranslation();

  const isLoading = useAppSelector(selectIsLoading);
  const works = useAppSelector(selectWorks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorksAsync({ limit: MAX_COUNT_WORKS_LIMIT }));
  }, [dispatch]);

  return (
    <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
      <ContainerHead
        titleClassName={DEFAULT_HEADING_CLASS_NAME}
        title={t(`${T_PREFIX} - ${HEADING}`)}
      />
      <Works
        className={DEFAULT_ITEMS_COMPONENT_CLASS_NAME}
        isLoading={isLoading}
        items={works}
        maxCountItemsPreloader={MAX_COUNT_WORKS_LIMIT}
      />
    </SectionWrapper>
  );
};

export default Portfolio;
