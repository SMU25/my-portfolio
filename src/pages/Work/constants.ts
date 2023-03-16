import { Autoplay, Keyboard, FreeMode, Thumbs } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export const SLIDER_SETTINGS = {
  loop: true,
  keyboard: true,
  centeredSlides: false,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  modules: [Autoplay, Keyboard, FreeMode, Thumbs],
};
