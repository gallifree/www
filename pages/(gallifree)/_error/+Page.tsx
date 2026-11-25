import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-32 text-center">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="text-base-content/70 mt-4">{t("error.notFound")}</p>
      <a href="/" className="btn btn-primary mt-8">
        {t("error.home")}
      </a>
    </div>
  );
}
