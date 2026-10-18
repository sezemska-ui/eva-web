// Jediný seznam článků Field Notes. Používá ho přehled /field-notes
// i úvodní stránka, aby se názvy a data nemohly rozejít.

export type FieldNote = {
  href: string;
  title: string;
  group: "guide" | "caseStudy";
  // Označení dílu v případové studii, např. „Díl 1/4“
  part?: string;
  datePublished: string; // RRRR-MM-DD
  dateModified: string; // RRRR-MM-DD, poslední úprava obsahu
};

export const fieldNotes: FieldNote[] = [
  {
    href: "/field-notes/jak-funguje-ai-vyhledavani",
    title: "Jak funguje AI vyhledávání a čím se liší od klasického Googlu",
    group: "guide",
    datePublished: "2026-10-14",
    dateModified: "2026-10-14",
  },
  {
    href: "/field-notes/proc-ai-zamenila-identitu",
    title: "Jak AI zaměnila identitu mé klientky — a co to prozradilo o její viditelnosti",
    group: "caseStudy",
    part: "Díl 1/4",
    datePublished: "2026-08-20",
    dateModified: "2026-10-14",
  },
  {
    href: "/field-notes/co-jsme-museli-nasadit",
    title: "Nový web nestačí. Co jsme museli nasadit, aby ho AI vůbec „přečetla“",
    group: "caseStudy",
    part: "Díl 2/4",
    datePublished: "2026-09-01",
    dateModified: "2026-10-14",
  },
  {
    href: "/field-notes/implementace-a-overeni",
    title: "Strategie nestačí. Jak jsme ji dostali na živý web — a co ukazuje ověření po nasazení.",
    group: "caseStudy",
    part: "Díl 3/4",
    datePublished: "2026-09-15",
    dateModified: "2026-10-14",
  },
  {
    href: "/field-notes/vysledky-po-31-dnech",
    title: "Od záměny identity k 23 z 30 doporučení: případová studie AI viditelnosti po 31 dnech",
    group: "caseStudy",
    part: "Mezikrok: výsledky po 31 dnech",
    datePublished: "2026-09-18",
    dateModified: "2026-10-14",
  },
  {
    href: "/field-notes/jak-budovat-ai-viditelnost-v-case",
    title: "Jak budovat AI viditelnost v čase",
    group: "caseStudy",
    part: "Díl 4/4",
    datePublished: "2026-10-04",
    dateModified: "2026-10-11",
  },
];

// „2026-09-01“ → „1. 9. 2026“
export function formatNoteDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}. ${m}. ${y}`;
}

const byNewest = (a: FieldNote, b: FieldNote) => b.datePublished.localeCompare(a.datePublished);

// Průvodci od nejnovějšího
export const guides = fieldNotes.filter((n) => n.group === "guide").sort(byNewest);

// Díly případové studie v pořadí čtení (podle data vydání)
export const caseStudy = fieldNotes
  .filter((n) => n.group === "caseStudy")
  .sort((a, b) => a.datePublished.localeCompare(b.datePublished));

export function latestNotes(count: number): FieldNote[] {
  return [...fieldNotes].sort(byNewest).slice(0, count);
}
