import React, { FC, useMemo, memo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { HOMEPAGE_NAME, PATHNAMES } from "src/constants/routes";
import { getPathName } from "src/utils/getPathName";
import { BreadCrumbsItem } from "./BreadCrumbsItem";
import { BREAD_CRUMBS_ICONS } from "./constants";

const T_PREFIX = "bread-crumbs";

interface Props {
  isShownSecondaryPage?: boolean;
  tertiaryPageName?: string;
}

export const BreadCrumbs: FC<Props> = memo(
  ({ isShownSecondaryPage = true, tertiaryPageName }) => {
    const { t } = useTranslation();

    const { pathname } = useLocation();

    const routes = pathname.split("/");
    const secondaryPageName = routes[1];
    const isActiveSecondaryPage = routes.length < 3;

    const breadCrumbsItems = useMemo(
      () => [
        {
          pageName: t(`${T_PREFIX} - ${HOMEPAGE_NAME}`),
          path: PATHNAMES.HOME,
          icon: BREAD_CRUMBS_ICONS[HOMEPAGE_NAME],
          isShown: true,
          isReversed: !isShownSecondaryPage,
        },
        {
          pageName: t(`${T_PREFIX} - ${secondaryPageName}`),
          path: getPathName(secondaryPageName),
          icon: BREAD_CRUMBS_ICONS[secondaryPageName],
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
      <div className="sticky top-10.5 md:top-14.5 bg-white py-1 sm:py-1.5 md:py-2 gl:py-3 px-2.5 sm:px-15 gl:px-40 shadow-light-bottom z-10">
        <ul className="flex items-center gap-y-2 container">
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
