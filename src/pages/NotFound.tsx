import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { usePageTitle } from "src/hooks/usePageTitle";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { PATHNAMES } from "src/constants/routes";
import { DEFAULT_SECTION_CLASSNAME } from "./constants";

const T_PREFIX = "not-found";

const HEADING = "title";
const SUBHEADING = "subtitle";

const NotFound: FC = () => {
  const { t } = useTranslation();

  const pageTitle = t(`${T_PREFIX} - ${HEADING}`);

  const { pathname } = useLocation();
  const notFoundPageName =
    pathname === PATHNAMES.NOT_FOUND ? "" : `"${pathname.slice(1)}"`;

  // CHANGE Вирішити проблему із ти, що я не можу прокинути в useTranslation html

  usePageTitle(
    `${pageTitle} - ${t(`${T_PREFIX} - ${SUBHEADING}`, {
      page: notFoundPageName,
    })}`
  );

  return (
    <>
      <BreadCrumbs isShownSecondaryPage={false} />
      <SectionWrapper className={cn("text-center", DEFAULT_SECTION_CLASSNAME)}>
        <Heading className="text-red-dark" tagHeading={TagsHeading.H2}>
          {pageTitle}
        </Heading>
        <Heading
          className="mt-4 sm:mt-8 default:text-xl sm:!text-4xl"
          tagHeading={TagsHeading.H3}
        >
          {t(`${T_PREFIX} - ${SUBHEADING}`, {
            // page: () => <span className="test">{notFoundPageName}</span>,
            page: notFoundPageName,
          })}
        </Heading>
      </SectionWrapper>
    </>
  );
};

export default NotFound;
