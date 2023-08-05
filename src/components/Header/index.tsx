import React, { FC } from "react";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { LANGUAGES } from "src/constants/languages";
import { PATHNAMES } from "src/constants/routes";
import { MENU_ITEMS } from "./constants";
import { LanguageChooser } from "../LanguageChooser";
import { Menu } from "../Menu";

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
        <Menu menuItems={MENU_ITEMS} />
      </nav>
    </header>
  );
};
