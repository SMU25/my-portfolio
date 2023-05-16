import React, { FC, ReactNode } from "react";
import cn from "classnames";

import { ReactComponent as Chevron } from "src/assets/chevron-right.svg";
import { Link } from "../Link";

const ICON_CHEVRON_SIZE = 20;

interface Props {
  children: ReactNode;
  path?: string;
  isDisabled?: boolean;
  isReversed?: boolean;
}

export const BreadCrumbsItem: FC<Props> = ({
  children,
  path,
  isDisabled,
  isReversed,
}) => (
  <li className={cn("mt-2 mr-3 last:mr-0 text-xl")}>
    {isDisabled ? (
      <span className="text-gray-light">{children}</span>
    ) : (
      <Link
        className={cn(
          "flex items-center text-blue-light font-medium transition-all hover:brightness-50",
          { "flex-row-reverse": isReversed }
        )}
        href={path}
      >
        {children}

        <Chevron
          className={cn("mt-1 ml-1", {
            "mr-3 !ml-0 rotate-180": isReversed,
          })}
          width={ICON_CHEVRON_SIZE}
          height={ICON_CHEVRON_SIZE}
        />
      </Link>
    )}
  </li>
);
