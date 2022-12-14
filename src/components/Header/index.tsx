import React, { useState } from "react";
import cn from "classnames";
import { MENU_ITEMS } from "./constants";
import MenuItem from "./MenuItem";
import { BurgetButton } from "src/components/Button/BurgetButton";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  return (
    <header className="sticky top-0 bg-white">
      <nav className="flex justify-end mr-4.5 sm:mr-15">
        <BurgetButton
          className="sm:hidden mt-3 mb-2 p-2.5"
          setIsOpen={setIsOpenMenu}
        />
        <ul
          className={cn(
            `invisible sm:visible fixed sm:static top-0 left-1/2 -translate-y-full sm:translate-y-0 -translate-x-1/2
             sm:translate-x-0 flex flex-col items-center sm:flex-row w-full sm:w-auto h-screen-1/2 sm:h-auto bg-white 
             py-7 opacity-0 sm:opacity-100 transition-all sm:transition-none ease-in-out duration-300`,
            {
              "!visible translate-y-17.5 opacity-100": isOpenMenu,
            }
          )}
        >
          {MENU_ITEMS.map(({ id, name }) => (
            <MenuItem key={id} name={name} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
