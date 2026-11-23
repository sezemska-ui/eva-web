"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONSULTATION_FORM_URL } from "./SiteJsonLd";
import { earliestDate, formatDate, isSelectable, toKey } from "@/lib/workdays";

const inputClass =
  "w-full border border-rule bg-transparent px-4 py-3 text-[15px] text-ink placeholder:text-muted focus:border-ink focus:outline-none user-invalid:border-error user-invalid:bg-error/5";
const labelClass = "mb-1.5 block text-[13px] text-ink-2";

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
        {optional && <span className="text-muted"> (nepovinné)</span>}
      </label>
      <div className="flex gap-2">
        <button
          id={id}
          type="button"
          onClick={toggle}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={`${inputClass} text-left ${value ? "" : "text-muted"} ${error ? "border-error bg-error/5" : ""}`}
        >
          {value ? formatDate(value) : "Vyberte datum"}
        </button>
        {optional && value && (
          <button
            type="button"
            onClick={() => onChange(null)}
            className="flex-none border border-rule px-3 text-[13px] text-muted hover:text-ink"
            aria-label={`Smazat: ${label}`}
          >
            ✕
          </button>
        )}
      </div>
      {error && <p className="mt-1.5 text-[13px] text-error">{error}</p>}

      {open && view && today && (
        <div
          role="dialog"
          aria-label={label}
          className="absolute left-0 z-20 mt-2 w-full max-w-[320px] border border-rule bg-paper p-3 shadow-[0_20px_50px_rgba(11,23,38,0.10)]"
        >
          <div className="mb-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}
              disabled={!canGoBack}
              aria-label="Předchozí měsíc"
              className="px-2 py-1 text-ink-2 hover:text-ink disabled:opacity-25"
            >
              ←
            </button>
            <span className="text-[14px] font-medium text-ink">
              {MONTHS[view.getMonth()]} {view.getFullYear()}
            </span>
            <button
              type="button"
              onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}
              aria-label="Další měsíc"
              className="px-2 py-1 text-ink-2 hover:text-ink"
            >
              →
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {WEEKDAY_HEADERS.map((w) => (
              <span key={w} className="py-1 font-mono text-[13px] text-muted">
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
                      ? "bg-navy text-on-navy"
                      : selectable
                        ? "text-ink hover:bg-paper-2"
                        : "cursor-not-allowed text-muted/45 line-through"
                  }`}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-[12px] text-muted">
            Víkendy a svátky nejdou vybrat. Nejdřívější termín je za 3 pracovní dny.
          </p>
        </div>
      )}
    </div>
  );
}

const PARTS_OF_DAY = ["dopoledne", "odpoledne", "je mi to jedno"] as const;

// variant="contact": krátká zpráva z /kontakt bez termínu a telefonu
export default function ConsultationForm({ variant = "consultation" }: { variant?: "consultation" | "contact" }) {
  const isContact = variant === "contact";
  const [jmeno, setJmeno] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [web, setWeb] = useState("");
  const [popis, setPopis] = useState("");
  const [obor, setObor] = useState("");
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
    if (!isContact && !termin) {
      setTerminError("Vyberte prosím navrhovaný termín.");
      return;
    }
    setStatus("sending");

    const terminText = termin ? formatDate(termin) : "";
    const termin2Text = termin2 ? formatDate(termin2) : "";
    // Apps Script zná jen pole jmeno, email, zprava, souhlas, website.
    // Nová pole proto jdou i na začátek zprávy, aby dorazila v každém případě.
    const zprava = isContact
      ? ["Zpráva z kontaktního formuláře", `Web: ${web || "—"}`, `Obor: ${obor || "—"}`, "", popis].join("\n")
      : [
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
          obor,
          termin: termin ? toKey(termin) : "",
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
      <div className="border border-rule bg-paper-2 p-6 sm:p-8">
        <p className="font-serif text-xl text-ink">
          {isContact
            ? "Díky. Ozvu se do 48 hodin v pracovní dny."
            : "Díky. Ozvu se do 48 hodin v pracovní dny a termín potvrdím e-mailem."}
        </p>
      </div>
    );
  }

  return (
    <div className="border border-rule bg-paper-2 p-6 sm:p-8">
      <h2 className="mb-2 font-serif text-2xl text-ink">
        {isContact ? "Napište mi" : "Pojďme si promluvit o vaší situaci."}
      </h2>
      <p className="mb-6 text-[15px] text-ink-2">
        {isContact
          ? "Pár vět stačí. Ozvu se do 48 hodin v pracovní dny."
          : "Napište mi pár vět o tom, co řešíte. Ozvu se do 48 hodin v pracovní dny a termín potvrdím."}
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
        {!isContact && (
        <input
          type="tel"
          placeholder="Telefon (nepovinné)"
          autoComplete="tel"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          className={inputClass}
        />
        )}
        <input
          type="url"
          required={!isContact}
          placeholder={isContact ? "Web firmy (nepovinné)" : "Web firmy, např. https://vasefirma.cz"}
          autoComplete="url"
          value={web}
          onChange={(e) => setWeb(e.target.value)}
          // Doplní https://, aby prošla kontrola adresy i bez něj
          onBlur={() => {
            if (web && !/^https?:\/\//i.test(web)) setWeb(`https://${web.trim()}`);
          }}
          className={inputClass}
        />
        {isContact && (
          <input
            type="text"
            placeholder="Obor, např. hotel, řemeslo, fotografie"
            value={obor}
            onChange={(e) => setObor(e.target.value)}
            className={inputClass}
          />
        )}
        <textarea
          required
          placeholder={isContact ? "Zpráva" : "Co řešíte?"}
          value={popis}
          onChange={(e) => setPopis(e.target.value)}
          rows={4}
          className={inputClass}
        />

        {!isContact && (<>
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
              <label key={p} className="flex items-center gap-2 text-[15px] text-ink-2">
                <input
                  type="radio"
                  name="cast_dne"
                  value={p}
                  checked={castDne === p}
                  onChange={() => setCastDne(p)}
                  className="h-4 w-4 accent-navy"
                />
                {p}
              </label>
            ))}
          </div>
        </fieldset>
        </>)}

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

        <p className="text-[13px] text-ink-2">
          Odesláním formuláře souhlasíte se{" "}
          <Link
            href="/ochrana-osobnich-udaju"
            className="underline decoration-rule hover:decoration-ink"
          >
            zpracováním osobních údajů
          </Link>
          .
        </p>

        <div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-12 items-center border border-navy bg-navy px-7 py-4 text-base font-semibold leading-none tracking-[0.02em] text-on-navy transition-colors duration-200 hover:bg-navy-2"
          >
            {status === "sending" ? "Odesílám…" : isContact ? "Odeslat zprávu" : "Odeslat a domluvit konzultaci"}
          </button>
          {!isContact && (
            <p className="mt-2 text-[13px] text-muted">Ozvu se do 48 hodin v pracovní dny a termín potvrdím.</p>
          )}
        </div>

        {status === "error" && (
          <p className="text-[13px] text-muted">
            Něco se nepovedlo. Zkuste to prosím znovu, nebo napište přímo na{" "}
            <a
              href="mailto:sezemska@searchstrategy.cz"
              className="underline decoration-rule"
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
