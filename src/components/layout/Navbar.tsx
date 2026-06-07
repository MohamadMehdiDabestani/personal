import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the section top is above a certain threshold of the viewport
        if (rect.top <= window.innerHeight / 2.5) {
          current = section.getAttribute("id") || "";
        }
      });
      
      // Ensure the last section is active if scrolled to the absolute bottom
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: t("nav.about") },
    { id: "projects", label: t("nav.projects") },
    { id: "skills", label: t("nav.skills") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant">
      <nav className="max-w-[1120px] mx-auto flex justify-between items-center px-gutter-sm md:px-gutter-lg h-[64px]">
        <div className="text-h3 font-bold text-on-background">
          {t("nav.portfolio")}
        </div>
        <div className="hidden md:flex items-center gap-gutter-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "text-body cursor-pointer active:opacity-80 transition-colors",
                activeSection === link.id
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div 
          onClick={toggleLanguage}
          className="text-primary text-body cursor-pointer hover:text-primary transition-all font-medium select-none"
        >
          {i18n.language === "en" ? "FA | EN" : "EN | FA"}
        </div>
      </nav>
    </header>
  );
}

