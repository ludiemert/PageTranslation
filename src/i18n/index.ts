import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from "./translations/en.json";
import ptJson from "./translations/pt.json";
import deJson from "./translations/de.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJson,
    de: deJson,
    pt: ptJson,
  },
});

export default i18n;
