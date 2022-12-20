import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWorksAsync } from "src/redux/works/action";
import { selectWorks } from "src/redux/works/selectors";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import { PATHNAMES } from "src/constants/routes";

const WORKS_LIMIT_MAX_COUNT = 3;

const T_PREFIX = "featured-works";

const HEADING = "title";

export const FeaturedWorks: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorksAsync({ limit: WORKS_LIMIT_MAX_COUNT }));
  }, [dispatch]);

  const works = useAppSelector(selectWorks);

  //CHANGE - Витягати текст із кожного елемента в залежності від поточнох мови в елементи портфоліо та постів, якщо немає такої мови , то юзати фо дефолту

  return (
    <div>
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        href={PATHNAMES.PORTFOLIO}
      />
      <Works className="border-t border-gray-lighter" items={works} />
    </div>
  );
};
