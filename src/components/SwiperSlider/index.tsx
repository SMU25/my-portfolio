import React, { FC, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { DEFAULT_SETTINGS } from "./constants";

interface Props {
  items: ReactElement[];
  settings?: Object;
}

//CHANGE - змінити bloig post, відступи лишні удалити ізробити норм відображення без слйдера на грідах
// додати в менюшку хрестик коли відкрита і може анімація неа нього
export const SwiperSlider: FC<Props> = ({ items = [], settings }) => (
  <Swiper {...DEFAULT_SETTINGS} {...settings}>
    {items.map((item) => (
      <SwiperSlide key={item.key}>{item}</SwiperSlide>
    ))}
  </Swiper>
);
