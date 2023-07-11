import React, { FC, useState, useEffect, useCallback, useRef } from "react";
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
  setActiveIndex: (value: number) => void;
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
  setActiveIndex,
}) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const controllerRef = useRef<SwiperCore>();

  const settingsMainSwiper =
    customSettingsMainSwiper || DEFAULT_SETTINGS_GALLERY_MAIN_SWIPER;
  const settingsThumbsSwiper =
    customSettingsThumbsSwiper || DEFAULT_SETTINGS_GALLERY_THUMBS_SWIPER;

  const handleSlideChange = useCallback(() => {
    if (controllerRef.current && mainSwiper && thumbsSwiper) {
      const activeIndex = mainSwiper.activeIndex;
      thumbsSwiper.slideTo(activeIndex);
      // setActiveIndex(activeIndex);
      controllerRef.current.update();
    }
  }, [
    mainSwiper,
    thumbsSwiper,
    controllerRef,
    // setActiveIndex
  ]);

  useEffect(() => {
    if (mainSwiper && thumbsSwiper) {
      controllerRef.current = mainSwiper;
    }
  }, [mainSwiper, thumbsSwiper]);

  return (
    <div className={containerClassName}>
      <SwiperSlider
        swiperState={mainSwiper}
        className={mainSwiperClassName}
        isShownNavigationButtons={isShownNavBtnsMainSwiper}
        items={items}
        customSettings={settingsMainSwiper}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        onSwiper={setMainSwiper}
        onSlideChange={handleSlideChange}
        controller={{
          control: controllerRef.current,
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
          control: controllerRef.current,
        }}
      />
    </div>
  );
};
