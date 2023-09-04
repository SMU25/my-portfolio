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
import warning from "src/assets/images/warning.png";
import { DEFAULT_SECTION_CLASSNAME } from "./constants";

const IMG_WARNING_ALT_TEXT = "warning";

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
      <SectionWrapper
        className={cn(
          "flex flex-col items-center text-center",
          DEFAULT_SECTION_CLASSNAME
        )}
      >
        <img
          className="w-16 xs:w-24 sm:w-32 h-16 xs:h-24 sm:h-32 mx-auto"
          src={warning}
          alt={IMG_WARNING_ALT_TEXT}
        />
        <Heading
          className="my-0 sm:my-3 text-red-medium"
          tagHeading={TagsHeading.H2}
        >
          {pageTitle}
        </Heading>
        <Heading
          className="default:text-xl sm:!text-3xl"
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
