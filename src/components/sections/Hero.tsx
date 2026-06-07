import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { DownloadCV } from "@/src/components/common/downloadCv";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="py-section-lg mt-section-md flex flex-col items-start gap-gutter-md">
      <Badge variant="success" className="mb-2 w-fit gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-medium leading-none">
          {t("hero.openToRemote")}
        </span>
      </Badge>

      <h1 className="text-h1-mobile md:text-h1 text-on-background max-w-3xl">
        {t("hero.title")}
      </h1>

      <p className="text-body text-on-surface-variant max-w-2xl">
        {t("hero.description")}
      </p>

      <div className="flex flex-col sm:flex-row gap-base mt-base w-full sm:w-auto">
        <a href="#projects">
          <Button size="default" className="w-full sm:w-auto">
            {t("hero.viewCaseStudy")}
          </Button>
        </a>
        <DownloadCV />
        <a href="#contact">
          <Button variant="outline" size="default" className="w-full sm:w-auto">
            {t("hero.contact")}
          </Button>
        </a>
      </div>
    </section>
  );
}
