import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { ILanguage } from "src/types/language";

export const Language: FC<ILanguage> = ({ language }) => {
  const { i18n } = useTranslation();

  const isCurrentLanguage = language === i18n.language;

  const chooseLanguage = () => {
    if (!isCurrentLanguage) {
      i18n.changeLanguage(language);
    }
  };

  return (
    <li
      className={cn("rounded transition-all", {
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
        {language}
      </span>
    </li>
  );
};
