import React, { FC } from "react";
import { Trans } from "react-i18next";
import "swiper/css/free-mode";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ImageAlbumItem } from "src/types/work";
import { SliderItem } from "./SliderItem";
import { SLIDER_SETTINGS } from "./constants";

const T_PREFIX = "work-swiper";

interface Props {
  imageAlbum: ImageAlbumItem[];
}

const HEADING = "title";

export const Slider: FC<Props> = ({ imageAlbum }) => {
  const swiperItems = imageAlbum?.map(({ id, ...item }) => (
    <SliderItem key={id} {...item} />
  ));

  if (!imageAlbum?.length) return null;

  return (
    <div>
      <Heading
        className="ml-1 text-3xl leading-15 font-medium"
        tagHeading={TagsHeading.H3}
      >
        <Trans>{`${T_PREFIX} - ${HEADING}`}</Trans>

        <Trans></Trans>
      </Heading>
      <SwiperSlider items={swiperItems} customSettings={SLIDER_SETTINGS} />
    </div>
  );
};
