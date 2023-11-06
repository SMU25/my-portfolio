import React, { FC } from "react";
import { IContactItem } from "src/types/contacts";

const ICON_SIZE = 30;

export const SpriteItem: FC<Omit<IContactItem, "id">> = ({
  title,
  linkLabel,
  link,
  icon: Icon,
  isOpenNewTab,
}) => {
  const popupTitle = `${title}: ${linkLabel}`;
  const target = isOpenNewTab ? "_blank" : "_self";

  return (
    <li
      className="ml-9 first:ml-0 transition-all duration-300 hover:scale-125"
      title={popupTitle}
    >
      <a href={link} target={target} rel="noreferrer">
        <Icon width={ICON_SIZE} height={ICON_SIZE} />
      </a>
    </li>
  );
};
