import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWorksAsync } from "src/redux/works/action";
import { selectIsLoading, selectWorks } from "src/redux/works/selectors";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import { PATHNAMES } from "src/constants/routes";

const MAX_COUNT_WORKS_LIMIT = 3;

const T_PREFIX = "featured-works";

const HEADING = "title";

export const FeaturedWorks: FC = () => {
  const { t } = useTranslation();

  const isLoading = useAppSelector(selectIsLoading);
  const allWorks = useAppSelector(selectWorks);

  // буде змінено, коли напишу власну API
  const featuredWorks = allWorks?.filter((work) => work.isFeatured);

  const works = featuredWorks?.length ? featuredWorks : allWorks;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorksAsync({ limit: MAX_COUNT_WORKS_LIMIT }));
  }, [dispatch]);

  //CHANGE - Витягати текст із кожного елемента в залежності від поточнох мови в елементи портфоліо та постів, якщо немає такої мови , то юзати фо дефолту

  return (
    <>
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        href={PATHNAMES.PORTFOLIO}
      />
      <Works
        className="border-t border-gray-lighter"
        isLoading={isLoading}
        items={works}
      />
    </>
  );
};
