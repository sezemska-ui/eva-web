"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONSULTATION_FORM_URL } from "./SiteJsonLd";
import { earliestDate, formatDate, isSelectable, toKey } from "@/lib/workdays";

const inputClass =
  "w-full rounded-sm border border-white/15 bg-transparent px-4 py-3 text-[15px] text-cream placeholder:text-cream/40 focus:border-gold/50 focus:outline-none";
const labelClass = "mb-1.5 block text-[13px] text-cream/70";

const MONTHS = [
  "leden", "únor", "březen", "duben", "květen", "červen",
  "červenec", "srpen", "září", "říjen", "listopad", "prosinec",
];
const WEEKDAY_HEADERS = ["po", "út", "st", "čt", "pá", "so", "ne"];

// Výběr data: víkendy, svátky a dny před nejbližším možným termínem nejdou vybrat
function DatePicker({
  id,
  label,
  value,
  onChange,
  optional,
  error,
}: {
  id: string;
  label: string;
  value: Date | null;
  onChange: (d: Date | null) => void;
  optional?: boolean;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<Date | null>(null);
  const [today, setToday] = useState<Date | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  function toggle() {
    if (!open) {
      // „Dnes“ se počítá až v prohlížeči, stránka je předgenerovaná při buildu
      const now = new Date();
      const start = value ?? earliestDate(now);
      setToday(now);
      setView(new Date(start.getFullYear(), start.getMonth(), 1));
    }
    setOpen((o) => !o);
  }

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const days: (Date | null)[] = [];
  if (view) {
    const offset = (view.getDay() + 6) % 7; // pondělí jako první den
    for (let i = 0; i < offset; i++) days.push(null);
    const count = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    for (let d = 1; d <= count; d++) days.push(new Date(view.getFullYear(), view.getMonth(), d));
  }
  const earliest = today ? earliestDate(today) : null;
  const canGoBack =
    view && earliest
      ? view.getFullYear() * 12 + view.getMonth() > earliest.getFullYear() * 12 + earliest.getMonth()
      : false;

  return (
    <div ref={rootRef} className="relative">
      <label htmlFor={id} className={labelClass}>
        {label}
        {optional && <span className="text-cream/40"> (nepovinné)</span>}
      </label>
      <div className="flex gap-2">
        <button
          id={id}
          type="button"
          onClick={toggle}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={`${inputClass} text-left ${value ? "" : "text-cream/40"}`}
        >
          {value ? formatDate(value) : "Vyberte datum"}
        </button>
        {optional && value && (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="flex-none rounded-sm border border-white/15 px-3 text-[13px] text-cream/60 hover:text-cream"
            aria-label={`Smazat: ${label}`}
          >
            ✕
          </button>
        )}
      </div>
      {error && <p className="mt-1.5 text-[13px] text-gold-light">{error}</p>}

      {open && view && today && (
        <div
          role="dialog"
          aria-label={label}
          className="absolute left-0 z-20 mt-2 w-full max-w-[320px] rounded-sm border border-white/15 bg-navy-deep p-3 shadow-xl"
        >
          <div className="mb-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
              disabled={!canGoBack}
              aria-label="Předchozí měsíc"
              className="rounded-sm px-2 py-1 text-cream/70 hover:text-cream disabled:opacity-25"
            >
              ←
            </button>
            <span className="text-[14px] text-cream">
              {MONTHS[view.getMonth()]} {view.getFullYear()}
            </span>
            <button
              type="button"
              onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
              aria-label="Další měsíc"
              className="rounded-sm px-2 py-1 text-cream/70 hover:text-cream"
            >
              →
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {WEEKDAY_HEADERS.map((w) => (
              <span key={w} className="py-1 font-mono text-[11px] uppercase text-cream/40">
                {w}
              </span>
            ))}
            {days.map((d, i) => {
              if (!d) return <span key={`e${i}`} />;
              const selectable = isSelectable(d, today);
              const selected = value && toKey(value) === toKey(d);
              return (
                <button
                  key={toKey(d)}
                  type="button"
                  disabled={!selectable}
                  onClick={() => {
                    onChange(d);
                    setOpen(false);
                  }}
                  aria-label={formatDate(d)}
                  aria-pressed={!!selected}
                  className={`rounded-sm py-2 text-[14px] transition-colors ${
                    selected
                      ? "bg-gold text-navy-deep"
                      : selectable
                        ? "text-cream hover:bg-white/10"
                        : "cursor-not-allowed text-cream/20 line-through"
                  }`}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-[12px] text-cream/45">
            Víkendy a svátky nejdou vybrat. Nejdřívější termín je za 3 pracovní dny.
          </p>
        </div>
      )}
    </div>
  );
}

const PARTS_OF_DAY = ["dopoledne", "odpoledne", "je mi to jedno"] as const;

export default function ConsultationForm() {
  const [jmeno, setJmeno] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [web, setWeb] = useState("");
  const [popis, setPopis] = useState("");
  const [termin, setTermin] = useState<Date | null>(null);
  const [termin2, setTermin2] = useState<Date | null>(null);
  const [castDne, setCastDne] = useState<(typeof PARTS_OF_DAY)[number]>("je mi to jedno");
  const [terminError, setTerminError] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — skryté pole pro roboty
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!termin) {
      setTerminError("Vyberte prosím navrhovaný termín.");
      return;
    }
    setStatus("sending");

    const terminText = formatDate(termin);
    const termin2Text = termin2 ? formatDate(termin2) : "";
    // Apps Script zná jen pole jmeno, email, zprava, souhlas, website.
    // Nová pole proto jdou i na začátek zprávy, aby dorazila v každém případě.
    const zprava = [
      `Telefon: ${telefon || "—"}`,
      `Web: ${web}`,
      `Termín: ${terminText}`,
      `Druhý termín: ${termin2Text || "—"}`,
      `Část dne: ${castDne}`,
      "",
      popis,
    ].join("\n");

    try {
      await fetch(CONSULTATION_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          jmeno,
          email,
          zprava,
          souhlas: true, // souhlas je dán odesláním formuláře
          website,
          telefon,
          web,
          termin: toKey(termin),
          termin2: termin2 ? toKey(termin2) : "",
          cast_dne: castDne,
        }),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-gold/30 bg-white/5 p-6 sm:p-8">
        <p className="font-serif text-xl text-cream">
          Díky. Ozvu se do 24 hodin v pracovní dny a termín potvrdím e-mailem.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-sm border border-gold/30 bg-white/5 p-6 sm:p-8">
      <h2 className="mb-2 font-serif text-2xl text-cream">
        Pojďme si promluvit o vaší situaci.
      </h2>
      <p className="mb-6 text-[15px] text-cream/70">
        Napište mi pár vět o tom, co řešíte. Ozvu se do 24 hodin v pracovní dny
        a termín potvrdím.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          required
          placeholder="Jméno"
          autoComplete="name"
          value={jmeno}
          onChange={(e) => setJmeno(e.target.value)}
          className={inputClass}
        />
        <input
          type="email"
          required
          placeholder="E-mail"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Telefon (nepovinné)"
          autoComplete="tel"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          className={inputClass}
        />
        <input
          type="url"
          required
          placeholder="Web firmy, např. https://vasefirma.cz"
          autoComplete="url"
          value={web}
          onChange={(e) => setWeb(e.target.value)}
          // Doplní https://, aby prošla kontrola adresy i bez něj
          onBlur={() => {
            if (web && !/^https?:\/\//i.test(web)) setWeb(`https://${web.trim()}`);
          }}
          className={inputClass}
        />
        <textarea
          required
          placeholder="Co řešíte?"
          value={popis}
          onChange={(e) => setPopis(e.target.value)}
          rows={4}
          className={inputClass}
        />

        <DatePicker
          id="termin"
          label="Navrhovaný termín"
          value={termin}
          onChange={(d) => {
            setTermin(d);
            setTerminError("");
          }}
          error={terminError}
        />
        <DatePicker
          id="termin2"
          label="Druhý možný termín"
          value={termin2}
          onChange={setTermin2}
          optional
        />

        <fieldset>
          <legend className={labelClass}>Část dne</legend>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {PARTS_OF_DAY.map((p) => (
              <label key={p} className="flex items-center gap-2 text-[15px] text-cream/80">
                <input
                  type="radio"
                  name="cast_dne"
                  value={p}
                  checked={castDne === p}
                  onChange={() => setCastDne(p)}
                  className="h-4 w-4 accent-gold"
                />
                {p}
              </label>
            ))}
          </div>
        </fieldset>

        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
        />

        <p className="text-[13px] text-cream/70">
          Odesláním formuláře souhlasíte se{" "}
          <Link
            href="/ochrana-osobnich-udaju"
            className="underline decoration-gold/50 hover:decoration-gold"
          >
            zpracováním osobních údajů
          </Link>
          .
        </p>

        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-block rounded-sm bg-cream px-6 py-3 text-sm font-semibold text-navy-deep transition-colors duration-200 hover:bg-gold-light disabled:opacity-60"
          >
            {status === "sending" ? "Odesílám…" : "Odeslat a domluvit konzultaci"}
          </button>
          <p className="mt-2 text-[13px] text-cream/60">
            Ozvu se do 24 hodin v pracovní dny a termín potvrdím.
          </p>
        </div>

        {status === "error" && (
          <p className="text-[13px] text-cream/60">
            Něco se nepovedlo. Zkuste to prosím znovu, nebo napište přímo na{" "}
            <a
              href="mailto:sezemska@searchstrategy.cz"
              className="underline decoration-gold/50"
            >
              sezemska@searchstrategy.cz
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
