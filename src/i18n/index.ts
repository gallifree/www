import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./de.json";
import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";
import pt from "./pt.json";
import zh from "./zh.json";

export const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "zh", label: "中文" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "de", label: "Deutsch" },
] as const;

// Always start in English so the prerendered HTML hydrates cleanly;
// the visitor's language is applied right after hydration (see detectLanguage).
i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, fr: { translation: fr }, zh: { translation: zh }, es: { translation: es }, pt: { translation: pt }, de: { translation: de } },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  try {
    localStorage.setItem("lang", lng);
  } catch {}
});

export function detectLanguage() {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem("lang");
  } catch {}
  const wanted = [saved, ...navigator.languages].filter(Boolean).map((l) => l!.slice(0, 2).toLowerCase());
  const lng = wanted.find((l) => languages.some((x) => x.code === l));
  if (lng && lng !== i18n.language) i18n.changeLanguage(lng);
}

export default i18n;
