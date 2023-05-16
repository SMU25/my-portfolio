import { Autoplay, Keyboard, FreeMode } from "swiper";
import { SCREEN_BREAKPOINTS } from "src/constants/screenBreakpoints";

export const SWIPER_SETTINGS = {
  loop: true,
  keyboard: true,
  centeredSlides: false,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  modules: [Autoplay, Keyboard, FreeMode],
  breakpoints: {
    [SCREEN_BREAKPOINTS.DEFAULT]: {
      slidesPerView: 1,
    },
    [SCREEN_BREAKPOINTS.LG]: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
};
