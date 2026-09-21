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
    "/sluzby/strategicka-konzultace",
    "/o-mne",
    "/faq",
    "/field-notes",
    "/field-notes/proc-ai-zamenila-identitu",
    "/field-notes/co-jsme-museli-nasadit",
    "/field-notes/implementace-a-overeni",
    "/field-notes/vysledky-po-31-dnech",
    "/kontakt",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
