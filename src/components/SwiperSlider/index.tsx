import React, { FC, ReactElement, useCallback, useRef } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { DEFAULT_SETTINGS } from "./constants";
import { NavigationButton } from "../Button/NavigationButton";

const DEFAULT_CLASSNAME_NAVIGATION_BUTTON = "absolute top-1/2 -translate-y-1/2";

interface Props {
  items: ReactElement[];
  containerClassName?: string;
  className?: string;
  customSettings?: Object;
}

//CHANGE - змінити bloig post, відступи лишні удалити ізробити норм відображення без слйдера на грідах
// додати в менюшку хрестик коли відкрита і може анімація неа нього , пофіксити, що розтягувало на всю висоту контейнер
// Спробувати винести анміацію в TailwindCSS
export const SwiperSlider: FC<Props> = ({
  items = [],
  containerClassName,
  className,
  customSettings,
}) => {
  const swiperRef = useRef(null);

  const slidePrev = useCallback(
    () => swiperRef.current.slidePrev(),
    [swiperRef]
  );

  const slideNext = useCallback(
    () => swiperRef.current.slideNext(),
    [swiperRef]
  );

  const settings = customSettings || DEFAULT_SETTINGS;

  return (
    <div className={cn("relative", containerClassName)}>
      <Swiper
        className={className}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        {...settings}
      >
        {items?.map((item) => (
          <SwiperSlide className="flex !h-initial" key={item.key}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
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
    </div>
  );
};
