import React, { FC } from "react";
import { usePageTitle } from "src/hooks/usePageTitle";
import { RenderSections } from "src/components/RenderSections";
import { SECTIONS } from "./constants";

// CHANGE - виводити щось, коли елементів немає на головній і інших сторінках

const Home: FC = () => {
  usePageTitle();

  return <RenderSections sections={SECTIONS} />;
};

export default Home;
