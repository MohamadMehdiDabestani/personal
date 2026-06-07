import { Phone, Mail, Send, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="py-section-lg bg-surface-container-low w-full"
    >
      <div className="max-w-[1120px] mx-auto px-gutter-sm md:px-gutter-lg">
        <div className="flex flex-col gap-section-sm">
          <div className="space-y-base">
            <h2 className="text-h2-mobile md:text-h2 text-on-background">
              {t("contact.title")}
            </h2>
            <p className="text-body text-on-surface-variant max-w-2xl">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-md">
            <a
              href="tel:+989135377502"
              className="group border border-outline-variant p-gutter-md rounded-xl bg-surface hover:border-primary hover:shadow-[0_4px_20px_rgba(79,140,255,0.08)] transition-all flex flex-col gap-base"
            >
              <div className="flex items-center gap-base mb-2 text-primary">
                <Phone className="w-6 h-6" />
                <span className="text-h3 font-semibold">
                  {t("contact.phone")}
                </span>
              </div>
              <span
                className="text-body-sm text-on-surface-variant group-hover:text-on-background transition-colors"
                dir="ltr"
              >
                09135377502
              </span>
            </a>

            <a
              href="mailto:mohammadmehdi1382mhd@gmail.com"
              className="group border border-outline-variant p-gutter-md rounded-xl bg-surface hover:border-primary hover:shadow-[0_4px_20px_rgba(79,140,255,0.08)] transition-all flex flex-col gap-base"
            >
              <div className="flex items-center gap-base mb-2 text-primary">
                <Mail className="w-6 h-6" />
                <span className="text-h3 font-semibold">
                  {t("contact.email")}
                </span>
              </div>
              <span
                className="text-sm text-on-surface-variant group-hover:text-on-background transition-colors break-all md:break-words"
                dir="ltr"
              >
                 mohammadmehdi1382mhd@gmail.com
              </span>
            </a>

            <a
              href="https://t.me/ICT_user"
              target="_blank"
              className="group border border-outline-variant p-gutter-md rounded-xl bg-surface hover:border-primary hover:shadow-[0_4px_20px_rgba(79,140,255,0.08)] transition-all flex flex-col gap-base"
            >
              <div className="flex items-center gap-base mb-2 text-primary">
                <Send className="w-6 h-6" />
                <span className="text-h3 font-semibold">
                  {t("contact.telegram")}
                </span>
              </div>
              <span
                className="text-body-sm text-on-surface-variant group-hover:text-on-background transition-colors"
                dir="ltr"
              >
                @ICT_user
              </span>
            </a>

            <a
              href="https://github.com/mohamadMehdiDabestani"
              target="_blank"
              className="group border border-outline-variant p-gutter-md rounded-xl bg-surface hover:border-primary hover:shadow-[0_4px_20px_rgba(79,140,255,0.08)] transition-all flex flex-col gap-base"
            >
              <div className="flex items-center gap-base mb-2 text-primary">
                <Terminal className="w-6 h-6" />
                <span className="text-h3 font-semibold">
                  {t("contact.github")}
                </span>
              </div>
              <span
                className="text-body-sm text-on-surface-variant group-hover:text-on-background transition-colors"
                dir="ltr"
              >
                mohamadMehdiDabestani
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
