"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { EsMark, WRAP } from "./Ui";

const links = [
  { href: "/sluzby", label: "Služby" },
  { href: "/pro-koho", label: "Pro koho" },
  { href: "/o-mne", label: "O mně" },
  { href: "/field-notes", label: "Z praxe" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className={`${WRAP} flex items-center justify-between gap-x-8 py-3 lg:py-[18px]`}>
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-h-11 items-center gap-3 text-ink"
          aria-label="Eva Sezemská, AI Search Strategist – úvodní stránka"
        >
          <EsMark className="text-[26px] sm:text-[30px]" />
          <span className="font-serif text-[21px] sm:text-[24px]">Eva Sezemská</span>
          <span className="hidden font-mono text-[13px] tracking-[0.04em] text-muted xl:inline">
            AI Search Strategist
          </span>
        </Link>

        {/* Menu pro počítač */}
        <nav aria-label="Hlavní menu" className="hidden gap-x-6 lg:flex">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`py-3 text-base font-medium text-ink underline-offset-[6px] hover:underline hover:decoration-rule ${
                  active ? "underline decoration-gold" : ""
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Tlačítko menu pro mobil */}
        <button
          type="button"
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={open}
          aria-controls="mobilni-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Rozbalené menu pro mobil */}
      {open && (
        <nav id="mobilni-menu" aria-label="Hlavní menu" className="border-t border-rule lg:hidden">
          <ul className={`${WRAP} py-2`}>
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href} className="border-b border-rule last:border-b-0">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className="flex min-h-12 items-center justify-between font-serif text-[22px] text-ink"
                  >
                    {l.label}
                    {active && <span aria-hidden="true" className="h-[0.9em] w-[2px] bg-gold" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
