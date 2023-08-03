import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "src/translate/en-US.json";
import uk from "src/translate/uk-UA.json";

export const defaultLng = "en";

export const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: defaultLng,
    interpolation: {
      escapeValue: false,
    },

    //CHANGE - del on prod.
    debug: true,
  });

export default i18n;

export const activeLanguage = i18n.language;
