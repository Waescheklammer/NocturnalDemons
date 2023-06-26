import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { deCommon } from "./translation/de/common";
import { enCommon } from "./translation/en/common";
import { czCommon } from "./translation/cz/common";
import { plCommon } from "./translation/pl/common";

// @ts-ignore
i18n.use(initReactI18next).init({
  fallbackNS: ["global", "common"],
  debug: false,

  interpolation: {
    escapeValue: false,
  },

  resources: {
    de: deCommon,
    en: enCommon,
    cz: czCommon,
    pl: plCommon,
  },
  detection: {
    order: ["localStorage"],
  },
  lng: localStorage.getItem("lng") || "de",
});

export default i18n;
