import type { Metadata } from "next";

const SITE_NAME = "Eva Sezemská — AI Search Strategist";
// Jednotný obrázek pro sdílení na všech stránkách, 1200 × 630
const IMAGE = {
  url: "/images/og-searchstrategy.jpg",
  width: 1200,
  height: 630,
  alt: "Eva Sezemská, AI Search Strategist z Mladé Boleslavi – Doporučí vás AI, když se zákazník zeptá na váš obor?",
};

// Metadata stránky včetně náhledů pro sdílení. Next.js slučuje metadata jen mělce,
// takže stránka bez vlastního openGraph by zdědila og:url, og:title a og:description
// úvodní stránky z layoutu. Každá stránka proto volá tuto funkci.
export function pageMetadata({
  title,
  description,
  path,
  article,
}: {
  title: string;
  description: string;
  path: string;
  article?: { publishedTime: string; modifiedTime?: string };
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: article ? "article" : "website",
      locale: "cs_CZ",
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      images: [IMAGE],
      ...(article && {
        publishedTime: article.publishedTime,
        modifiedTime: article.modifiedTime,
        authors: ["Eva Sezemská"],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [IMAGE.url],
    },
  };
}
