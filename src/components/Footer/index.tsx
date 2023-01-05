import React, { FC } from "react";
import { Trans } from "react-i18next";
import { Sprite } from "src/components/Sprite";
import { SPRITE_ITEMS } from "./constants";

const T_PREFIX = "footer";

const DEV_INFO_TEXT = "dev-info";

export const Footer: FC = () => (
  <footer>
    <div className="flex flex-col items-center pt-12.5 pb-13.5">
      <Sprite items={SPRITE_ITEMS} />
      <p className="mt-6.5 text-center text-sm leading-5">
        <Trans>{`${T_PREFIX} - ${DEV_INFO_TEXT}`}</Trans>
      </p>
    </div>
  </footer>
);
