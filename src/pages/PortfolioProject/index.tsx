import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { usePageTitle } from "src/hooks/usePageTitle";
import { getPortfolioProjectByIdAsync } from "src/redux/portfolio/actions";
import {
  selectIsLoading,
  selectPortfolioProjectsById,
} from "src/redux/portfolio/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { Info } from "./Info";
import { Swiper } from "./Swiper";
import { Video } from "./Video";
import { Preloader } from "./Preloader";

const Work: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const projects = useAppSelector(selectPortfolioProjectsById);
  const project = projects[id];
  const { title, imageAlbum, video } = project || {};

  usePageTitle(title);

  useEffect(() => {
    if (!project) dispatch(getPortfolioProjectByIdAsync(id));
  }, [dispatch, id, project]);

  const sectionContent = isLoading ? (
    <Preloader />
  ) : (
    project && (
      <>
        <Info {...project} />
        <Swiper imageAlbum={imageAlbum} />
        <Video {...video} />
      </>
    )
  );

  return (
    <>
      <BreadCrumbs tertiaryPageName={title} />
      <SectionWrapper className="pt-6 sm:pt-10 md:pt-12 gl:pt-19.5">
        {sectionContent}
      </SectionWrapper>
    </>
  );
};

export default Work;
