import React, { FC } from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { LANGUAGES } from "src/constants/languages";
import { PATHNAMES } from "src/constants/routes";
import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "./constants";

import { LanguageChooser } from "../LanguageChooser";

export const Header: FC = () => {
  const { pathname } = useLocation();

  const isHomePage = pathname === PATHNAMES.HOME;

  // Header зникає на футері в сторінках де багато елементів (Blog, home etc. )
  return (
    <header
      className={cn("sticky top-0 bg-white py-2 md:py-0 z-50", {
        "shadow-light-bottom": isHomePage,
      })}
    >
      <nav className="flex justify-between mx-3 sm:mx-15">
        <LanguageChooser languages={LANGUAGES} />
        <ul
          className={cn(
            "fixed left-0 -bottom-1 md:static flex justify-around sm:justify-center items-end md:items-center gap-x-4.5 sm:gap-x-20 md:gap-x-0 w-full md:w-auto bg-white md:bg-transparent pt-3 md:pt-4 pb-2.5 md:pb-4 px-5 xs:px-10 sm:px-0 shadow-light-top md:shadow-none"
          )}
        >
          {MENU_ITEMS.map(({ id, ...item }) => (
            <MenuItem key={id} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
