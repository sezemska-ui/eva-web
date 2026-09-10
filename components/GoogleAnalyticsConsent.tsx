"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-WGZSN42B17";
const CONSENT_KEY = "cookie-consent";

export default function GoogleAnalyticsConsent() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "granted" || stored === "denied") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  function handleChoice(choice: "granted" | "denied") {
    window.localStorage.setItem(CONSENT_KEY, choice);
    setConsent(choice);
  }

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-deep/95 px-6 py-4 backdrop-blur">
          <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-cream/70">
              Tento web používá cookies pro měření návštěvnosti (Google
              Analytics). Souhlasíte s jejich použitím?
            </p>
            <div className="flex flex-none gap-3">
              <button
                type="button"
                onClick={() => handleChoice("denied")}
                className="rounded-sm border border-white/20 px-4 py-2 text-sm text-cream/70 transition-colors duration-200 hover:border-white/40"
              >
                Odmítnout
              </button>
              <button
                type="button"
                onClick={() => handleChoice("granted")}
                className="rounded-sm bg-gold px-4 py-2 text-sm font-semibold text-navy-deep transition-colors duration-200 hover:bg-gold-light"
              >
                Přijmout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
