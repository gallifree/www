import "../src/style.css";
import "../src/i18n";

import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../src/components/Icon";
import { LanguageSelect, ThemeToggle } from "../src/components/Prefs";
import { detectLanguage } from "../src/i18n";

import { GITHUB, YOUTUBE } from "../src/site";

export default function Layout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  useEffect(detectLanguage, []);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="navbar bg-base-100/80 border-base-200 sticky top-0 z-30 border-b px-4 backdrop-blur sm:px-6">
        <a href="/" className="flex flex-1 items-center gap-2 text-lg font-bold">
          <img src="/logo.svg" alt="" className="size-8" />
          Gallifree
        </a>
        <nav className="flex items-center gap-1">
          <a href="/#projects" className="btn btn-ghost btn-sm hidden sm:inline-flex">
            {t("nav.projects")}
          </a>
          <LanguageSelect />
          <ThemeToggle />
          <a href={GITHUB} className="btn btn-ghost btn-sm btn-square" aria-label="GitHub">
            <Icon name="github" className="size-4" />
          </a>
          <a href={YOUTUBE} className="btn btn-ghost btn-sm btn-square" aria-label="YouTube">
            <Icon name="youtube" className="size-4" />
          </a>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-base-200 text-base-content/60 border-t px-4 py-8 text-center text-sm">
        {t("footer.copy", { year: new Date().getFullYear() })} ·{" "}
        <a href={GITHUB} className="link link-hover">
          {t("footer.github")}
        </a>{" "}
        ·{" "}
        <a href={YOUTUBE} className="link link-hover">
          YouTube
        </a>
      </footer>
    </div>
  );
}
