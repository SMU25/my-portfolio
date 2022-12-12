import React, { FC } from "react";
import { Sprite } from "src/components/Sprite";
import { SPRITE_ITEMS } from "./constants";

const INFO_TEXT = "Copyright by Oleksandr Myronchuk ©2022 All rights reserved ";

export const Footer: FC = () => (
  <footer>
    <div className="flex flex-col items-center pt-12.5 pb-13.5">
      <Sprite items={SPRITE_ITEMS} />
      <p className="mt-6.5 text-center text-sm leading-5">{INFO_TEXT}</p>
    </div>
  </footer>
);
