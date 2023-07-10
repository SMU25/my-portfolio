import React, { FC, useState, useCallback } from "react";
import cn from "classnames";
import { BurgetButton } from "src/components/Button/BurgetButton";
import { LANGUAGES } from "src/constants/languages";
import MenuItem from "./MenuItem";
import { MENU_ITEMS } from "./constants";
import { LanguageChooser } from "../LanguageChooser";

export const Header: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const onCloseMenu = useCallback(
    () => setIsOpenMenu(false),

    []
  );

  // CHANGE - BurgetButton зробити хрестик, коли відкрите меню
  // Header зникає на футері в сторінках де багато елементів (Blog, home etc. )
  return (
    <header className="sticky top-0 bg-white py-1 md:py-0 border-gray-lighter-opacity border-b-2 z-50">
      <nav className="flex justify-between mx-3 sm:mx-15">
        <LanguageChooser languages={LANGUAGES} />

        <BurgetButton
          className="sm:hidden my-1 p-2.5"
          setIsOpen={setIsOpenMenu}
        />
        <ul
          className={cn(
            "fixed left-0 bottom-0 md:static flex justify-around sm:justify-center items-end md:items-center gap-x-4.5 sm:gap-x-20 md:gap-x-0 w-full md:w-auto bg-white pt-3 md:pt-4 pb-2.5 md:pb-4 px-5 xs:px-10 sm:px-0 shadow-light-top md:shadow-none"
          )}
        >
          {MENU_ITEMS.map(({ id, ...item }) => (
            <MenuItem key={id} onCloseMenu={onCloseMenu} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
