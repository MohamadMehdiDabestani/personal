import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { DownloadCV } from "@/src/components/common/downloadCv";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Code2,
  Database,
  Layers,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";

interface HeroProps {
  onSelectFeaturedProject?: () => void;
}

export function Hero({ onSelectFeaturedProject }: HeroProps) {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <Layers className="w-5 h-5 text-primary" />,
      value: t("hero.stats.experience"),
      sub: t("hero.stats.experienceSub"),
    },
    {
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
      value: t("hero.stats.stack"),
      sub: t("hero.stats.stackSub"),
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      value: t("hero.stats.backend"),
      sub: t("hero.stats.backendSub"),
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      value: t("hero.stats.bff"),
      sub: t("hero.stats.bffSub"),
    },
  ];

  return (
    <section className="relative pt-8 pb-section-lg md:py-section-lg flex flex-col gap-10">
      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left / Primary Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <Badge variant="success" className="w-fit gap-2.5 px-3.5 py-1.5 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold tracking-wide">
              {t("hero.openToRemote")}
            </span>
          </Badge>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-body-sm">
              <Sparkles className="w-4 h-4" />
              <span>{t("hero.greeting")}</span>
            </div>

            <h1 className="text-h1-mobile md:text-h1 text-on-background tracking-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-primary bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>

            <p className="text-lg md:text-xl font-medium text-on-background/90 leading-relaxed max-w-2xl">
              {t("hero.subtitle")}
            </p>
          </div>

          <p className="text-body-sm md:text-body text-on-surface-variant max-w-2xl leading-relaxed">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
            <Button
              size="lg"
              onClick={onSelectFeaturedProject}
              className="w-full sm:w-auto gap-2 shadow-[0_8px_25px_rgba(122,162,247,0.25)] hover:shadow-[0_12px_30px_rgba(122,162,247,0.35)] transition-all"
            >
              <span>{t("hero.viewCaseStudy")}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Button>

            <DownloadCV />

            <a href="#contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("hero.contact")}
              </Button>
            </a>
          </div>
        </div>

        {/* Right / Interactive Engineering Architecture Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-outline-variant bg-surface/90 backdrop-blur-xl p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-outline-variant" dir="ltr">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-on-surface-variant">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span>fullstack-architect.ts</span>
              </div>
            </div>

            {/* Code / Architecture Blueprint */}
            <div className="font-mono text-xs md:text-[13px] leading-relaxed space-y-2 text-slate-300 select-none" dir="ltr">
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">fullstack</span> = {"{"}
              </div>
              <div className="pl-4">
                <span className="text-slate-400">name:</span>{" "}
                <span className="text-emerald-300">'Mohammad mehdi dabestani'</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">role:</span>{" "}
                <span className="text-amber-300">'Full Stack JS Developer'</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">backend:</span> [
                <span className="text-emerald-300">'Fastify'</span>,{" "}
                <span className="text-emerald-300">'Drizzle ORM'</span>,{" "}
                <span className="text-emerald-300">'CASL'</span>,{" "}
                <span className="text-emerald-300">'Postgres'</span>],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">frontend:</span> [
                <span className="text-sky-300">'Next.js (App Router)'</span>,{" "}
                <span className="text-sky-300">'BFF Architecture'</span>,{" "}
                <span className="text-sky-300">'React 19'</span>],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">realtime:</span> [
                <span className="text-sky-300">'Socket.IO'</span>,{" "}
                <span className="text-sky-300">'SSE'</span>],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">state:</span> [
                <span className="text-indigo-300">'Zustand'</span>,{" "}
                <span className="text-indigo-300">'SWR'</span>,{" "}
                <span className="text-indigo-300">'React Query'</span>],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">security:</span> [
                <span className="text-rose-300">'CASL RBAC/ABAC'</span>,{" "}
                <span className="text-rose-300">'Type-Safe SQL'</span>]
              </div>
              <div>{"};"}</div>
            </div>

            {/* Bottom Quick Action inside Card */}
            <div className="mt-5 pt-4 border-t border-outline-variant flex items-center justify-between gap-2">
              <span className="text-xs text-on-surface-variant font-mono">
                github.com/mohamadMehdiDabestani
              </span>
              <button
                onClick={onSelectFeaturedProject}
                className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>{t("featured.deepDive")}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics / Highlights Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-outline-variant bg-surface/60 backdrop-blur-md p-4 md:p-5 flex items-start gap-3.5 hover:border-primary/40 transition-colors"
          >
            <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant shrink-0">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span
                className="text-lg md:text-xl font-bold text-on-background tracking-tight"
                dir="ltr"
              >
                {stat.value}
              </span>
              <span className="text-xs md:text-small text-on-surface-variant mt-0.5">
                {stat.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
