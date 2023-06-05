import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { deCommon } from "./translation/de/common";
import { enCommon } from "./translation/en/common";

i18n.use(initReactI18next).init({
  fallbackLng: "de",
  fallbackNS: ["global", "common"],
  debug: false,

  interpolation: {
    escapeValue: false,
  },

  resources: {
    de: deCommon,
    en: enCommon,
  },
});

export default i18n;
