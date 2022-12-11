import React from "react";
import { MENU_ITEMS } from "./constants";
import MenuItem from "./MenuItem";

export const Header = () => {
  return (
    <header>
      <nav className="flex justify-end items-center max-w-450 mx-auto">
        <ul className="flex py-7">
          {MENU_ITEMS.map(({ id, name }) => (
            <MenuItem key={id} name={name} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
