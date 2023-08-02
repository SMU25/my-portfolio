import React, { FC, ReactNode, SVGProps } from "react";
import cn from "classnames";
import { ReactComponent as Chevron } from "src/assets/chevron-right.svg";
import { Link } from "../Link";

const ICON_CLASSNAME = "min-w-4 w-4 sm:w-4.5 md:w-5 h-4 sm:h-4.5 md:h-5";

interface Props {
  children: ReactNode;
  path?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  isDisabled?: boolean;
  isReversed?: boolean;
}

export const BreadCrumbsItem: FC<Props> = ({
  children,
  path,
  icon: Icon,
  isDisabled,
  isReversed,
}) => {
  const icon = Icon && (
    <Icon
      className={cn("mr-1.5 sm:mr-2", ICON_CLASSNAME, {
        "fill-g-blue-light": !isDisabled,
        "fill-g-gray-light": isDisabled,
      })}
    />
  );

  return (
    <li
      className={cn(
        "min-w-17 mr-3 last:mr-0 text-sm sm:text-base md:text-lg gl:text-xl truncate",

        { "flex items-center": isDisabled }
      )}
    >
      {isDisabled ? (
        <>
          {icon}
          <span className="text-gray-light truncate">{children}</span>
        </>
      ) : (
        <Link
          className={cn(
            "flex items-center text-blue-light font-medium transition-all hover:brightness-50",
            { "flex-row-reverse": isReversed }
          )}
          href={path}
        >
          <span className="flex items-center truncate">
            {icon}
            <span className="truncate">{children}</span>
          </span>
          <Chevron
            className={cn(
              "mt-px sm:mt-0.5 md:mt-1 ml-0.5 sm:ml-1",
              ICON_CLASSNAME,
              {
                "mr-3 !ml-0 rotate-180": isReversed,
              }
            )}
          />
        </Link>
      )}
    </li>
  );
};
