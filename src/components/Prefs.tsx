import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../i18n";
import { Icon } from "./Icon";

export function LanguageSelect() {
  const { t, i18n } = useTranslation();
  return (
    <label className="flex items-center gap-1">
      <Icon name="globe" className="hidden size-4 opacity-70 sm:block" />
      <select
        className="select select-ghost select-sm w-auto"
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        aria-label={t("nav.language")}
      >
        {languages.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function ThemeToggle() {
  const { t } = useTranslation();
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const explicit = document.documentElement.dataset.theme;
    setDark(explicit ? explicit === "dark" : matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setDark(!dark);
  };
  return (
    <button className="btn btn-ghost btn-sm btn-square" onClick={toggle} aria-label={t("nav.theme")}>
      <motion.span key={String(dark)} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}>
        <Icon name={dark ? "moon" : "sun"} className="size-4" />
      </motion.span>
    </button>
  );
}
