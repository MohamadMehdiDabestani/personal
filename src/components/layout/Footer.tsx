import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-8 border-t border-outline-variant bg-background mt-auto">
      <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row justify-between items-center px-gutter-sm md:px-gutter-lg gap-4">
        <div className="text-small text-on-surface-variant text-center md:text-start">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </div>

        <div className="flex items-center gap-6" dir="ltr">
          <a
            className="text-small text-on-surface-variant hover:text-primary transition-colors"
            href="https://github.com/mohamadMehdiDabestani"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-small text-on-surface-variant hover:text-primary transition-colors"
            href="https://t.me/ICT_user"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a
            className="text-small text-on-surface-variant hover:text-primary transition-colors"
            href="mailto:mohammadmehdi1382mhd@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
