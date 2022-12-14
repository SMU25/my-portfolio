import React, { FC } from "react";
import { ISpriteItem } from "./types";

const ICON_SIZE = 30;

export const SpriteItem: FC<Omit<ISpriteItem, "id">> = ({
  name,
  link,
  icon: Icon,
}) => {
  return (
    <li className="ml-9 first:ml-0" title={name}>
      <a href={link}>
        <Icon width={ICON_SIZE} height={ICON_SIZE} />
      </a>
    </li>
  );
};
