import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { projectsData } from "@/src/types/project";

function setMetaTag(nameOrProperty: string, value: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let tag = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, nameOrProperty);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
}

function setCanonical(url: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export function useDocumentMetadata(activeProjectSlug: string | null) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "fa" ? "fa" : "en";

  useEffect(() => {
    let title = "";
    let description = "";
    let keywords = "";
    let ogType = "website";
    let ogImage = `${window.location.origin}/Mohammad_Mehdi_CV.png`;
    const url = window.location.href;

    if (activeProjectSlug) {
      const project = projectsData.find((p) => p.slug === activeProjectSlug);
      if (project) {
        const content = project[lang];
        const siteAuthor = lang === "fa" ? "محمد مهدی دبستانی" : "Mohammad mehdi dabestani";
        title = `${content.title} | ${siteAuthor}`;
        description = content.shortDescription || content.subtitle;
        keywords = `${project.technologies.map((tech) => tech.name).join(", ")}, ${content.category}, ${siteAuthor}`;
        ogType = "article";
        if (project.coverImage) {
          ogImage = project.coverImage.startsWith("http")
            ? project.coverImage
            : `${window.location.origin}${project.coverImage}`;
        }
      }
    }

    if (!title) {
      title = t("meta.homeTitle");
      description = t("meta.homeDescription");
      keywords = t("meta.homeKeywords");
      ogType = "website";
    }

    // 1. Update document title
    document.title = title;

    // 2. Standard SEO meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("author", "Mohammad mehdi dabestani");
    setMetaTag("robots", "index, follow");

    // 3. OpenGraph tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:url", url, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:site_name", t("meta.siteName"), true);
    setMetaTag("og:locale", lang === "fa" ? "fa_IR" : "en_US", true);

    // 4. Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // 5. Canonical URL
    setCanonical(url);
  }, [activeProjectSlug, lang, t]);
}
