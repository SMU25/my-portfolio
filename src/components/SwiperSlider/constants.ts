import { Swiper, Autoplay, Keyboard, Pagination } from "swiper";
import { SCREEN_BREAKPOINTS } from "src/constants/screenBreakpoints";

// CHANGE add  Swioer type to it

export const DEFAULT_SETTINGS = {
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
