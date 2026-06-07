import { Badge } from "@/src/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FeaturedProject() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-section-lg flex flex-col gap-section-sm">
      <h2 className="text-h2-mobile md:text-h2 text-on-background">
        {t("featured.title")}
      </h2>
      
      <article className="group relative border border-outline-variant rounded-xl overflow-hidden bg-surface hover:border-primary transition-colors duration-300">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[0_8px_30px_rgba(79,140,255,0.12)] transition-opacity pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-surface-variant flex items-center justify-center overflow-hidden">
            <img 
              alt="Healthcare Dashboard Interface" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuADfSjw0H_VzjTXLdzNcLhSu4494QxRQMPkREEAAITXZjzk2ndlpo8sr7P9D1bzaDwAQESt0RutkHw36zMzPXxBbZQnAyEV8vbspExgQ9gUSJtdIRIiXbFchykHaxZPaTMGU_YHUrNTkk6fSOrRaXgmjT6cYhvZWhdgJMetuNDBGiGDA6NOZaKEls9NksLsB3323ntC5W5iTsORW9_kBlWVg2T1I8cdBGep69Q5-Y8t6NQ4t6a2q2zfVzaqZkC-BfHhuWno3qXuea4" 
            />
          </div>
          
          <div className="w-full md:w-1/2 p-gutter-lg flex flex-col justify-between z-10 bg-surface">
            <div>
              <h3 className="text-h3 text-on-background mb-base">{t("featured.projectTitle")}</h3>
              <p className="text-body-sm text-on-surface-variant mb-gutter-md">
                {t("featured.projectDesc")}
              </p>
              
              <div className="flex flex-wrap gap-base mb-gutter-md">
                <Badge variant="accent">Next.js</Badge>
                <Badge variant="accent">PostgreSQL</Badge>
                <Badge variant="accent">Real-time</Badge>
              </div>
            </div>
            
            <div>
              <a className="inline-flex items-center gap-2 text-primary text-body-sm font-semibold hover:opacity-80 transition-opacity cursor-pointer" href="#">
                {t("featured.deepDive")} <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
