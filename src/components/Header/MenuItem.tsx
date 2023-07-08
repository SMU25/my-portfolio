import React, { FC, SVGProps } from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "src/components/Link";
import { getPathName } from "src/utils/getPathName";
import { PATHNAMES } from "src/constants/routes";

const ICON_SIZE = 24;

const T_PREFIX = "menu-item";

const HOMEPAGE_NAME = "home";
// CHANGE - винести в загальну константу ось це або додти в PATHNAMES ім'я та шлях

interface Props {
  name: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  onCloseMenu: VoidFunction;
}

const MenuItem: FC<Props> = ({ name, icon: Icon, onCloseMenu }) => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const routes = pathname.split("/");

  const isHomePage = name === HOMEPAGE_NAME;
  const path = isHomePage ? PATHNAMES.HOME : getPathName(name);

  const isActiveLink =
    isHomePage || routes.length === 2
      ? pathname === path
      : pathname.includes(path);

  return (
    <Link
      href={path}
      className={cn(
        "flex items-center sm:ml-8 first:ml-0 transition ease-in-out duration-200 hover:scale-110",
        {
          "text-red-primary": isActiveLink,
        }
      )}
    >
      {Icon && <Icon width={ICON_SIZE} height={ICON_SIZE} className="mr-1.5" />}
      <li
        className="py-3 sm:py-0 px-2.5 sm:px-0 capitalize text-center sm:text-left text-3xl sm:text-base font-medium leading-10 sm:leading-7"
        onClick={onCloseMenu}
      >
        {t(`${T_PREFIX} - ${name}`)}
      </li>
    </Link>
  );
};

export default MenuItem;
