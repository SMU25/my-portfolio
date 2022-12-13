import React, { useState } from "react";
import cn from "classnames";
import { MENU_ITEMS } from "./constants";
import MenuItem from "./MenuItem";
import { BurgetButton } from "src/components/Button/BurgetButton";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  //CHANGE - fix animation and burger button bg color  and hover border radius

  return (
    <header>
      <nav className="flex justify-end sm:mr-15">
        <BurgetButton
          className="sm:hidden my-5 mx-4.5"
          setIsOpen={setIsOpenMenu}
        />
        <ul
          className={cn(
            "absolute sm:static top-10 -translate-y-full sm:translate-y-0 flex-col items-center sm:flex-row flex w-full sm:w-auto h-screen-1/2 sm:h-auto py-7 invisible sm:visible transition ease-in-out duration-200",
            {
              "top-20 translate-y-0 bg-white !visible": isOpenMenu,
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
