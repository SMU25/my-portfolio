import React from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { AboutMySelf } from "./AboutMySelf";

const SECTIONS = [
  {
    id: 1,
    component: AboutMySelf,
    className: "pt-35 pb-17",
  },
  // {
  //   id: 2,
  //   component: ,
  //   className: "",
  // },
  // {
  //   id: 3,
  //   component: ,
  //   className: "",
  // },
];

const Home = () => {
  return (
    <div>
      {SECTIONS.map(({ id, component, className }) => {
        const Component = component;

        return (
          <SectionWrapper className={className}>
            <Component key={id}></Component>
          </SectionWrapper>
        );
      })}
    </div>
  );
};

export default Home;
