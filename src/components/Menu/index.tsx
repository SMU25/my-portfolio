import React, { FC } from "react";
import MenuItem from "./MenuItem";
import { IMenuItem } from "./types";

interface Props {
  menuItems: IMenuItem[];
}

export const Menu: FC<Props> = ({ menuItems }) => (
  <ul className="fixed left-0 bottom-0 md:static flex justify-around sm:justify-center items-end md:items-center gap-x-3.5 sm:gap-x-20 md:gap-x-0 w-full md:w-auto bg-white md:bg-transparent pt-3 md:pt-4 pb-2.5 md:pb-4 px-5 xs:px-10 sm:px-0 shadow-light-top md:shadow-none">
    {menuItems.map(({ id, ...item }) => (
      <MenuItem key={id} {...item} />
    ))}
  </ul>
);
