import React, { FC, SVGProps } from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "src/components/Link";
import { getPathName } from "src/utils/getPathName";
import { HOMEPAGE_NAME, PATHNAMES } from "src/constants/routes";

const ICON_SIZE = 24;

const T_PREFIX = "menu-item";

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
        "md:ml-8 first:ml-0 transition ease-in-out duration-200 hover:scale-110",
        {
          "text-red-primary": isActiveLink,
        }
      )}
    >
      <li
        className="flex items-center flex-col md:flex-row capitalize text-sm xs:text-base font-medium leading-7"
        onClick={onCloseMenu}
      >
        {Icon && (
          <Icon
            width={ICON_SIZE}
            height={ICON_SIZE}
            className={cn("md:mr-1.5", {
              "fill-g-red-primary": isActiveLink,
            })}
          />
        )}
        <span>{t(`${T_PREFIX} - ${name}`)}</span>
      </li>
    </Link>
  );
};

export default MenuItem;
