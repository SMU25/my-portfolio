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
      className="border-r-2 border-r-gray-lighter last:border-r-0"
      onClick={chooseLanguage}
    >
      <span
        className={cn("h-fit px-3 text-gray-light font-bold", {
          "text-blue-light cursor-pointer transition-all hover:brightness-50":
            !isCurrentLanguage,
        })}
      >
        {language}
      </span>
    </li>
  );
};
