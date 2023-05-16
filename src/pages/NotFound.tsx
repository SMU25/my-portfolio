import React, { FC } from "react";
import { Trans } from "react-i18next";
import { useLocation } from "react-router";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { TagsHeading } from "src/components/Heading/types";
import { DEFAULT_SECTION_CLASS_NAME } from "./constants";
import { Heading } from "src/components/Heading";

const T_PREFIX = "not-found";

const HEADING = "title";
const SUBHEADING = "subtitle";

const NotFound: FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <BreadCrumbs isShownSecondaryPage={false} />
      <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
        <Heading tagHeading={TagsHeading.H2}>
          <Trans>{`${T_PREFIX} - ${HEADING}`}</Trans>
        </Heading>
        <Heading className="mt-5 !text-4xl" tagHeading={TagsHeading.H3}>
          <Trans
            i18nKey={`${T_PREFIX} - ${SUBHEADING}`}
            values={{ page: pathname }}
          />
        </Heading>
      </SectionWrapper>
    </>
  );
};

export default NotFound;
