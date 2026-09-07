import type { MetadataRoute } from "next";

const BASE_URL = "https://searchstrategy.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sluzby",
    "/sluzby/ai-search-visibility-audit",
    "/sluzby/ai-search-strategie",
    "/sluzby/implementace-strategie",
    "/sluzby/digital-authority",
    "/o-mne",
    "/field-notes",
    "/field-notes/proc-ai-zamenila-identitu",
    "/field-notes/co-jsme-museli-nasadit",
    "/kontakt",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
