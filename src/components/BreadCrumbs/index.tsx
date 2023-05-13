import React, { FC, useMemo, memo } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { PATHNAMES } from "src/constants/routes";
import { getPathName } from "src/utils/getPathName";
import { BreadCrumbsItem } from "./BreadCrumbsItem";

const T_PREFIX = "bread-crumbs";
const HOMEPAGE_NAME = "home";

interface Props {
  tertiaryPageName?: string;
}

export const BreadCrumbs: FC<Props> = memo(({ tertiaryPageName }) => {
  const { i18n } = useTranslation();

  const { pathname } = useLocation();

  const pathnames = pathname.split("/");
  const secondaryPageName = pathnames[1];
  const isActiveSecondaryPage = pathnames.length < 3;

  const breadCrumbsItems = useMemo(
    () => [
      {
        pageName: <Trans>{`${T_PREFIX} - ${HOMEPAGE_NAME}`}</Trans>,
        path: PATHNAMES.HOME,
      },
      {
        pageName: <Trans>{`${T_PREFIX} - ${secondaryPageName}`}</Trans>,
        path: getPathName(secondaryPageName),
        isDisabled: isActiveSecondaryPage,
      },
      {
        pageName: tertiaryPageName,
        isDisabled: true,
      },
    ],

    // i18n.language required for the bread crumbs translation to work without refreshing the page
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language, isActiveSecondaryPage, secondaryPageName, tertiaryPageName]
  );

  return (
    <div className="mt-5 px-2.5 sm:px-15 gl:px-40">
      <ul className="flex items-center max-w-88.5 sm:max-w-150 md:max-w-195 lg:max-w-214 xl:max-w-323.5 w-full mx-auto">
        {breadCrumbsItems.map(({ pageName, path, isDisabled }, index) => (
          <BreadCrumbsItem
            key={`${path}-${index}`}
            path={path}
            isDisabled={isDisabled}
          >
            {pageName}
          </BreadCrumbsItem>
        ))}
      </ul>
    </div>
  );
});
