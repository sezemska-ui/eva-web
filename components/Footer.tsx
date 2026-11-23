import Link from "next/link";
import { EsMark, WRAP } from "./Ui";

const linkClass = "py-3 underline-offset-[5px] decoration-rule hover:underline";

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className={`${WRAP} flex flex-wrap items-end justify-between gap-8 pb-14 pt-12`}>
        <div className="flex flex-col gap-4">
          <EsMark className="text-[30px] text-ink" />
          <p className="max-w-[440px] font-serif text-[17px] italic leading-normal text-muted">
            Web připravila Eva Sezemská, Mladá Boleslav, listopad 2026. Odpovědi
            AI z&nbsp;testů jsou archivované.
          </p>
          <nav aria-label="Patička" className="flex flex-wrap gap-x-6 text-[15px] font-medium text-ink">
            <Link href="/ochrana-osobnich-udaju" className={linkClass}>
              Ochrana osobních údajů
            </Link>
            <a
              href="https://www.linkedin.com/in/eva-sezemska/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/searchstrategy.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Instagram
            </a>
          </nav>
        </div>
        <address className="flex flex-col gap-1.5 font-mono text-[13px] not-italic tracking-[0.04em] text-muted">
          <span>Eva Sezemská, AI Search Strategist</span>
          <span>Havlíčkova 1490, 293&nbsp;01 Mladá Boleslav</span>
          <span>IČO 29800544</span>
          <span>searchstrategy.cz</span>
        </address>
      </div>
    </footer>
  );
}
