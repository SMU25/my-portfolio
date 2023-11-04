import React, { FC, useState, useMemo } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { ThumbsGallerySwiper } from "src/components/SwiperSlider/ThumbsGallerySwiper";
import { ImageAlbumItem } from "src/types/portfolio";
import { SwiperItem } from "./SwiperItem";
import { DEFAULT_HEADING_CLASSNAME } from "./constants";

const T_PREFIX = "portfolio-project-swiper";

const HEADING = "title";

interface Props {
  imageAlbum: ImageAlbumItem[];
}

export const Swiper: FC<Props> = ({ imageAlbum }) => {
  const { t } = useTranslation();

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const swiperItems = useMemo(() => {
    if (imageAlbum?.length)
      return imageAlbum.map(({ id, ...item }, index) => (
        <SwiperItem
          key={id}
          isActiveSlide={index === activeSlideIndex}
          {...item}
        />
      ));
  }, [imageAlbum, activeSlideIndex]);

  if (!swiperItems) return null;

  return (
    <div>
      <Heading
        className={cn("ml-1", DEFAULT_HEADING_CLASSNAME)}
        tagHeading={TagsHeading.H3}
      >
        {t(`${T_PREFIX} - ${HEADING}`)}
      </Heading>
      <ThumbsGallerySwiper
        mainSwiperClassName="rounded-10"
        miniSwiperClassName="mt-2 xs:mt-3 sm:mt-4 md:mt-5 rounded-10"
        items={swiperItems}
        setActiveSlideIndex={setActiveSlideIndex}
        isShownNavBtnsMainSwiper
        isShownKeyboardInfoPopup
      />
    </div>
  );
};
