import { Check, Copy, ExternalLink, Mail, Phone, Send, Terminal } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, id: string, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const contactItems = [
    {
      id: "phone",
      label: t("contact.phone"),
      value: "09135377502",
      href: "tel:+989135377502",
      icon: <Phone className="w-5 h-5" />,
      copyable: true,
    },
    {
      id: "email",
      label: t("contact.email"),
      value: "mohammadmehdi1382mhd@gmail.com",
      href: "mailto:mohammadmehdi1382mhd@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      copyable: true,
    },
    {
      id: "telegram",
      label: t("contact.telegram"),
      value: "@ICT_user",
      href: "https://t.me/ICT_user",
      icon: <Send className="w-5 h-5" />,
      copyable: false,
    },
    {
      id: "github",
      label: t("contact.github"),
      value: "mohamadMehdiDabestani",
      href: "https://github.com/mohamadMehdiDabestani",
      icon: <Terminal className="w-5 h-5" />,
      copyable: false,
    },
  ];

  return (
    <section
      id="contact"
      className="py-section-lg bg-surface-container-low/70 border-t border-outline-variant w-full"
    >
      <div className="max-w-[1160px] mx-auto px-gutter-sm md:px-gutter-lg">
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-primary text-small font-semibold">
              <Mail className="w-4 h-4" />
              <span>{t("contact.badge")}</span>
            </div>
            <h2 className="text-h2-mobile md:text-h2 text-on-background">
              {t("contact.title")}
            </h2>
            <p className="text-body-sm md:text-body text-on-surface-variant max-w-2xl">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group relative border border-outline-variant p-5 rounded-2xl bg-surface hover:border-primary/60 hover:shadow-[0_8px_25px_rgba(122,162,247,0.1)] transition-all flex flex-col justify-between gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-primary">
                    <div className="p-2 rounded-xl bg-accent-soft border border-primary/20">
                      {item.icon}
                    </div>
                    <span className="text-base font-bold text-on-background">
                      {item.label}
                    </span>
                  </div>

                  {item.copyable ? (
                    <button
                      onClick={(e) => handleCopy(e, item.id, item.value)}
                      className="p-1.5 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface-variant hover:text-primary hover:border-primary transition-colors cursor-pointer"
                      title="Copy"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  ) : (
                    <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                  )}
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-sm font-mono text-on-surface-variant group-hover:text-on-background transition-colors break-all"
                    dir="ltr"
                  >
                    {item.value}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
