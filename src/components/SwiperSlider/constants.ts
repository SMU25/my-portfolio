import {
  Autoplay,
  Keyboard,
  Pagination,
  FreeMode,
  Thumbs,
  Controller,
} from "swiper";
import { SwiperProps } from "swiper/react";
import { SCREEN_BREAKPOINTS } from "src/constants/screenBreakpoints";

export const DEFAULT_SETTINGS: SwiperProps = {
  loop: true,
  keyboard: true,
  centeredSlides: false,
  slidesPerView: 2,
  spaceBetween: 24,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  modules: [Autoplay, Keyboard, Pagination, FreeMode],
  breakpoints: {
    [SCREEN_BREAKPOINTS.DEFAULT]: {
      spaceBetween: 12,
    },
    [SCREEN_BREAKPOINTS.SM]: {
      spaceBetween: 24,
    },
    [SCREEN_BREAKPOINTS.XL]: {
      slidesPerView: 3,
    },
  },
};

export const DEFAULT_SETTINGS_GALLERY_MAIN_SWIPER: SwiperProps = {
  slidesPerView: 1,
  spaceBetween: 16,
  keyboard: true,
  centeredSlides: false,
  grabCursor: true,
  modules: [Autoplay, Keyboard, FreeMode, Thumbs, Controller],
};

export const DEFAULT_SETTINGS_GALLERY_THUMBS_SWIPER: SwiperProps = {
  slidesPerView: 5,
  spaceBetween: 12,
  slideToClickedSlide: true,
  modules: [FreeMode, Controller],
};
