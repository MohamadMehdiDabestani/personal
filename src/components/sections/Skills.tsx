import { Badge } from "@/src/components/ui/badge";
import { Cpu, Database, Layout, Server, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();

  const skillsData = [
    {
      title: t("skills.backend"),
      description: t("skills.backendDesc"),
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      skills: [
        "Fastify",
        "Drizzle ORM",
        "CASL (Permissions)",
        "PostgreSQL",
        "Node.js",
        "REST APIs",
      ],
    },
    {
      title: t("skills.frontend"),
      description: t("skills.frontendDesc"),
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: [
        "Next.js (App Router)",
        "BFF Architecture",
        "React 19",
        "TypeScript",
        "SSR / ISR",
        "Route Handlers",
      ],
    },
    {
      title: t("skills.realtime"),
      description: t("skills.realtimeDesc"),
      icon: <Zap className="w-6 h-6 text-sky-400" />,
      skills: [
        "Socket.IO",
        "Server-Sent Events (SSE)",
        "WebSockets",
        "Real-time Sync",
      ],
    },
    {
      title: t("skills.uiState"),
      description: t("skills.uiStateDesc"),
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      skills: [
        "Zustand",
        "SWR",
        "React Query",
        "Tailwind CSS",
        "Material UI (MUI)",
        "Shadcn UI",
        "Excel Import/Export",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-section-lg flex flex-col gap-8"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-primary text-small font-semibold">
            <Cpu className="w-4 h-4" />
            <span>{t("skills.badge")}</span>
          </div>
          <h2 className="text-h2-mobile md:text-h2 text-on-background">
            {t("skills.title")}
          </h2>
        </div>
        <p className="text-body-sm text-on-surface-variant max-w-xl">
          {t("skills.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="group border border-outline-variant p-6 md:p-7 rounded-2xl bg-surface/80 hover:border-primary/50 transition-all flex flex-col justify-between gap-5"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-on-background">
                <div className="p-2.5 rounded-xl bg-surface-container-low border border-outline-variant group-hover:border-primary/40 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-h3 font-bold">{category.title}</h3>
              </div>
              <p className="text-small text-on-surface-variant">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/60" dir="ltr">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-surface-container-low hover:border-primary/50 hover:text-on-background transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
