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
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  keyboard: true,
  centeredSlides: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  modules: [Autoplay, Keyboard, Pagination, FreeMode],
  breakpoints: {
    [SCREEN_BREAKPOINTS.DEFAULT]: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    [SCREEN_BREAKPOINTS.XS]: {
      spaceBetween: 22,
    },
    [SCREEN_BREAKPOINTS.SM]: {
      spaceBetween: 24,
    },
    [SCREEN_BREAKPOINTS.LG]: {
      slidesPerView: 3,
    },
  },
};

export const DEFAULT_GALLERY_MAIN_SWIPER_SETTINGS: SwiperProps = {
  slidesPerView: 1,
  spaceBetween: 16,
  keyboard: true,
  centeredSlides: false,
  grabCursor: true,
  modules: [Autoplay, Keyboard, FreeMode, Thumbs, Controller, Pagination],
};

export const DEFAULT_GALLERY_THUMBS_SWIPER_SETTINGS: SwiperProps = {
  slidesPerView: 5,
  spaceBetween: 12,
  slideToClickedSlide: true,
  watchSlidesProgress: true,
  modules: [FreeMode, Thumbs, Controller],
  breakpoints: {
    [SCREEN_BREAKPOINTS.DEFAULT]: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    [SCREEN_BREAKPOINTS.SM]: {
      spaceBetween: 12,
    },
    [SCREEN_BREAKPOINTS.LG]: {
      slidesPerView: 4,
    },
    [SCREEN_BREAKPOINTS.XL]: {
      slidesPerView: 5,
    },
  },
};
