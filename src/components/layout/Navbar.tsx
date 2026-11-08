import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/src/lib/utils";
import { ArrowLeft, Code2, Globe, Menu, X } from "lucide-react";

interface NavbarProps {
  activeProjectSlug?: string | null;
  onNavigateHome?: (sectionId?: string) => void;
}

export function Navbar({ activeProjectSlug, onNavigateHome }: NavbarProps) {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      setScrolled(window.scrollY > 16);

      if (activeProjectSlug) return;

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2.5) {
          current = section.getAttribute("id") || "";
        }
      });

      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.body.offsetHeight - 50
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeProjectSlug]);

  const navLinks = [
    { id: "projects", label: t("nav.projects") },
    { id: "skills", label: t("nav.skills") },
    { id: "about", label: t("nav.about") },
    { id: "contact", label: t("nav.contact") },
  ];

  const handleLinkClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activeProjectSlug && onNavigateHome) {
      onNavigateHome(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || mobileMenuOpen
          ? "bg-background/85 backdrop-blur-xl border-b border-outline-variant shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          : "bg-background/50 backdrop-blur-md border-b border-outline-variant/50"
      )}
    >
      <nav className="max-w-[1160px] mx-auto flex justify-between items-center px-gutter-sm md:px-gutter-lg h-[72px]">
        {/* Brand / Logo */}
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            if (activeProjectSlug && onNavigateHome) {
              onNavigateHome();
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2.5 text-on-background hover:text-primary transition-colors cursor-pointer group"
        >
          <span className="w-9 h-9 rounded-xl bg-accent-soft border border-primary/25 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </span>
          <div className="flex flex-col items-start">
            <span className="text-base font-bold tracking-tight leading-none">
              {t("nav.portfolio")}
            </span>
            <span className="text-[11px] text-on-surface-variant font-mono mt-1" dir="ltr">
              Full Stack JS • Fastify • Next.js (BFF)
            </span>
          </div>
        </button>

        {/* Desktop Nav Links or Back to Home */}
        <div className="hidden md:flex items-center gap-1 bg-surface/80 border border-outline-variant rounded-full px-2 py-1">
          {activeProjectSlug && (
            <button
              onClick={() => onNavigateHome && onNavigateHome("projects")}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-small font-medium text-primary bg-accent-soft hover:bg-primary/20 transition-all cursor-pointer me-1"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              <span>{t("nav.backToHome")}</span>
            </button>
          )}
          {navLinks.map((link) => {
            const isActive = !activeProjectSlug && activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-small font-medium transition-all cursor-pointer",
                  isActive
                    ? "bg-primary text-on-primary font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-background hover:bg-surface-variant/40"
                )}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Actions: Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-outline-variant bg-surface hover:border-primary/60 text-small font-semibold text-on-background hover:text-primary transition-all cursor-pointer select-none"
            aria-label="Toggle Language"
          >
            <Globe className="w-4 h-4 text-primary" />
            <span dir="ltr">{i18n.language === "en" ? "FA" : "EN"}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-xl border border-outline-variant bg-surface text-on-background hover:text-primary transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-outline-variant bg-surface/95 backdrop-blur-xl px-gutter-sm py-4 flex flex-col gap-2">
          {activeProjectSlug && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateHome) onNavigateHome("projects");
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-accent-soft text-primary font-semibold text-body-sm"
            >
              <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
              <span>{t("nav.backToHome")}</span>
            </button>
          )}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={cn(
                "text-start px-4 py-3 rounded-xl text-body-sm font-medium transition-colors",
                !activeProjectSlug && activeSection === link.id
                  ? "bg-primary/15 text-primary font-semibold"
                  : "text-on-surface-variant hover:bg-surface-variant/40 hover:text-on-background"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
