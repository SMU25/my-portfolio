import React, { FC } from "react";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { RenderSections } from "src/components/RenderSections";
import { SECTIONS } from "./constants";

const Contacts: FC = () => (
  <>
    <BreadCrumbs />
    <RenderSections sections={SECTIONS} />
  </>
);

export default Contacts;
