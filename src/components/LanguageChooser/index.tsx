import React, { FC } from "react";
import { ILanguage } from "src/types/i18next";
import { Language } from "./Language";

interface Props {
  languages: ILanguage[];
}

export const LanguageChooser: FC<Props> = ({ languages }) => (
  <ul className="flex items-center">
    {languages.map((language) => (
      <Language key={language.key} language={language} />
    ))}
  </ul>
);
