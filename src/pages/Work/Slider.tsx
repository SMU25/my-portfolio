import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ImageAlbumItem } from "src/types/work";
import { SliderItem } from "./SliderItem";
import { SLIDER_SETTINGS } from "./constants";
import { T_PREFIX } from ".";

interface Props {
  imageAlbum: ImageAlbumItem[];
}

const HEADING = "slider-title";

export const Slider: FC<Props> = ({ imageAlbum }) => {
  const { t } = useTranslation();

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
        {t(`${T_PREFIX} - ${HEADING}`)}
      </Heading>
      <SwiperSlider items={swiperItems} customSettings={SLIDER_SETTINGS} />
    </div>
  );
};
