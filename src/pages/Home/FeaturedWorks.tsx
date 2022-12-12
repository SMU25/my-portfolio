import React from "react";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { Works } from "src/components/Works";
import { PATHNAMES } from "src/constants/routes";

const HEADING = "Featured works";

export const FeaturedWorks = () => {
  return (
    <div>
      <ContainerHead title={HEADING} href={PATHNAMES.PORTFOLIO} />
      <Works />
    </div>
  );
};
