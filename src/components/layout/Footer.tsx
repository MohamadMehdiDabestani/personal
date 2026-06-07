import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-section-md border-t border-outline-variant bg-background mt-auto">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center px-gutter-sm md:px-gutter-lg gap-base">
        <div className="text-small text-on-surface-variant">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </div>
        <div className="flex items-center gap-gutter-sm">
          <a
            className="text-small text-on-surface-variant hover:text-primary transition-all duration-200"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-small text-on-surface-variant hover:text-primary transition-all duration-200"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-small text-on-surface-variant hover:text-primary transition-all duration-200"
            href="#"
          >
            Twitter
          </a>
        </div>
        <div className="text-h3 text-on-background hidden md:block font-bold">
          {t("nav.portfolio")}
        </div>
      </div>
    </footer>
  );
}
