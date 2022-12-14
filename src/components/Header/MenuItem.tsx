import React, { FC } from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";
import { PATHNAMES } from "src/constants/routes";

const HOMEPAGE_NAME = "home";

const getMenuPathname = (path: string) => `/${path}`;

interface Props {
  name: string;
}

const MenuItem: FC<Props> = ({ name }) => {
  const { pathname } = useLocation();

  const path = name === HOMEPAGE_NAME ? PATHNAMES.HOME : getMenuPathname(name);

  const isActiveLink = pathname === path;

  return (
    <Link
      className={cn(
        "sm:ml-8 py-3 sm:py-0 px-2.5 sm:px-0 first:ml-0 transition ease-in-out duration-150 hover:scale-110",
        {
          "text-red-primary": isActiveLink,
        }
      )}
      to={path}
    >
      <li className="capitalize text-center sm:text-left text-3xl sm:text-sm font-medium leading-10 sm:leading-7">
        {name}
      </li>
    </Link>
  );
};

export default MenuItem;
