import React, { FC, useState } from "react";
import SwiperCore from "swiper";
import { SwiperProps } from "swiper/react";
import "swiper/css/thumbs";
import { CustomSwiperProps, SwiperSlider } from ".";
import {
  DEFAULT_SETTINGS_GALLERY_MAIN_SWIPER,
  DEFAULT_SETTINGS_GALLERY_MINI_SWIPER,
} from "./constants";

interface Props
  extends Pick<CustomSwiperProps, "items" | "containerClassName"> {
  mainSwiperClassName?: string;
  miniSwiperClassName?: string;
  customSettingsMainSwiper?: SwiperProps;
  customSettingsMiniSwiper?: SwiperProps;
  isShownNavBtnsMainSwiper?: boolean;
  isShownNavBtnsMiniSwiper?: boolean;
}

// зробити 2 види елементів , для головного і малого слайдера і для малого прибирати опис та заголовок

export const ThumbsGallerySwiper: FC<Props> = ({
  items,
  containerClassName,
  mainSwiperClassName,
  miniSwiperClassName,
  customSettingsMainSwiper,
  customSettingsMiniSwiper,
  isShownNavBtnsMainSwiper,
  isShownNavBtnsMiniSwiper,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const settingsMainSwiper =
    customSettingsMainSwiper || DEFAULT_SETTINGS_GALLERY_MAIN_SWIPER;
  const settingsMiniSwiper =
    customSettingsMiniSwiper || DEFAULT_SETTINGS_GALLERY_MINI_SWIPER;

  return (
    <div className={containerClassName}>
      <SwiperSlider
        className={mainSwiperClassName}
        isShownNavigationButtons={isShownNavBtnsMainSwiper}
        items={items}
        customSettings={settingsMainSwiper}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      />
      <SwiperSlider
        className={miniSwiperClassName}
        isShownNavigationButtons={isShownNavBtnsMiniSwiper}
        items={items}
        customSettings={settingsMiniSwiper}
        onSwiper={setThumbsSwiper}
      />
    </div>
  );
};
