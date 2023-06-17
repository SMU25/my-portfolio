import React, { FC, useState } from "react";
import SwiperCore from "swiper";
import { SwiperProps } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { CustomSwiperProps, SwiperSlider } from ".";
import {
  DEFAULT_SETTINGS_GALLERY_MAIN_SWIPER,
  DEFAULT_SETTINGS_GALLERY_THUMBS_SWIPER,
} from "./constants";

interface Props
  extends Pick<CustomSwiperProps, "items" | "containerClassName"> {
  mainSwiperClassName?: string;
  miniSwiperClassName?: string;
  containerThumbsSwiperClassName?: string;
  customSettingsMainSwiper?: SwiperProps;
  customSettingsThumbsSwiper?: SwiperProps;
  isShownNavBtnsMainSwiper?: boolean;
  isShownNavBtnsThumbsSwiper?: boolean;
}

export const ThumbsGallerySwiper: FC<Props> = ({
  items,
  containerClassName,
  mainSwiperClassName,
  miniSwiperClassName,
  containerThumbsSwiperClassName,
  customSettingsMainSwiper,
  customSettingsThumbsSwiper,
  isShownNavBtnsMainSwiper,
  isShownNavBtnsThumbsSwiper,
}) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const settingsMainSwiper =
    customSettingsMainSwiper || DEFAULT_SETTINGS_GALLERY_MAIN_SWIPER;
  const settingsThumbsSwiper =
    customSettingsThumbsSwiper || DEFAULT_SETTINGS_GALLERY_THUMBS_SWIPER;

  const commonSwiper =
    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null;

  return (
    <div className={containerClassName}>
      <SwiperSlider
        swiperState={mainSwiper}
        className={mainSwiperClassName}
        isShownNavigationButtons={isShownNavBtnsMainSwiper}
        items={items}
        customSettings={settingsMainSwiper}
        thumbs={{
          swiper: commonSwiper,
        }}
        onSwiper={setMainSwiper}
        controller={{
          control: commonSwiper,
        }}
      />
      <SwiperSlider
        swiperState={thumbsSwiper}
        className={miniSwiperClassName}
        containerClassName={containerThumbsSwiperClassName}
        isShownNavigationButtons={isShownNavBtnsThumbsSwiper}
        items={items}
        customSettings={settingsThumbsSwiper}
        onSwiper={setThumbsSwiper}
        controller={{
          control: commonSwiper,
        }}
      />
    </div>
  );
};
