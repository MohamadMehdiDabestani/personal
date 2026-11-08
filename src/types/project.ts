import projectsJson from "@/src/data/projects.json";

export interface ProjectTechnology {
  name: string;
  category: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectRole {
  id: string;
  title: string;
  permissions: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectLocalizedContent {
  title: string;
  subtitle: string;
  role: string;
  timeline: string;
  category: string;
  shortDescription: string;
  fullDescription: string[];
  metrics: ProjectMetric[];
  roles?: ProjectRole[];
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  architecture: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  featured: boolean;
  status: "production" | "completed" | "in-progress";
  year: string;
  coverImage: string;
  links: {
    live?: string;
    video?: string;
    github?: string;
  };
  technologies: ProjectTechnology[];
  en: ProjectLocalizedContent;
  fa: ProjectLocalizedContent;
}

export const projectsData: ProjectItem[] = projectsJson as ProjectItem[];
