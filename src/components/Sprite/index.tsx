import React, { FC } from "react";
import { SpriteItem } from "./SpriteItem";
import { ISpriteItem } from "./types";

interface Props {
  items: ISpriteItem[];
}

export const Sprite: FC<Props> = ({ items }) => (
  <ul className="flex">
    {items.map(({ id, ...item }) => (
      <SpriteItem key={id} {...item} />
    ))}
  </ul>
);
