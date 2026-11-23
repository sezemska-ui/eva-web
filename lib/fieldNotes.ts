// Jediný seznam článků sekce Z praxe. Používá ho přehled /field-notes
// i úvodní stránka, aby se názvy a data nemohly rozejít.

export type FieldNote = {
  href: string;
  title: string;
  // guide = průvodce, caseStudy = série o fotografce, audit = samostatné případové studie z auditů,
  // research = vlastní výzkumy napříč oborem nebo regionem (víc firem, ne jeden klient)
  group: "guide" | "caseStudy" | "audit" | "research";
  // Označení dílu v případové studii, např. „Díl 1/5“
  part?: string;
  // Jedna věta pro přehled /field-notes
  summary: string;
  datePublished: string; // RRRR-MM-DD
  dateModified: string; // RRRR-MM-DD, poslední commit, který měnil text článku
};

export const fieldNotes: FieldNote[] = [
  {
    href: "/field-notes/ai-ubytovani-cesky-raj-pary-a-rodiny",
    summary: "Test 30 odpovědí tří AI nástrojů: párům doporučují hlavně hotely, rodinám penziony, a občas se spletou.",
    title: "Páry dostanou hotel, rodiny penzion: 30 odpovědí AI z Českého ráje",
    group: "research",
    part: "1. část ze 2",
    datePublished: "2026-11-19",
    dateModified: "2026-11-19",
  },
  {
    href: "/field-notes/jak-ai-doporucuje-firmu-na-cisteni-fasad",
    summary: "Audit 111 odpovědí AI ukázal, kdy AI místní firmu na čištění fasád doporučí a odkud o ní čerpá.",
    title: "Případová studie: Jak AI vyhledávače doporučují firmu na čištění fasád",
    group: "audit",
    datePublished: "2026-11-14",
    dateModified: "2026-11-14",
  },
  {
    href: "/field-notes/jak-funguje-ai-vyhledavani",
    summary: "Klasický Google dá seznam odkazů, AI rovnou odpověď s doporučením. Co to mění pro firmy.",
    title: "Jak funguje AI vyhledávání a čím se liší od klasického Googlu",
    group: "guide",
    datePublished: "2026-10-14",
    dateModified: "2026-10-14",
  },
  {
    href: "/field-notes/proc-ai-zamenila-identitu",
    summary: "Proč AI fotografku z Českého ráje nedoporučovala a jednou ji dokonce zaměnila za jinou osobu.",
    title: "Jak AI zaměnila identitu mé klientky — a co to prozradilo o její viditelnosti",
    group: "caseStudy",
    part: "Díl 1/5",
    datePublished: "2026-08-20",
    dateModified: "2026-10-11",
  },
  {
    href: "/field-notes/co-jsme-museli-nasadit",
    summary: "Jaká technická a strategická rozhodnutí udělala nový web čitelný pro AI.",
    title: "Nový web nestačí. Co jsme museli nasadit, aby ho AI vůbec „přečetla“",
    group: "caseStudy",
    part: "Díl 2/5",
    datePublished: "2026-09-01",
    dateModified: "2026-10-11",
  },
  {
    href: "/field-notes/implementace-a-overeni",
    summary: "Jak se strategie dostala na živý web a co ukázalo ověření po nasazení.",
    title: "Strategie nestačí. Jak jsme ji dostali na živý web — a co ukazuje ověření po nasazení.",
    group: "caseStudy",
    part: "Díl 3/5",
    datePublished: "2026-09-15",
    dateModified: "2026-10-11",
  },
  {
    href: "/field-notes/vysledky-po-31-dnech",
    summary: "Po 31 dnech tři AI systémy doporučily fotografku ve 23 z 30 dotazů, na začátku jen v 6.",
    title: "Od záměny identity k 23 z 30 doporučení: případová studie AI viditelnosti po 31 dnech",
    group: "caseStudy",
    part: "Díl 4/5",
    datePublished: "2026-09-18",
    dateModified: "2026-10-11",
  },
  {
    href: "/field-notes/jak-budovat-ai-viditelnost-v-case",
    summary: "Co dělat průběžně po technickém základu: obsah, recenze a lokální důvěryhodnost.",
    title: "Jak budovat AI viditelnost v čase",
    group: "caseStudy",
    part: "Díl 5/5",
    datePublished: "2026-10-04",
    dateModified: "2026-10-11",
  },
];

export function getNote(href: string): FieldNote {
  const note = fieldNotes.find((n) => n.href === href);
  if (!note) throw new Error(`Článek ${href} chybí v lib/fieldNotes.ts`);
  return note;
}

// „2026-09-01“ → „1. 9. 2026“
export function formatNoteDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d}. ${m}. ${y}`;
}

const byNewest = (a: FieldNote, b: FieldNote) => b.datePublished.localeCompare(a.datePublished);

// Průvodci od nejnovějšího
export const guides = fieldNotes.filter((n) => n.group === "guide").sort(byNewest);

// Výzkumy od nejnovějšího
export const research = fieldNotes.filter((n) => n.group === "research").sort(byNewest);

// Případové studie z auditů od nejnovější
export const audits = fieldNotes.filter((n) => n.group === "audit").sort(byNewest);

// Díly případové studie v pořadí čtení (podle data vydání)
export const caseStudy = fieldNotes
  .filter((n) => n.group === "caseStudy")
  .sort((a, b) => a.datePublished.localeCompare(b.datePublished));

// Typ zápisu pro štítek v přehledu
export const NOTE_KIND: Record<FieldNote["group"], string> = {
  research: "test",
  audit: "případová studie",
  caseStudy: "případová studie",
  guide: "průvodce",
};

export function latestNotes(count: number): FieldNote[] {
  return [...fieldNotes].sort(byNewest).slice(0, count);
}
