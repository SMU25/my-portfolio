import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWorkByIdAsync } from "src/redux/works/action";
import { selectIsLoading, selectWorkById } from "src/redux/works/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { Info } from "./Info";
import { Slider } from "./Slider";
import { Video } from "./Video";
import { Preloader } from "./Preloader";

const Work: FC = () => {
  const { id } = useParams();

  const isLoading = useAppSelector(selectIsLoading);
  const work = useAppSelector(selectWorkById);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorkByIdAsync(id));
  }, [id, dispatch]);

  const sectionContent = isLoading ? (
    <Preloader />
  ) : (
    work && (
      <>
        <Info {...work} />
        <Slider imageAlbum={work.imageAlbum} />
        <Video {...work.video} />
      </>
    )
  );

  return (
    <>
      <BreadCrumbs tertiaryPageName={work?.title} />
      <SectionWrapper className="pt-19.5">{sectionContent}</SectionWrapper>
    </>
  );
};

export default Work;
