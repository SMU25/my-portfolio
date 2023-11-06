import React, { FC, useState } from "react";
import cn from "classnames";
import SwiperCore from "swiper";
import { SwiperProps } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { KeyboardInfoPopup } from "./KeyboardInfoPopup";
import { CustomSwiperProps, SwiperSlider } from ".";
import {
  DEFAULT_GALLERY_MAIN_SWIPER_SETTINGS,
  DEFAULT_GALLERY_THUMBS_SWIPER_SETTINGS,
} from "./constants";
import { setActiveIndex } from "./types";

const COOKIES_KEY_KEYBOARD_POPUP = "IS_SHOWN_KEYBOARD_INFO_GALLERY_POPUP";

export const THUMBS_MAIN_SWIPER_ID = "main-swiper";

interface Props
  extends Pick<
    CustomSwiperProps,
    "items" | "containerClassName" | "isShownKeyboardInfoPopup"
  > {
  mainSwiperClassName?: string;
  miniSwiperClassName?: string;
  customMainSwiperSettings?: SwiperProps;
  customThumbsSwiperSettings?: SwiperProps;
  isShownNavBtnsMainSwiper?: boolean;
  isShownNavBtnsThumbsSwiper?: boolean;
  setActiveSlideIndex?: setActiveIndex;
}

export const ThumbsGallerySwiper: FC<Props> = ({
  items,
  containerClassName,
  mainSwiperClassName,
  miniSwiperClassName,
  customMainSwiperSettings,
  customThumbsSwiperSettings,
  isShownNavBtnsMainSwiper,
  isShownNavBtnsThumbsSwiper,
  isShownKeyboardInfoPopup,
  setActiveSlideIndex,
}) => {
  const [mainSwiper, setMainSwiper] = useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  const settingsMainSwiper =
    customMainSwiperSettings || DEFAULT_GALLERY_MAIN_SWIPER_SETTINGS;
  const settingsThumbsSwiper =
    customThumbsSwiperSettings || DEFAULT_GALLERY_THUMBS_SWIPER_SETTINGS;

  return (
    <div className={cn("relative", containerClassName)}>
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
      <KeyboardInfoPopup
        className="!top-70"
        isShown={isShownKeyboardInfoPopup}
        cookiesKeyPopup={COOKIES_KEY_KEYBOARD_POPUP}
      />
    </div>
  );
};
