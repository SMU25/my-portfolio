import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { ILanguage } from "src/types/i18next";

interface Props {
  language: ILanguage;
}

export const Language: FC<Props> = ({ language }) => {
  const { i18n } = useTranslation();

  const isCurrentLanguage = language.key === i18n.language;

  const chooseLanguage = () => {
    if (!isCurrentLanguage) {
      i18n.changeLanguage(language.key);
    }
  };

  return (
    <li
      className={cn("font-e-Ukraine rounded transition-all", {
        "bg-blue-lighter": isCurrentLanguage,
        "cursor-pointer": !isCurrentLanguage,
      })}
      onClick={chooseLanguage}
    >
      <span
        className={cn(
          "h-fit px-3 uppercase text-gray-light font-bold transition-all",
          {
            "!text-blue-light hover:brightness-50": !isCurrentLanguage,
          }
        )}
      >
        {language.title || language.key}
      </span>
    </li>
  );
};
