import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  FolderGit2,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { projectsData, type ProjectItem } from "@/src/types/project";

interface FeaturedProjectProps {
  onSelectProject: (slug: string) => void;
}

export function FeaturedProject({ onSelectProject }: FeaturedProjectProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "fa" ? "fa" : "en";

  const featuredProjects = projectsData.filter((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-section-lg flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-primary text-small font-semibold">
            <FolderGit2 className="w-4 h-4" />
            <span>{t("featured.badge")}</span>
          </div>
          <h2 className="text-h2-mobile md:text-h2 text-on-background">
            {t("featured.title")}
          </h2>
        </div>
        <p className="text-body-sm text-on-surface-variant max-w-xl">
          {t("featured.subtitle")}
        </p>
      </div>

      {/* Featured Projects Spotlight Cards */}
      <div className="flex flex-col gap-10">
        {featuredProjects.map((featured) => {
          const featuredContent = featured[lang];
          return (
            <article
              key={featured.id}
              className="group relative border border-outline-variant rounded-2xl overflow-hidden bg-surface/90 hover:border-primary/60 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5 transition-opacity pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Project Image & Overlay */}
                <div
                  onClick={() => onSelectProject(featured.slug)}
                  className="lg:col-span-6 relative min-h-[280px] md:min-h-[360px] bg-surface-container-low overflow-hidden cursor-pointer"
                >
                  <img
                    alt={featuredContent.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    src={featured.coverImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:bg-gradient-to-r lg:rtl:bg-gradient-to-l lg:from-transparent lg:to-surface/95" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 start-4 flex flex-wrap gap-2">
                    <Badge
                      variant="default"
                      className="gap-1.5 px-3 py-1 rounded-full shadow-md"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{t("featured.featuredBadge")}</span>
                    </Badge>
                    <Badge
                      variant="success"
                      className="backdrop-blur-md bg-emerald-950/80 border-emerald-500/40"
                    >
                      {t(`projectDetail.status.${featured.status}`)}
                    </Badge>
                  </div>

                  {/* Bottom Metrics Preview on Image */}
                  <div className="absolute bottom-4 inset-x-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
                    {featuredContent.metrics.slice(0, 2).map((metric, idx) => (
                      <div
                        key={idx}
                        className="backdrop-blur-md bg-background/80 border border-outline-variant/80 rounded-xl px-3 py-2"
                      >
                        <div
                          className="text-sm font-bold text-primary"
                          dir="ltr"
                        >
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-on-surface-variant truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details Column */}
                <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between gap-6 z-10">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-on-surface-variant font-medium">
                      <span>{featuredContent.category}</span>
                      <span className="font-mono text-primary" dir="ltr">
                        {featuredContent.timeline}
                      </span>
                    </div>

                    <div>
                      <h3
                        onClick={() => onSelectProject(featured.slug)}
                        className="text-2xl md:text-3xl font-bold text-on-background group-hover:text-primary transition-colors cursor-pointer"
                      >
                        {featuredContent.title}
                      </h3>
                      <p className="text-small text-primary/90 font-medium mt-1">
                        {featuredContent.subtitle}
                      </p>
                    </div>

                    <p className="text-body-sm text-on-surface-variant leading-relaxed">
                      {featuredContent.shortDescription}
                    </p>

                    {/* Role Access Highlight */}
                    {featuredContent.roles && featuredContent.roles.length > 0 && (
                      <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/80 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-xs font-semibold text-on-background">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>{t("projectDetail.rolesTitle")}:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5" dir="ltr">
                          {featuredContent.roles.map((r) => (
                            <span
                              key={r.id}
                              className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-surface border border-outline-variant text-on-surface-variant"
                            >
                              {r.id}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-1" dir="ltr">
                      {featured.technologies.slice(0, 8).map((tech) => (
                        <Badge key={tech.name} variant="accent">
                          {tech.name}
                        </Badge>
                      ))}
                      {featured.technologies.length > 8 && (
                        <Badge variant="secondary">
                          +{featured.technologies.length - 8}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-3">
                    <Button
                      onClick={() => onSelectProject(featured.slug)}
                      className="gap-2 w-full sm:w-auto"
                    >
                      <span>{t("featured.deepDive")}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </Button>

                    <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
                      {featured.links.live && (
                        <a
                          href={featured.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-outline-variant bg-surface-container-low hover:border-primary text-xs font-semibold text-on-background hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{t("featured.liveDemo")}</span>
                        </a>
                      )}
                      {featured.links.video && (
                        <a
                          href={featured.links.video}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-outline-variant bg-surface-container-low hover:border-primary text-xs font-semibold text-on-background hover:text-primary transition-colors"
                        >
                          <PlayCircle className="w-3.5 h-3.5 text-rose-400" />
                          <span>{t("featured.videoReview")}</span>
                        </a>
                      )}
                      {featured.links.github && (
                        <a
                          href={featured.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-outline-variant bg-surface-container-low hover:border-primary text-xs font-semibold text-on-background hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{t("featured.sourceCode")}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Secondary / Other Projects Grid */}
      {otherProjects.length > 0 && (
        <div className="flex flex-col gap-4 pt-4">
          <h3 className="text-h3 text-on-background">
            {t("featured.otherProjects")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project: ProjectItem) => {
              const content = project[lang];
              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project.slug)}
                  className="group border border-outline-variant rounded-2xl p-6 bg-surface/80 hover:border-primary/60 transition-all cursor-pointer flex flex-col justify-between gap-5 hover:-translate-y-0.5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-primary bg-accent-soft px-3 py-1 rounded-full">
                        {content.category}
                      </span>
                      <span className="text-xs font-mono text-on-surface-variant" dir="ltr">
                        {content.timeline}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-on-background group-hover:text-primary transition-colors">
                      {content.title}
                    </h4>

                    <p className="text-body-sm text-on-surface-variant line-clamp-3">
                      {content.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2" dir="ltr">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <Badge key={tech.name} variant="secondary" className="text-xs">
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-outline-variant flex items-center justify-between text-primary text-small font-semibold">
                    <span>{t("featured.deepDive")}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
