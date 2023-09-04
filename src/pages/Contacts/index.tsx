import React, { FC } from "react";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { RenderSections } from "src/components/RenderSections";
import { SECTIONS } from "./constants";

const Contacts: FC = () => (
  <div className="bg-gradient-blue-sky">
    <BreadCrumbs />
    <RenderSections sections={SECTIONS} />
  </div>
);

export default Contacts;
