import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getFeaturedPortfolioProjectsAsync } from "src/redux/portfolio/actions";
import {
  selectIsLoading,
  selectFeaturedPortfolioProjects,
} from "src/redux/portfolio/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { PortfolioItems } from "src/components/PortfolioItems";
import { PATHNAMES } from "src/constants/routes";

const PROJECTS_COUNT_LIMIT = 6;

const T_PREFIX = "featured-portfolio-projects";

const HEADING = "title";

export const FeaturedPortfolioProjects: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const featuredProjects = useAppSelector(selectFeaturedPortfolioProjects);
  // буде змінено, коли напишу власну API

  useEffect(() => {
    if (!featuredProjects) {
      dispatch(
        getFeaturedPortfolioProjectsAsync({ limit: PROJECTS_COUNT_LIMIT })
      );
    }
  }, [dispatch, featuredProjects]);

  const isDataMissing = !isLoading && !featuredProjects?.length;

  if (isDataMissing) return null;

  //CHANGE - Витягати текст із кожного елемента в залежності від поточнох мови в елементи портфоліо та постів, якщо немає такої мови , то юзати фо дефолту

  return (
    <SectionWrapper
      className="!px-0 sm:pt-2 pb-7 sm:pb-10"
      innerContainerClassName="default:max-w-calc-full-minus-5 xs:max-w-calc-full-minus-10 sm:max-w-calc-full-minus-30 md:!max-w-195 lg:!max-w-calc-full-minus-30 gl:!max-w-calc-full-minus-80 xl:!max-w-323.5"
    >
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        href={PATHNAMES.PORTFOLIO}
      />
      <PortfolioItems
        className="border-t border-gray-lighter"
        isLoading={isLoading}
        items={featuredProjects}
        isSlider
      />
    </SectionWrapper>
  );
};
