import React, { FC, ReactNode } from "react";
import cn from "classnames";

import { ReactComponent as Chevron } from "src/assets/chevron-right.svg";
import { Link } from "../Link";

const ICON_CHEVRON_SIZE = 20;

interface Props {
  children: ReactNode;
  path?: string;
  isDisabled?: boolean;
}

export const BreadCrumbsItem: FC<Props> = ({ children, path, isDisabled }) => (
  <li className={cn("ml-3 first:ml-0 text-xl")}>
    {isDisabled ? (
      <span className="text-gray-light">{children}</span>
    ) : (
      <Link
        className="flex items-center text-blue-light font-medium transition-all hover:brightness-75"
        href={path}
      >
        {children}
        <Chevron
          className="mt-1 ml-1"
          width={ICON_CHEVRON_SIZE}
          height={ICON_CHEVRON_SIZE}
        />
      </Link>
    )}
  </li>
);
