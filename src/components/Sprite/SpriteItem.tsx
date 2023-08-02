import React, { FC } from "react";
import { ISpriteItem } from "./types";

const ICON_SIZE = 30;

export const SpriteItem: FC<Omit<ISpriteItem, "id">> = ({
  name,
  link,
  icon: Icon,
}) => (
  <li
    className="ml-9 first:ml-0 transition-all duration-300 hover:scale-125"
    title={name}
  >
    <a href={link} target="_blank" rel="noreferrer">
      <Icon width={ICON_SIZE} height={ICON_SIZE} />
    </a>
  </li>
);
