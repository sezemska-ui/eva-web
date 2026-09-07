const SITE_URL = "https://searchstrategy.cz";

const services = [
  {
    slug: "ai-search-visibility-audit",
    name: "AI Search Visibility Audit",
    description:
      "Diagnostika toho, jak firmu skutečně vidí vyhledávače, AI systémy a digitální ekosystém. Testuje zákaznické scénáře, konkurenci, digitální entitu, obsah, technické základy a signály autority.",
  },
  {
    slug: "ai-search-strategie",
    name: "AI Search Strategie",
    description:
      "Strategie propojující zákaznické rozhodovací situace, vyhledávání, AI, obsah, digitální entitu, lokální viditelnost a autoritu do prioritizovaného plánu změn.",
  },
  {
    slug: "implementace-strategie",
    name: "Implementace strategie",
    description:
      "Implementace technických, obsahových, strukturálních, lokálních a AI-readability změn podle priorit strategie ve spolupráci s webmasterem firmy.",
  },
  {
    slug: "digital-authority",
    name: "Digital Authority",
    description:
      "Budování digitální autority firmy prostřednictvím konzistentních signálů z webu, Googlu, recenzí, médií, katalogů, partnerů a dalších zdrojů.",
  },
  {
    slug: "strategicka-konzultace",
    name: "Strategická konzultace",
    description:
      "Individuální strategická konzultace zaměřená na zorientování v situaci firmy, posouzení její viditelnosti ve vyhledávání a AI a doporučení dalšího smysluplného kroku.",
  },
];

export default function SiteJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Eva Sezemská",
        jobTitle: "AI Search Strategist",
        url: SITE_URL,
        image: `${SITE_URL}/images/eva-portrait.png`,
        email: "sezemska@searchstrategy.cz",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mladá Boleslav",
          addressCountry: "CZ",
        },
        sameAs: ["https://www.linkedin.com/in/eva-sezemská-466292417/"],
        worksFor: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: "Eva Sezemská — AI Search Strategist",
        url: SITE_URL,
        image: `${SITE_URL}/images/eva-portrait.png`,
        email: "sezemska@searchstrategy.cz",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mladá Boleslav",
          addressCountry: "CZ",
        },
        areaServed: "CZ",
        founder: { "@id": `${SITE_URL}/#person` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Search služby",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@id": `${SITE_URL}/sluzby/${s.slug}#service` },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Eva Sezemská — AI Search Strategist",
        url: SITE_URL,
        inLanguage: "cs-CZ",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      ...services.map((s) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/sluzby/${s.slug}#service`,
        name: s.name,
        url: `${SITE_URL}/sluzby/${s.slug}`,
        description: s.description,
        serviceType: s.name,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "Country", name: "Česká republika" },
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export { SITE_URL };
