import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { usePageTitle } from "src/hooks/usePageTitle";
import { getWorkByIdAsync } from "src/redux/works/action";
import { selectIsLoading, selectWorkById } from "src/redux/works/selectors";
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
  const work = useAppSelector(selectWorkById);
  const { title, imageAlbum, video } = work || {};

  useEffect(() => {
    dispatch(getWorkByIdAsync(id));
  }, [id, dispatch]);

  usePageTitle(title);

  const sectionContent = isLoading ? (
    <Preloader />
  ) : (
    work && (
      <>
        <Info {...work} />
        <Swiper imageAlbum={imageAlbum}></Swiper>
        <Video {...video} />
      </>
    )
  );

  return (
    <>
      <BreadCrumbs tertiaryPageName={title} />
      <SectionWrapper className="pt-19.5">{sectionContent}</SectionWrapper>
    </>
  );
};

export default Work;
