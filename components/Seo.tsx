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
    image: `${SITE_URL}/images/eva-portrait.jpg`,
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
      <nav aria-label="Drobečková navigace" className="mb-8 flex flex-wrap gap-x-2 font-mono text-[13px] tracking-[0.04em] text-muted">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="underline-offset-4 hover:text-ink hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink-2">{item.label}</span>
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
