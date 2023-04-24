import React, { FC, ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { DEFAULT_SETTINGS } from "./constants";

interface Props {
  items: ReactElement[];
  customSettings?: Object;
}

//CHANGE - змінити bloig post, відступи лишні удалити ізробити норм відображення без слйдера на грідах
// додати в менюшку хрестик коли відкрита і може анімація неа нього , пофіксити, що розтягувало на всю висоту контейнер
// Спробувати винести анміацію в TailwindCSS
export const SwiperSlider: FC<Props> = ({ items = [], customSettings }) => {
  const settings = customSettings || DEFAULT_SETTINGS;

  return (
    <Swiper {...settings}>
      {items?.map((item) => (
        <SwiperSlide className="!h-auto" key={item.key}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
