import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { TagsHeading } from "src/components/Heading/types";
import { DEFAULT_SECTION_CLASS_NAME } from "./constants";
import { Heading } from "src/components/Heading";
import { PATHNAMES } from "src/constants/routes";

const T_PREFIX = "not-found";

const HEADING = "title";
const SUBHEADING = "subtitle";

const NotFound: FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const pageName =
    pathname === PATHNAMES.NOT_FOUND ? "" : `«${pathname.slice(1)}»`;

  return (
    <>
      <BreadCrumbs isShownSecondaryPage={false} />
      <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
        <Heading tagHeading={TagsHeading.H2}>
          {t(`${T_PREFIX} - ${HEADING}`)}
        </Heading>
        <Heading className="mt-5 !text-4xl" tagHeading={TagsHeading.H3}>
          {t(`${T_PREFIX} - ${SUBHEADING}`, { page: pageName })}
        </Heading>
      </SectionWrapper>
    </>
  );
};

export default NotFound;
