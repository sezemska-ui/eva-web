import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-3 gap-y-2 px-6 py-10 font-mono text-[11px] text-cream/40">
      <span>Eva Sezemská · AI Search Strategist · IČO 29800544</span>
      <span className="text-cream/20">·</span>
      <Link href="/ochrana-osobnich-udaju" className="underline decoration-cream/20 underline-offset-4 hover:text-cream/70 hover:decoration-cream/40">
        Ochrana osobních údajů
      </Link>
    </footer>
  );
}
