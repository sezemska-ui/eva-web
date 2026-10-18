import Link from "next/link";
import { SITE_URL } from "./SiteJsonLd";
import { getNote } from "@/lib/fieldNotes";

// Data publikace a aktualizace bere z lib/fieldNotes.ts
export function ArticleJsonLd({
  headline,
  description,
  url,
}: {
  headline: string;
  description: string;
  url: string;
}) {
  const note = getNote(url);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${url}`,
    datePublished: note.datePublished,
    dateModified: note.dateModified,
    image: `${SITE_URL}/images/eva-portrait.png`,
    author: {
      "@type": "Person",
      name: "Eva Sezemská",
    },
    publisher: { "@id": `${SITE_URL}/#business` },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav className="mb-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wider text-cream/40">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-cream/70">
                {item.label}
              </Link>
            ) : (
              <span className="text-cream/60">{item.label}</span>
            )}
            {i < items.length - 1 && <span>/</span>}
          </span>
        ))}
      </nav>
    </>
  );
}

export function FAQJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
