import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWorkByIdAsync } from "src/redux/works/action";
import { selectIsLoading, selectWorkById } from "src/redux/works/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
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

  if (isLoading) {
    return (
      <SectionWrapper>
        <Preloader />
      </SectionWrapper>
    );
  } else if (!work) {
    return null;
  }

  return (
    <SectionWrapper>
      <Info {...work} />
      <Slider imageAlbum={work.imageAlbum} />
      <Video {...work.video} />
    </SectionWrapper>
  );
};

export default Work;
