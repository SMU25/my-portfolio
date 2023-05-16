import React, { FC } from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "src/components/Link";
import { getPathName } from "src/utils/getPathName";
import { PATHNAMES } from "src/constants/routes";

const T_PREFIX = "menu-item";

const HOMEPAGE_NAME = "home";

interface Props {
  name: string;
  onCloseMenu: VoidFunction;
}

const MenuItem: FC<Props> = ({ name, onCloseMenu }) => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const isHomePage = name === HOMEPAGE_NAME;

  const path = isHomePage ? PATHNAMES.HOME : getPathName(name);

  const isActiveLink = isHomePage ? pathname === path : pathname.includes(path);

  return (
    <Link
      href={path}
      className={cn(
        "sm:ml-8 first:ml-0 transition ease-in-out duration-150 hover:scale-110",
        {
          "text-red-primary": isActiveLink,
        }
      )}
    >
      <li
        className="py-3 sm:py-0 px-2.5 sm:px-0 capitalize text-center sm:text-left text-3xl sm:text-sm font-medium leading-10 sm:leading-7"
        onClick={onCloseMenu}
      >
        {t(`${T_PREFIX} - ${name}`)}
      </li>
    </Link>
  );
};

export default MenuItem;
