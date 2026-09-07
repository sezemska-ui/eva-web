const SITE_URL = "https://searchstrategy.cz";

export default function SiteJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
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
    worksFor: {
      "@type": "Organization",
      name: "Eva Sezemská",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Eva Sezemská — AI Search Strategist",
    url: SITE_URL,
    inLanguage: "cs-CZ",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
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
    founder: {
      "@type": "Person",
      name: "Eva Sezemská",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

export { SITE_URL };
