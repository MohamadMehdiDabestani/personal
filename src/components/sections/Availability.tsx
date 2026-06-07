import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { useTranslation } from "react-i18next";

export function Availability() {
  const { t } = useTranslation();

  return (
    <section className="py-section-sm flex justify-center">
      <div className="w-full max-w-3xl border border-outline-variant bg-surface-container-low rounded-xl p-gutter-md md:p-gutter-lg flex flex-col gap-4">
        <Badge variant="success" className="w-fit gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium leading-none">
            {t("availability.openToWork")}
          </span>
        </Badge>

        <div className="flex flex-col gap-2">
          <h3 className="text-h3 text-on-background">
            {t("availability.title")}
          </h3>
          <p className="text-body-sm text-on-surface-variant">
            {t("availability.description")}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-gutter-md mt-2">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{t("availability.remoteOnly")}</Badge>
            <Badge variant="secondary">{t("availability.fullTime")}</Badge>
          </div>
          <Button variant="default" size="sm">
            <a href="#contact">{t("availability.contact")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
