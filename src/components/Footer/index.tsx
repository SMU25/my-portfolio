import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Sprite } from "src/components/Sprite";
import { SPRITE_ITEMS } from "./constants";

const T_PREFIX = "footer";

const DEV_INFO_TEXT = "dev-info";

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="flex flex-col items-center pt-12.5 pb-31 md:pb-13.5">
        <Sprite items={SPRITE_ITEMS} />
        <p className="mt-6.5 font-e-Ukraine text-center text-sm leading-5">
          {t(`${T_PREFIX} - ${DEV_INFO_TEXT}`)}
        </p>
      </div>
    </footer>
  );
};
