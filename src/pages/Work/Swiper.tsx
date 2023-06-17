import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { ThumbsGallerySwiper } from "src/components/SwiperSlider/ThumbsGallerySwiper";
import { ImageAlbumItem } from "src/types/work";
import { SwiperItem } from "./SwiperItem";

const T_PREFIX = "work-swiper";

const HEADING = "title";
interface Props {
  imageAlbum: ImageAlbumItem[];
}

export const Swiper: FC<Props> = ({ imageAlbum }) => {
  const { t } = useTranslation();

  const swiperItems = imageAlbum?.map(({ id, ...item }) => (
    <SwiperItem key={id} {...item} />
  ));

  if (!imageAlbum?.length) return null;

  return (
    <div>
      <Heading
        className="ml-1 !text-3xl leading-15 font-medium"
        tagHeading={TagsHeading.H3}
      >
        {t(`${T_PREFIX} - ${HEADING}`)}
      </Heading>
      <ThumbsGallerySwiper
        miniSwiperClassName="mt-5"
        items={swiperItems}
        isShownNavBtnsThumbsSwiper
      />
    </div>
  );
};
