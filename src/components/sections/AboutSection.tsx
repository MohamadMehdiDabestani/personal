import { Button } from "@/src/components/ui/button";
import { ArrowRight, CheckCircle2, UserCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

interface AboutSectionProps {
  onSelectFeaturedProject?: () => void;
}

export function AboutSection({ onSelectFeaturedProject }: AboutSectionProps) {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-section-lg flex flex-col gap-8">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-primary text-small font-semibold">
          <UserCircle2 className="w-4 h-4" />
          <span>{t("about.badge")}</span>
        </div>
        <h2 className="text-h2-mobile md:text-h2 text-on-background">
          {t("about.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 rounded-2xl border border-outline-variant bg-surface/80 p-6 md:p-8">
          <p className="text-body-sm md:text-body text-on-surface-variant leading-relaxed">
            {t("about.intro")}
          </p>

          <ul className="flex flex-col gap-3.5">
            {(t("about.bullets", { returnObjects: true }) as string[]).map(
              (bullet: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-body-sm text-on-background leading-relaxed">
                    {bullet}
                  </span>
                </li>
              )
            )}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            {onSelectFeaturedProject && (
              <Button
                onClick={onSelectFeaturedProject}
                size="default"
                className="gap-2"
              >
                <span>{t("about.ctaPrimary")}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Button>
            )}
            <a href="#contact">
              <Button variant="outline" size="default">
                {t("about.ctaSecondary")}
              </Button>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-surface border border-outline-variant rounded-2xl p-6 md:p-8 flex flex-col gap-5">
          <h3 className="text-h3 font-bold text-on-background pb-2 border-b border-outline-variant">
            {t("about.quickFactsTitle")}
          </h3>

          <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant/60">
            <span className="text-small text-on-surface-variant">
              {t("about.quickFacts.experienceLabel")}
            </span>
            <span className="text-body-sm font-semibold text-on-background">
              {t("about.quickFacts.experienceValue")}
            </span>
          </div>

          <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant/60">
            <span className="text-small text-on-surface-variant">
              {t("about.quickFacts.roleLabel")}
            </span>
            <span className="text-body-sm font-semibold text-on-background">
              {t("about.quickFacts.roleValue")}
            </span>
          </div>

          <div className="flex flex-col gap-1 pb-4 border-b border-outline-variant/60">
            <span className="text-small text-on-surface-variant">
              {t("about.quickFacts.modeLabel")}
            </span>
            <span className="text-body-sm font-semibold text-emerald-400">
              {t("about.quickFacts.modeValue")}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-small text-on-surface-variant">
              {t("about.quickFacts.stackLabel")}
            </span>
            <span
              className="text-body-sm font-mono font-semibold text-primary"
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
