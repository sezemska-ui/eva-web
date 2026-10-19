import type { Metadata } from "next";

const SITE_NAME = "Eva Sezemská — AI Search Strategist";
const IMAGE = { url: "/images/eva-portrait.png", width: 800, height: 800, alt: "Eva Sezemská" };

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
      card: "summary",
      title,
      description,
      images: [IMAGE.url],
    },
  };
}
