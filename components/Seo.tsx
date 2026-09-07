import Link from "next/link";
import { SITE_URL } from "./SiteJsonLd";

export function ServiceJsonLd({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Person",
      name: "Eva Sezemská",
    },
    areaServed: "CZ",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    author: {
      "@type": "Person",
      name: "Eva Sezemská",
    },
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
