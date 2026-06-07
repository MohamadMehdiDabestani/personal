import { Badge } from "@/src/components/ui/badge";
import { Code2, Database, Zap, Layout } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();

  const skilsData = [
    {
      title: t("skills.core"),
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: ["Next.js", "React", "TypeScript"],
    },
    {
      title: t("skills.state"),
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["PostgreSQL", "Drizzle", "Prisma" ,  "SWR" , "React Query" , "Zustand"],
    },
    {
      title: t("skills.realtime"),
      icon: <Zap className="w-6 h-6 text-primary" />,
      skills: ["Socket.IO", "SSE"],
    },
    {
      title: t("skills.ui"),
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: ["MUI", "Tailwind CSS", "Shadcn"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-section-lg mb-section-lg flex flex-col gap-section-sm"
    >
      <h2 className="text-h2-mobile md:text-h2 text-on-background">
        {t("skills.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-md">
        {skilsData.map((category, index) => (
          <div
            key={index}
            className="border border-outline-variant p-gutter-md rounded-xl bg-surface"
          >
            <div className="flex items-center gap-base mb-4 text-on-background">
              {category.icon}
              <h3 className="text-h3 font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-base">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
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
