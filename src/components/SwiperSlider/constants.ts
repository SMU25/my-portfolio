import { Autoplay, Keyboard, Pagination, Thumbs } from "swiper";
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
  modules: [Autoplay, Keyboard, Pagination],
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
  spaceBetween: 16,
  slidesPerView: 1,
  modules: [Thumbs],
};

export const DEFAULT_SETTINGS_GALLERY_MINI_SWIPER: SwiperProps = {
  spaceBetween: 8,
  slidesPerView: 5,
  slideToClickedSlide: true,
};
