import React, { FC } from "react";
import { IContactItem } from "src/types/contacts";
import { SpriteItem } from "./SpriteItem";

interface Props {
  items: IContactItem[];
}

export const Sprite: FC<Props> = ({ items }) => (
  <ul className="flex">
    {items.map(({ id, ...item }) => (
      <SpriteItem key={id} {...item} />
    ))}
  </ul>
);
