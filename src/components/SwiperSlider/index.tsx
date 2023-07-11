import React, { FC, ReactElement, useCallback, useRef } from "react";
import cn from "classnames";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper/types/swiper-class";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { DEFAULT_SETTINGS } from "./constants";
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
  ...props
}) => {
  const swiperRef = useRef(null);

  const swiperObj = swiperState || swiperRef.current;

  const slidePrev = useCallback(() => swiperObj?.slidePrev(), [swiperObj]);

  const slideNext = useCallback(() => swiperObj?.slideNext(), [swiperObj]);

  const settings = customSettings || DEFAULT_SETTINGS;

  return (
    <div className={cn("relative", containerClassName)}>
      <Swiper
        className={className}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
              "rotate-180 -left-2 xs:-left-7 sm:-left-10",
              DEFAULT_CLASSNAME_NAVIGATION_BUTTON
            )}
            onClick={slidePrev}
          />
          <NavigationButton
            className={cn(
              "-right-2 xs:-right-7 sm:-right-10",
              DEFAULT_CLASSNAME_NAVIGATION_BUTTON
            )}
            onClick={slideNext}
          />
        </>
      )}
    </div>
  );
};
