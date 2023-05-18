import React, { FC } from "react";
import { usePageTitle } from "src/hooks/usePageTitle";
import { RenderSections } from "src/components/RenderSections";
import { SECTIONS } from "./constants";

// CHANGE - виводити щось, коли елементів немає на головній і інших сторінках
// Обновити стрілочки в слайдера
// Додати слайдер для робіт та зробити для ROW типу норм вигляд

const Home: FC = () => {
  usePageTitle();

  return <RenderSections sections={SECTIONS} />;
};

export default Home;
