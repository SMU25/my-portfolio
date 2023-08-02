import React, { FC, useState, useEffect } from "react";
import SwiperCore from "swiper";
import { SwiperProps } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { CustomSwiperProps, SwiperSlider } from ".";
import {
  DEFAULT_SETTINGS_GALLERY_MAIN_SWIPER,
  DEFAULT_SETTINGS_GALLERY_THUMBS_SWIPER,
} from "./constants";
import { setActiveIndex } from "./types";

export const THUMBS_MAIN_SWIPER_ID = "main-swiper";

interface Props
  extends Pick<CustomSwiperProps, "items" | "containerClassName"> {
  mainSwiperClassName?: string;
  miniSwiperClassName?: string;
  customSettingsMainSwiper?: SwiperProps;
  customSettingsThumbsSwiper?: SwiperProps;
  isShownNavBtnsMainSwiper?: boolean;
  isShownNavBtnsThumbsSwiper?: boolean;
  setActiveSlideIndex?: setActiveIndex;
}

export const ThumbsGallerySwiper: FC<Props> = ({
  items,
  containerClassName,
  mainSwiperClassName,
  miniSwiperClassName,
  customSettingsMainSwiper,
  customSettingsThumbsSwiper,
  isShownNavBtnsMainSwiper,
  isShownNavBtnsThumbsSwiper,
  setActiveSlideIndex,
}) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const settingsMainSwiper =
    customSettingsMainSwiper || DEFAULT_SETTINGS_GALLERY_MAIN_SWIPER;
  const settingsThumbsSwiper =
    customSettingsThumbsSwiper || DEFAULT_SETTINGS_GALLERY_THUMBS_SWIPER;

  return (
    <div className={containerClassName}>
      <SwiperSlider
        id={THUMBS_MAIN_SWIPER_ID}
        className={mainSwiperClassName}
        swiperState={mainSwiper}
        isShownNavigationButtons={isShownNavBtnsMainSwiper}
        items={items}
        customSettings={settingsMainSwiper}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        onSwiper={setMainSwiper}
        setActiveSlideIndex={setActiveSlideIndex}
      />
      <SwiperSlider
        id="thumbs-slider"
        className={miniSwiperClassName}
        swiperState={thumbsSwiper}
        isShownNavigationButtons={isShownNavBtnsThumbsSwiper}
        items={items}
        customSettings={settingsThumbsSwiper}
        onSwiper={setThumbsSwiper}
      />
    </div>
  );
};
