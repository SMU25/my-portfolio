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
import { setActiveIndex } from "./types";

interface Props
  extends Pick<CustomSwiperProps, "items" | "containerClassName"> {
  mainSwiperClassName?: string;
  miniSwiperClassName?: string;
  containerThumbsSwiperClassName?: string;
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
  containerThumbsSwiperClassName,
  customSettingsMainSwiper,
  customSettingsThumbsSwiper,
  isShownNavBtnsMainSwiper,
  isShownNavBtnsThumbsSwiper,
  setActiveSlideIndex,
}) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  // const controllerRef = useRef<SwiperCore>();

  const settingsMainSwiper =
    customSettingsMainSwiper || DEFAULT_SETTINGS_GALLERY_MAIN_SWIPER;
  const settingsThumbsSwiper =
    customSettingsThumbsSwiper || DEFAULT_SETTINGS_GALLERY_THUMBS_SWIPER;

  // const handleSlideChange = useCallback(() => {
  //   if (mainSwiper && thumbsSwiper) {
  //     setActiveSlideIndex(mainSwiper.activeIndex);
  //   }
  // }, [mainSwiper, thumbsSwiper, setActiveSlideIndex]);

  // const handleSlideChange = useCallback(() => {
  //   if (controllerRef.current && mainSwiper && thumbsSwiper) {
  //     const activeIndex = mainSwiper.activeIndex;
  //     thumbsSwiper.slideTo(activeIndex);
  //     controllerRef.current.update();
  //   }
  // }, [
  //   mainSwiper,
  //   thumbsSwiper,
  //   controllerRef,
  //   // setActiveSlideIndex
  // ]);

  // useEffect(() => {
  //   if (mainSwiper && thumbsSwiper) {
  //     controllerRef.current = mainSwiper;
  //   }
  // }, [mainSwiper, thumbsSwiper]);

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
        setActiveSlideIndex={setActiveSlideIndex}
        // controller={{
        //   control: controllerRef.current,
        // }}
      />
      <SwiperSlider
        swiperState={thumbsSwiper}
        className={miniSwiperClassName}
        containerClassName={containerThumbsSwiperClassName}
        isShownNavigationButtons={isShownNavBtnsThumbsSwiper}
        items={items}
        customSettings={settingsThumbsSwiper}
        onSwiper={setThumbsSwiper}
        // controller={{
        //   control: controllerRef.current,
        // }}
      />
    </div>
  );
};
