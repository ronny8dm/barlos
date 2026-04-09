"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import Link from "next/link"

const CONSENT_KEY = "barlos-cookie-consent"

type ConsentValue = "accepted" | "rejected" | null

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentValue>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue
    if (stored) {
      setConsent(stored)
    } else {
      // Small delay so banner doesn't flash before hydration
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted")
    setConsent("accepted")
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected")
    setConsent("rejected")
    setVisible(false)
  }

  return (
    <>
      {/* ── Analytics scripts — only loaded after acceptance ── */}
      {consent === "accepted" && GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {consent === "accepted" && PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {/* ── Cookie banner ── */}
      {visible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl"
          style={{ backgroundColor: "#012705" }}
        >
          <p className="text-white/80 text-xs leading-relaxed max-w-xl">
            We use cookies to analyse traffic and improve your experience. Marketing cookies (Google Analytics &amp; Meta Pixel)
            are only set with your consent.{" "}
            <Link href="/privacy#cookies" className="underline text-white hover:opacity-80 transition-opacity">
              Learn more
            </Link>
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={reject}
              style={{ border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: "8px" }}
              className="px-5 py-2.5 text-white/70 text-xs font-bold tracking-[0.15em] hover:text-white hover:border-white transition-colors whitespace-nowrap"
            >
              REJECT ALL
            </button>
            <button
              onClick={accept}
              style={{ backgroundColor: "#ffffff", color: "#012705", borderRadius: "8px" }}
              className="px-5 py-2.5 text-xs font-black tracking-[0.15em] hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              ACCEPT ALL
            </button>
          </div>
        </div>
      )}
    </>
  )
}
