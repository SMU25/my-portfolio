import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

interface Props {
  name: string;
}

const getMenuPathname = (path: string) => `/${path}`;

const MenuItem: FC<Props> = ({ name }) => {
  const { pathname } = useLocation();

  return (
    <Link
      className={cn("ml-8 first:ml-0", {
        "text-red-light": pathname.includes(name),
      })}
      to={getMenuPathname(name)}
    >
      <li className="capitalize text-sm font-medium leading-7">{name}</li>
    </Link>
  );
};

export default MenuItem;
