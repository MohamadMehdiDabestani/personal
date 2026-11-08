import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { projectsData } from "@/src/types/project";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Layers,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Terminal,
  UserCheck,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface ProjectDetailProps {
  slug: string;
  onBack: () => void;
  onSelectProject: (slug: string) => void;
  onContactClick: () => void;
}

export function ProjectDetail({
  slug,
  onBack,
  onSelectProject,
  onContactClick,
}: ProjectDetailProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "fa" ? "fa" : "en";

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project =
    projectIndex >= 0 ? projectsData[projectIndex] : projectsData[0];
  const nextProject =
    projectsData.length > 1
      ? projectsData[(projectIndex + 1) % projectsData.length]
      : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) return null;

  const content = project[lang];

  return (
    <div className="py-6 md:py-10 flex flex-col gap-10">
      {/* Top Breadcrumb / Back Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant bg-surface hover:border-primary text-body-sm font-medium text-on-background hover:text-primary transition-all cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
          <span>{t("projectDetail.back")}</span>
        </button>

        <div className="flex items-center gap-2">
          <Badge variant="accent">{content.category}</Badge>
          <Badge variant="success">
            {t(`projectDetail.status.${project.status}`)}
          </Badge>
        </div>
      </div>

      {/* Hero Header Banner */}
      <section className="rounded-3xl border border-outline-variant bg-surface/90 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Text & Links Column */}
          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant">
                <span className="inline-flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-primary" />
                  <span>{content.role}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span dir="ltr">{content.timeline}</span>
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-on-background leading-tight">
                {content.title}
              </h1>

              <p className="text-lg text-primary/90 font-medium leading-relaxed">
                {content.subtitle}
              </p>

              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {content.shortDescription}
              </p>
            </div>

            {/* External Links (Live Site, Video Review, GitHub) */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-outline-variant">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="default" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>{t("projectDetail.livePreview")}</span>
                  </Button>
                </a>
              )}

              {project.links.video && (
                <a
                  href={project.links.video}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    size="default"
                    className="gap-2 border-rose-500/40 hover:border-rose-400 text-on-background"
                  >
                    <PlayCircle className="w-4 h-4 text-rose-400" />
                    <span>{t("projectDetail.watchVideo")}</span>
                  </Button>
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" size="default" className="gap-2">
                    <Terminal className="w-4 h-4" />
                    <span>{t("projectDetail.viewGithub")}</span>
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-surface-container-low border-t lg:border-t-0 lg:border-s border-outline-variant overflow-hidden">
            <img
              src={project.coverImage}
              alt={content.title}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent lg:bg-gradient-to-r lg:rtl:bg-gradient-to-l lg:from-surface/80 lg:to-transparent" />
          </div>
        </div>
      </section>

      {/* Key Metrics Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {content.metrics.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-outline-variant bg-surface/80 p-5 flex flex-col justify-between gap-2 hover:border-primary/50 transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
              {metric.label}
            </span>
            <span
              className="text-2xl md:text-3xl font-extrabold text-primary"
              dir="ltr"
            >
              {metric.value}
            </span>
            <span className="text-xs text-on-surface-variant">
              {metric.detail}
            </span>
          </div>
        ))}
      </section>

      {/* Overview & Technology Stack Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Full Description & Architecture */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <section className="rounded-2xl border border-outline-variant bg-surface p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-on-background">
              <Layers className="w-5 h-5 text-primary" />
              <h2 className="text-h3 font-bold">
                {t("projectDetail.overviewTitle")}
              </h2>
            </div>

            <div className="space-y-4 text-body-sm text-on-surface-variant leading-relaxed">
              {content.fullDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* System Architecture Highlights */}
          <section className="rounded-2xl border border-outline-variant bg-surface p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-on-background">
              <Cpu className="w-5 h-5 text-primary" />
              <h2 className="text-h3 font-bold">
                {t("projectDetail.architectureTitle")}
              </h2>
            </div>

            <ul className="space-y-3">
              {content.architecture.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-body-sm text-on-background"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right: Tech Stack & RBAC Roles */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Technologies Used */}
          <section className="rounded-2xl border border-outline-variant bg-surface p-6 md:p-8 space-y-5">
            <div className="flex items-center gap-2.5 text-on-background">
              <Wrench className="w-5 h-5 text-primary" />
              <h2 className="text-h3 font-bold">
                {t("projectDetail.technologiesTitle")}
              </h2>
            </div>

            <div className="flex flex-wrap gap-2" dir="ltr">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-outline-variant bg-surface-container-low text-small font-medium text-on-background hover:border-primary/50 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>{tech.name}</span>
                  <span className="text-[11px] text-on-surface-variant px-1.5 py-0.5 rounded bg-surface">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Role-Based Access Control (RBAC) */}
          {content.roles && content.roles.length > 0 && (
            <section className="rounded-2xl border border-outline-variant bg-surface p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-on-background">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h2 className="text-h3 font-bold">
                  {t("projectDetail.rolesTitle")}
                </h2>
              </div>
              <p className="text-small text-on-surface-variant">
                {t("projectDetail.rolesSubtitle")}
              </p>

              <div className="space-y-3 pt-1">
                {content.roles.map((role) => (
                  <div
                    key={role.id}
                    className="p-4 rounded-xl border border-outline-variant bg-surface-container-low space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-on-background text-body-sm">
                        {role.title}
                      </span>
                      <span
                        className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-primary/15 text-primary border border-primary/30"
                        dir="ltr"
                      >
                        role: {role.id}
                      </span>
                    </div>
                    <p className="text-small text-on-surface-variant leading-relaxed">
                      {role.permissions}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Key Features Section */}
      <section className="space-y-5">
        <div className="flex items-center gap-2.5 text-on-background">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-h2-mobile md:text-h2">
            {t("projectDetail.featuresTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-outline-variant bg-surface p-6 flex flex-col gap-3 hover:border-primary/50 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-accent-soft border border-primary/25 flex items-center justify-center text-primary font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-on-background">
                {feature.title}
              </h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Challenges & Solutions */}
      <section className="space-y-5">
        <div className="flex items-center gap-2.5 text-on-background">
          <AlertTriangle className="w-6 h-6 text-amber-400" />
          <h2 className="text-h2-mobile md:text-h2">
            {t("projectDetail.challengesTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {content.challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-outline-variant bg-surface p-6 md:p-8 flex flex-col gap-5"
            >
              <h3 className="text-xl font-bold text-on-background flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                  #{idx + 1}
                </span>
                <span>{challenge.title}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Problem Box */}
                <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    {t("projectDetail.problemLabel")}
                  </div>
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                {/* Solution Box */}
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {t("projectDetail.solutionLabel")}
                  </div>
                  <p className="text-body-sm text-on-background leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA & Next Project Navigation */}
      <section className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl">
          <h3 className="text-h3 font-bold text-on-background">
            {t("projectDetail.ctaTitle")}
          </h3>
          <p className="text-body-sm text-on-surface-variant">
            {t("projectDetail.ctaDesc")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <Button onClick={onContactClick} className="w-full sm:w-auto">
            {t("hero.contact")}
          </Button>

          {nextProject && nextProject.slug !== project.slug && (
            <Button
              variant="outline"
              onClick={() => onSelectProject(nextProject.slug)}
              className="gap-2 w-full sm:w-auto"
            >
              <span>{t("projectDetail.nextProject")}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}
