import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { SECTIONS } from "./constants";

const Home: FC = () => (
  <div>
    {SECTIONS.map(({ id, component, className }) => {
      const Component = component;

      return (
        <SectionWrapper key={id} className={className}>
          <Component />
        </SectionWrapper>
      );
    })}
  </div>
);

export default Home;
