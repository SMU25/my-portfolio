import { Autoplay, Navigation, Keyboard, Pagination } from "swiper";
import { SCREEN_BREAKPOINTS } from "src/constants/screenBreakpoints";

export const DEFAULT_SETTINGS = {
  loop: true,
  keyboard: true,
  navigation: true,
  centeredSlides: false,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  modules: [Autoplay, Navigation, Keyboard, Pagination],
  breakpoints: {
    [SCREEN_BREAKPOINTS.DEFAULT]: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    [SCREEN_BREAKPOINTS.SM]: {
      spaceBetween: 20,
    },
    [SCREEN_BREAKPOINTS.XL]: {
      slidesPerView: 3,
    },
  },
};
