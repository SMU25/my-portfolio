import React, { FC, ReactElement, useCallback, useRef } from "react";
import cn from "classnames";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper/types/swiper-class";
import "swiper/css";
import "swiper/css/pagination";
import { DEFAULT_SETTINGS } from "./constants";
import { setActiveIndex } from "./types";
import { NavigationButton } from "../Button/NavigationButton";

const DEFAULT_CLASSNAME_NAVIGATION_BUTTON = "absolute top-1/2 -translate-y-1/2";

export interface CustomSwiperProps extends SwiperProps {
  items: ReactElement[];
  className?: string;
  containerClassName?: string;
  slideClassName?: string;
  customSettings?: SwiperProps;
  isShownNavigationButtons?: boolean;
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
  swiperState,
  setActiveSlideIndex,
  handleSlideChange,
  ...props
}) => {
  const swiperRef = useRef<SwiperClass>(null);

  const swiperObj = swiperState || swiperRef.current;

  const slidePrev = useCallback(() => swiperObj?.slidePrev(), [swiperObj]);

  const slideNext = useCallback(() => swiperObj?.slideNext(), [swiperObj]);

  const settings = customSettings || DEFAULT_SETTINGS;

  const onSlideChange = useCallback(() => {
    if (setActiveSlideIndex && swiperObj) {
      setActiveSlideIndex(swiperObj.activeIndex);
    }

    if (handleSlideChange) {
      handleSlideChange();
    }
  }, [swiperObj, setActiveSlideIndex, handleSlideChange]);

  return (
    <div className={cn("relative", containerClassName)}>
      <Swiper
        className={className}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={onSlideChange}
        {...settings}
        {...props}
      >
        {items?.map((item) => (
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
              DEFAULT_CLASSNAME_NAVIGATION_BUTTON
            )}
            onClick={slidePrev}
            isDisabled={swiperObj?.isBeginning}
          />
          <NavigationButton
            className={cn(
              "-right-1 xs:-right-4 sm:-right-10",
              DEFAULT_CLASSNAME_NAVIGATION_BUTTON
            )}
            onClick={slideNext}
            isDisabled={swiperObj?.isEnd}
          />
        </>
      )}
    </div>
  );
};
