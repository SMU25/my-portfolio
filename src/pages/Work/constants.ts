import { Autoplay, Keyboard, FreeMode } from "swiper";
import { SwiperProps } from "swiper/react";
import { SCREEN_BREAKPOINTS } from "src/constants/screenBreakpoints";

export const SWIPER_SETTINGS: SwiperProps = {
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

// export const GALLERY_MAIN_SWIPER_SETTINGS: SwiperProps = {
//   spaceBetween: 16,
//   slidesPerView: 1,
//   modules: [Thumbs],
// };

// export const GALLERY_MINI_SWIPER_SETTINGS: SwiperProps = {
//   spaceBetween: 8,
//   slidesPerView: 5,
//   slideToClickedSlide: true,
// };
