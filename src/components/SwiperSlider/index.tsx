import React, {
  FC,
  ReactElement,
  useState,
  useCallback,
  useEffect,
} from "react";
import cn from "classnames";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import SwiperCore from "swiper";
import SwiperClass from "swiper/types/swiper-class";
import "swiper/css";
import "swiper/css/pagination";
import { KeyboardInfoPopUp } from "./KeyboardInfoPopUp";
import { DEFAULT_SETTINGS } from "./constants";
import { setActiveIndex } from "./types";
import { NavigationButton } from "../Button/NavigationButton";

const COOKIES_KEY_KEYBOARD_POPUP = "IS_SHOWN_KEYBOARD_INFO_SLIDER_POPUP";

const DEFAULT_NAVIGATION_BUTTON_CLASSNAME = "absolute top-1/2 -translate-y-1/2";

export interface CustomSwiperProps extends SwiperProps {
  items: ReactElement[];
  className?: string;
  containerClassName?: string;
  slideClassName?: string;
  customSettings?: SwiperProps;
  isShownNavigationButtons?: boolean;
  isShownKeyboardInfoPopup?: boolean;
  swiperState?: SwiperClass;
  setActiveSlideIndex?: setActiveIndex;
  handleSlideChange?: VoidFunction;
}

//CHANGE - змінити bloig post, відступи лишні удалити ізробити норм відображення без слйдера на грідах
// додати в менюшку хрестик коли відкрита і може анімація неа нього , пофіксити, що розтягувало на всю висоту контейнер
// Спробувати винести анміацію в TailwindCSS
export const SwiperSlider: FC<CustomSwiperProps> = ({
  items = [],
  className,
  containerClassName,
  slideClassName,
  customSettings,
  isShownNavigationButtons,
  isShownKeyboardInfoPopup,
  swiperState,
  setActiveSlideIndex,
  handleSlideChange,
  ...props
}) => {
  const [swiper, setSwiper] = useState<SwiperCore>(null);

  const settings = customSettings || DEFAULT_SETTINGS;

  const slidePrev = useCallback(() => swiper?.slidePrev(), [swiper]);
  const slideNext = useCallback(() => swiper?.slideNext(), [swiper]);

  const onSlideChange = useCallback(() => {
    if (setActiveSlideIndex && swiper) {
      setActiveSlideIndex(swiper.activeIndex);
    }

    if (handleSlideChange) {
      handleSlideChange();
    }
  }, [swiper, setActiveSlideIndex, handleSlideChange]);

  useEffect(() => {
    if (swiperState) {
      setSwiper(swiperState);
    }
  }, [swiperState]);

  if (!items?.length) return null;

  return (
    <div className={cn("relative", containerClassName)}>
      <Swiper
        className={className}
        onSwiper={(swiper) => {
          if (swiper && !swiperState) {
            setSwiper(swiper);
          }
        }}
        onSlideChange={onSlideChange}
        {...settings}
        {...props}
      >
        {items.map((item) => (
          <SwiperSlide
            className={cn("!h-initial", slideClassName)}
            key={item.key}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
      {isShownNavigationButtons && (
        <>
          <NavigationButton
            className={cn(
              "rotate-180 -left-1 xs:-left-4 sm:-left-10",
              DEFAULT_NAVIGATION_BUTTON_CLASSNAME
            )}
            onClick={slidePrev}
            isDisabled={swiper?.isBeginning}
          />
          <NavigationButton
            className={cn(
              "-right-1 xs:-right-4 sm:-right-10",
              DEFAULT_NAVIGATION_BUTTON_CLASSNAME
            )}
            onClick={slideNext}
            isDisabled={swiper?.isEnd}
          />
        </>
      )}
      <KeyboardInfoPopUp
        className="!top-20"
        isShown={isShownKeyboardInfoPopup}
        cookiesKeyPopUp={COOKIES_KEY_KEYBOARD_POPUP}
      />
    </div>
  );
};
