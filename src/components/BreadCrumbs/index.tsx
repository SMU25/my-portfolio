import React, { FC, useMemo, memo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { PATHNAMES } from "src/constants/routes";
import { getPathName } from "src/utils/getPathName";
import { BreadCrumbsItem } from "./BreadCrumbsItem";

const T_PREFIX = "bread-crumbs";
const HOMEPAGE_NAME = "home";

interface Props {
  isShownSecondaryPage?: boolean;
  tertiaryPageName?: string;
}

export const BreadCrumbs: FC<Props> = memo(
  ({ isShownSecondaryPage = true, tertiaryPageName }) => {
    const { t } = useTranslation();

    const { pathname } = useLocation();

    const pathnames = pathname.split("/");
    const secondaryPageName = pathnames[1];
    const isActiveSecondaryPage = pathnames.length < 3;

    const breadCrumbsItems = useMemo(
      () => [
        {
          pageName: t(`${T_PREFIX} - ${HOMEPAGE_NAME}`),
          path: PATHNAMES.HOME,
          isShown: true,
          isReversed: !isShownSecondaryPage,
        },
        {
          pageName: t(`${T_PREFIX} - ${secondaryPageName}`),
          path: getPathName(secondaryPageName),
          isDisabled: isActiveSecondaryPage,
          isShown: isShownSecondaryPage,
        },
        {
          pageName: tertiaryPageName,
          isDisabled: true,
          isShown: Boolean(tertiaryPageName),
        },
      ],
      [
        t,
        isActiveSecondaryPage,
        isShownSecondaryPage,
        secondaryPageName,
        tertiaryPageName,
      ]
    );

    return (
      <div className="py-3 px-2.5 sm:px-15 gl:px-40 z-10 ">
        <ul className="flex items-center flex-wrap max-w-88.5 sm:max-w-150 md:max-w-195 lg:max-w-214 xl:max-w-323.5 w-full mx-auto">
          {breadCrumbsItems.map(
            ({ pageName, path, isShown, ...props }, index) =>
              isShown && (
                <BreadCrumbsItem
                  key={`${path}-${index}`}
                  path={path}
                  {...props}
                >
                  {pageName}
                </BreadCrumbsItem>
              )
          )}
        </ul>
      </div>
    );
  }
);
