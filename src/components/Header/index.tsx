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
    <header className="sticky top-0 bg-white border-gray-lighter-opacity border-b-2 z-50">
      <nav className="flex justify-between mx-3 sm:mx-15">
        <LanguageChooser languages={LANGUAGES} />

        <BurgetButton
          className="sm:hidden my-1 p-2.5"
          setIsOpen={setIsOpenMenu}
        />
        <ul
          className={cn(
            `invisible sm:visible fixed sm:static top-0 left-1/2 translate-y-full sm:translate-y-0 -translate-x-1/2
             sm:translate-x-0 flex flex-col items-center sm:flex-row w-full sm:w-auto h-screen sm:h-auto bg-white 
             py-4 opacity-0 sm:opacity-100 transition-all sm:transition-none ease-in-out duration-300`,
            {
              "!visible !-top-0.5 !translate-y-17.5 opacity-100": isOpenMenu,
            }
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
