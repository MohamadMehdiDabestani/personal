import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { useTranslation } from "react-i18next";

export function Availability() {
  const { t } = useTranslation();

  return (
    <section className="py-section-sm">
      <div className="relative overflow-hidden w-full border border-outline-variant bg-gradient-to-r from-surface via-surface-container-low to-surface rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
        <div className="absolute -right-20 -top-20 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-3 max-w-2xl z-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="success" className="w-fit gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold leading-none">
                {t("availability.openToWork")}
              </span>
            </Badge>
            <Badge variant="secondary">{t("availability.remoteOnly")}</Badge>
            <Badge variant="secondary">{t("availability.fullTime")}</Badge>
          </div>

          <h3 className="text-h3 font-bold text-on-background">
            {t("availability.title")}
          </h3>
          <p className="text-body-sm text-on-surface-variant">
            {t("availability.description")}
          </p>
        </div>

        <div className="shrink-0 z-10">
          <a href="#contact">
            <Button variant="default" size="lg" className="w-full md:w-auto">
              {t("availability.contact")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
