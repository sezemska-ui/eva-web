"use client";

import { useState } from "react";
import { CONSULTATION_FORM_URL } from "./SiteJsonLd";

export default function ConsultationForm() {
  const [jmeno, setJmeno] = useState("");
  const [email, setEmail] = useState("");
  const [zprava, setZprava] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(CONSULTATION_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ jmeno, email, zprava }),
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
          Díky za zprávu. Ozvu se vám osobně co nejdřív.
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
        Napište mi pár vět o tom, co řešíte. Ozvu se vám osobně, obvykle do
        dvou pracovních dnů.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          required
          placeholder="Jméno"
          value={jmeno}
          onChange={(e) => setJmeno(e.target.value)}
          className="rounded-sm border border-white/15 bg-transparent px-4 py-3 text-[15px] text-cream placeholder:text-cream/40 focus:border-gold/50 focus:outline-none"
        />
        <input
          type="email"
          required
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-sm border border-white/15 bg-transparent px-4 py-3 text-[15px] text-cream placeholder:text-cream/40 focus:border-gold/50 focus:outline-none"
        />
        <textarea
          required
          placeholder="Co byste chtěli probrat?"
          value={zprava}
          onChange={(e) => setZprava(e.target.value)}
          rows={4}
          className="rounded-sm border border-white/15 bg-transparent px-4 py-3 text-[15px] text-cream placeholder:text-cream/40 focus:border-gold/50 focus:outline-none"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-block self-start rounded-sm bg-cream px-6 py-3 text-sm font-semibold text-navy-deep transition-colors duration-200 hover:bg-gold-light disabled:opacity-60"
        >
          {status === "sending" ? "Odesílám…" : "Napsat Evě →"}
        </button>

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
