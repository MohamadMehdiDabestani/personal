import { Fragment, useEffect, useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Availability } from "./components/sections/Availability";
import { AboutSection } from "./components/sections/AboutSection";
import { FeaturedProject } from "./components/sections/FeaturedProject";
import { ProjectDetail } from "./components/sections/ProjectDetail";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { motion, AnimatePresence } from "motion/react";
import { projectsData } from "./types/project";

function parseProjectSlugFromHash(hash: string): string | null {
  if (hash.startsWith("#/projects/")) {
    return decodeURIComponent(hash.replace("#/projects/", ""));
  }
  return null;
}

export default function App() {
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(() =>
    parseProjectSlugFromHash(window.location.hash)
  );

  useEffect(() => {
    const handleHashChange = () => {
      const slug = parseProjectSlugFromHash(window.location.hash);
      setActiveProjectSlug(slug);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectProject = (slug: string) => {
    window.location.hash = `/projects/${slug}`;
    setActiveProjectSlug(slug);
  };

  const handleNavigateHome = (sectionId?: string) => {
    if (sectionId) {
      window.history.pushState(null, "", `#${sectionId}`);
    } else {
      window.history.pushState(null, "", window.location.pathname);
    }
    setActiveProjectSlug(null);

    setTimeout(() => {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const featuredSlug =
    projectsData.find((p) => p.featured)?.slug ||
    projectsData[0]?.slug ||
    "healthcare-management-system";

  return (
    <Fragment>
      <Navbar
        activeProjectSlug={activeProjectSlug}
        onNavigateHome={handleNavigateHome}
      />

      <AnimatePresence mode="wait">
        {activeProjectSlug ? (
          <motion.main
            key={`project-${activeProjectSlug}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex-grow pt-[88px] px-gutter-sm md:px-gutter-lg max-w-[1160px] mx-auto w-full"
          >
            <ProjectDetail
              slug={activeProjectSlug}
              onBack={() => handleNavigateHome("projects")}
              onSelectProject={handleSelectProject}
              onContactClick={() => handleNavigateHome("contact")}
            />
          </motion.main>
        ) : (
          <motion.main
            key="home"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex-grow pt-[88px] px-gutter-sm md:px-gutter-lg max-w-[1160px] mx-auto w-full"
          >
            <Hero
              onSelectFeaturedProject={() => handleSelectProject(featuredSlug)}
            />
            <FeaturedProject onSelectProject={handleSelectProject} />
            <Skills />
            <AboutSection
              onSelectFeaturedProject={() => handleSelectProject(featuredSlug)}
            />
            <Availability />
          </motion.main>
        )}
      </AnimatePresence>

      <Contact />
      <Footer />
    </Fragment>
  );
}
