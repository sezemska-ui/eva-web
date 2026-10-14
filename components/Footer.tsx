import Link from "next/link";

const linkClass =
  "underline decoration-cream/20 underline-offset-4 hover:text-cream/70 hover:decoration-cream/40";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-4xl flex-col gap-y-2 px-6 py-10 font-mono text-[11px] text-cream/40 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-3">
      {/* Na mobilu jméno, lokalita s IČO, odkaz na ochranu údajů a sítě pod sebou, na širokém displeji v jednom řádku */}
      <span className="flex flex-col gap-y-2 lg:block">
        <span>Eva Sezemská · AI Search Strategist</span>
        <span className="hidden lg:inline"> · </span>
        <span className="whitespace-nowrap">Mladá Boleslav · IČO 29800544</span>
      </span>
      <span className="hidden text-cream/20 lg:inline">·</span>
      <Link href="/ochrana-osobnich-udaju" className={`self-start lg:self-auto ${linkClass}`}>
        Ochrana osobních údajů
      </Link>
      <span className="hidden text-cream/20 lg:inline">·</span>
      <span className="flex gap-x-3">
        <a
          href="https://www.linkedin.com/in/eva-sezemská-466292417/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          LinkedIn
        </a>
        <span className="text-cream/20">·</span>
        <a
          href="https://www.instagram.com/searchstrategy.cz/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Instagram
        </a>
      </span>
    </footer>
  );
}
