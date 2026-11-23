const SITE_URL = "https://www.searchstrategy.cz";
export const CONSULTATION_FORM_URL = "https://script.google.com/macros/s/AKfycbyR-WfhVUrkw_K2-ENqtMZlUimWSXsH4rpW4NjmdaRP5an9X2cWGOt5p-ICPKcSHPA5qQ/exec";
// Vstupní dotazník: na webu se nezobrazuje, posílá se klientům až po konzultaci
export const FORM_URL = "https://script.google.com/macros/s/AKfycbzP3VLI0hSpFds4PHc9oMsynueY8snUzI_THmtx4B3K8AaZTFh6x-7B7YI1xFBMHg0P/exec";

// Názvy, popisy a ceny musí odpovídat textům na webu (ServicePath.tsx a stránky služeb)
const services: {
  slug: string;
  name: string;
  description: string;
  price?: string;
  priceRange?: [number, number];
}[] = [
  {
    slug: "strategicka-konzultace",
    name: "Úvodní konzultace",
    description:
      "Odejdete s jasnou odpovědí, jestli vás AI dnes doporučuje a jestli má audit smysl. 60 minut, přijdu s prvními zjištěními o vaší firmě. Pokud se pro audit rozhodnete, cenu konzultace z něj odečtu.",
    price: "4500",
  },
  {
    slug: "ai-search-visibility-audit",
    name: "Audit AI viditelnosti",
    description:
      "Budete vědět, proč vás AI nedoporučuje a čím začít. Zjistím, odkud o vás AI čerpá a čím ji přesvědčila konkurence. Dostanete akční plán: co změnit a v jakém pořadí. Hotovo obvykle do 15 pracovních dnů.",
    priceRange: [20000, 40000],
  },
  {
    slug: "ai-search-strategie",
    name: "Strategie AI viditelnosti",
    description:
      "Váš webmaster dostane hotové podklady a nemusí nic vymýšlet. Zjištění z auditu převedu na texty, strukturu webu a technické podklady.",
    priceRange: [15000, 50000],
  },
  {
    slug: "implementace-strategie",
    name: "Implementace",
    description:
      "Budu komunikovat s vaším webmasterem a vše zkontroluji za vás. Ověřím také, jak se změny projevují v odpovědích AI. Cenu řeknu předem.",
  },
  {
    slug: "digital-authority",
    name: "Budování důvěryhodnosti",
    description:
      "Každý měsíc uvidíte, jak často vás AI doporučuje a jestli to roste. Starám se o recenze, profily a zmínky mimo váš web. Cena individuálně, obvykle na minimálně 3 měsíce.",
  },
];

function serviceOffer(s: (typeof services)[number]) {
  const url = `${SITE_URL}/sluzby/${s.slug}`;
  if (s.price) {
    return { "@type": "Offer", price: s.price, priceCurrency: "CZK", url };
  }
  if (s.priceRange) {
    return {
      "@type": "Offer",
      priceCurrency: "CZK",
      url,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: s.priceRange[0],
        maxPrice: s.priceRange[1],
        priceCurrency: "CZK",
      },
    };
  }
  return undefined;
}

export default function SiteJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Eva Sezemská",
        jobTitle: "AI Search Strategist",
        description: "SEO pro AI vyhledávání: pomáhám firmám, aby je ChatGPT i Google doporučily, když se zákazník zeptá na jejich obor.",
        url: SITE_URL,
        image: `${SITE_URL}/images/eva-portrait.jpg`,
        email: "sezemska@searchstrategy.cz",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Havlíčkova 1490",
          postalCode: "293 01",
          addressLocality: "Mladá Boleslav",
          addressCountry: "CZ",
        },
        sameAs: ["https://www.linkedin.com/in/eva-sezemska/"],
        worksFor: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#business`,
        name: "Eva Sezemská — AI Search Strategist",
        description: "SEO pro AI vyhledávání: pomáhám firmám, aby je ChatGPT i Google doporučily, když se zákazník zeptá na jejich obor.",
        url: SITE_URL,
        image: `${SITE_URL}/images/eva-portrait.jpg`,
        email: "sezemska@searchstrategy.cz",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Havlíčkova 1490",
          postalCode: "293 01",
          addressLocality: "Mladá Boleslav",
          addressCountry: "CZ",
        },
        areaServed: "CZ",
        sameAs: [
          "https://www.google.com/search?kgmid=/g/11zhdhh8r6",
          "https://www.firmy.cz/detail/14051726-eva-sezemska-ai-search-strategist-mlada-boleslav-ii.html",
          "https://www.instagram.com/searchstrategy.cz/",
        ],
        founder: { "@id": `${SITE_URL}/#person` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Služby a ceny",
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
        ...(serviceOffer(s) && { offers: serviceOffer(s) }),
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
