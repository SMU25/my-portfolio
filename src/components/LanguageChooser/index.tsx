import React, { FC } from "react";
import { ILanguage } from "src/types/language";
import { Language } from "./Language";

interface Props {
  languages: ILanguage[];
}

export const LanguageChooser: FC<Props> = ({ languages }) => {
  return (
    <ul className="flex items-center">
      {languages.map(({ language }) => (
        <Language key={language} language={language} />
      ))}
    </ul>
  );
};
