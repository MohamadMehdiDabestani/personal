// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import faTranslations from "./locales/fa.json";

export const defaultNS = "translation";

export const resources = {
  en: { translation: enTranslations },
  fa: { translation: faTranslations },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
