import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import {
  DEFAULT_SECTION_CLASS_NAME,
  DEFAULT_HEADING_CLASS_NAME,
  DEFAULT_ITEMS_COMPONENT_CLASS_NAME,
} from "./constants";

const HEADING = "Portfolio";

const Portfolio: FC = () => (
  <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
    <ContainerHead
      titleClassName={DEFAULT_HEADING_CLASS_NAME}
      title={HEADING}
    />
    <Works className={DEFAULT_ITEMS_COMPONENT_CLASS_NAME} />
  </SectionWrapper>
);

export default Portfolio;
