"use client"

import { useState } from "react"
import Link from "next/link"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) {
      setErrorMsg("Please agree to the terms to subscribe.")
      return
    }
    setStatus("loading")
    setErrorMsg("")

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, consentGiven: consent }),
    })

    const data = await res.json()

    if (res.ok) {
      setStatus("success")
      setEmail("")
      setConsent(false)
    } else {
      setStatus("error")
      setErrorMsg(data.error ?? "Something went wrong.")
    }
  }

  return (
    <section style={{ backgroundColor: "#012705" }} className="px-8 py-14">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-white/60 text-xs font-bold tracking-[0.25em] mb-3">JOIN THE CREW</p>
        <h2
          style={{ fontFamily: "var(--font-display)", lineHeight: 1.05 }}
          className="text-white text-5xl mb-4"
        >
          GET EXCLUSIVE DEALS<br />&amp; EVENT UPDATES.
        </h2>
        <p className="text-white/70 text-sm mb-8">
          Sign up for discounts, event announcements, and good vibes straight to your inbox.
        </p>

        {status === "success" ? (
          <div className="text-center">
            <div style={{ fontFamily: "var(--font-display)" }} className="text-white text-3xl mb-2">
              CHECK YOUR INBOX!
            </div>
            <p className="text-white/60 text-sm">We've sent you a confirmation email. Click the link to complete your sign up.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg text-sm text-[#012705] bg-white outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                disabled={status === "loading" || !consent}
                style={{ backgroundColor: "#ffffff", color: "#012705", borderRadius: "8px" }}
                className="px-8 py-3 text-xs font-black tracking-[0.2em] hover:opacity-90 transition-opacity disabled:opacity-40 whitespace-nowrap"
              >
                {status === "loading" ? "SIGNING UP..." : "SIGN ME UP"}
              </button>
            </div>

            {/* GDPR consent */}
            <label className="flex items-start gap-3 cursor-pointer text-left">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded accent-white shrink-0"
              />
              <span className="text-white/60 text-xs leading-relaxed">
                I agree to receive marketing emails from Barlo's Burgers and confirm I have read the{" "}
                <Link href="/privacy" className="underline text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                . I can unsubscribe at any time.
              </span>
            </label>

            {errorMsg && <p className="text-red-300 text-xs mt-3">{errorMsg}</p>}
          </form>
        )}
      </div>
    </section>
  )
}
