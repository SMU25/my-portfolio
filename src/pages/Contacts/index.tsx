import React, { FC } from "react";
import { RenderSections } from "src/components/RenderSections";
import { SECTIONS } from "./constants";

const Contacts: FC = () => <RenderSections sections={SECTIONS} />;

export default Contacts;
