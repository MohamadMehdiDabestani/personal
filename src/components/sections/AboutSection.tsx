import { Button } from "@/src/components/ui/button";
import { CheckCircle2, UserCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-section-lg flex flex-col gap-section-sm">
      <div className="flex items-center gap-base text-on-background">
        <UserCircle2 className="w-8 h-8 text-primary" />
        <h2 className="text-h2-mobile md:text-h2">{t("about.title")}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
        <div className="lg:col-span-7 flex flex-col gap-gutter-md">
          <p className="text-body text-on-surface-variant leading-relaxed">
            {t("about.intro")}
          </p>

          <ul className="flex flex-col gap-3 mt-2">
            {(t("about.bullets", { returnObjects: true }) as string[]).map(
              (bullet: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-body-sm text-on-background">
                    {bullet}
                  </span>
                </li>
              ),
            )}
          </ul>

          <div className="flex flex-col sm:flex-row gap-base mt-2">
            <a href="#contact">
              <Button size="default">
                {t("about.ctaSecondary")}
              </Button>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-surface border border-outline-variant rounded-xl p-gutter-md flex flex-col gap-4">
          <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant">
            <span className="text-small text-on-surface-variant">
              {t("about.quickFacts.experienceLabel")}
            </span>
            <span className="text-body-sm font-medium text-on-background">
              {t("about.quickFacts.experienceValue")}
            </span>
          </div>

          <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant">
            <span className="text-small text-on-surface-variant">
              {t("about.quickFacts.roleLabel")}
            </span>
            <span className="text-body-sm font-medium text-on-background">
              {t("about.quickFacts.roleValue")}
            </span>
          </div>

          <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant">
            <span className="text-small text-on-surface-variant">
              {t("about.quickFacts.modeLabel")}
            </span>
            <span className="text-body-sm font-medium text-on-background">
              {t("about.quickFacts.modeValue")}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-small text-on-surface-variant">
              {t("about.quickFacts.stackLabel")}
            </span>
            <span
              className="text-body-sm font-medium text-on-background"
              dir="ltr"
            >
              {t("about.quickFacts.stackValue")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
