import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-4xl flex-col gap-y-2 px-6 py-10 font-mono text-[11px] text-cream/40 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
      {/* Na mobilu jméno, lokalita s IČO a odkaz pod sebou, na počítači v jednom řádku */}
      <span className="flex flex-col gap-y-2 sm:block">
        <span>Eva Sezemská · AI Search Strategist</span>
        <span className="hidden sm:inline"> · </span>
        <span className="whitespace-nowrap">Mladá Boleslav · IČO 29800544</span>
      </span>
      <span className="hidden text-cream/20 sm:inline">·</span>
      <Link href="/ochrana-osobnich-udaju" className="self-start underline decoration-cream/20 underline-offset-4 hover:text-cream/70 hover:decoration-cream/40 sm:self-auto">
        Ochrana osobních údajů
      </Link>
    </footer>
  );
}
