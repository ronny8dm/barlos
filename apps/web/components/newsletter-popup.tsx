"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("newsletter-dismissed")) return
    const t = setTimeout(() => setVisible(true), 4000)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    setVisible(false)
    sessionStorage.setItem("newsletter-dismissed", "1")
  }

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
      sessionStorage.setItem("newsletter-dismissed", "1")
    } else {
      setStatus("error")
      setErrorMsg(data.error ?? "Something went wrong.")
    }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.55)" }}>
      <div className="relative bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">

        {/* Header */}
        <div style={{ backgroundColor: "#012705" }} className="px-8 pt-8 pb-6 text-white relative">
          <button
            onClick={dismiss}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <p className="text-xs font-bold tracking-[0.2em] mb-2 text-white/70">JOIN THE CREW</p>
          <h2
            style={{ fontFamily: "var(--font-display)", lineHeight: 1.05 }}
            className="text-4xl"
          >
            GET EXCLUSIVE<br />DEALS &amp; EVENTS.
          </h2>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {status === "success" ? (
            <div className="text-center py-4">
              <div style={{ fontFamily: "var(--font-display)", color: "#012705" }} className="text-3xl mb-2">
                CHECK YOUR INBOX!
              </div>
              <p className="text-gray-500 text-sm">We've sent you a confirmation email. Click the link to complete your sign up.</p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 text-sm mb-5">
                Sign up for early access to discounts, event announcements, and good vibes straight to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#012705] transition-colors"
                />

                {/* GDPR consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded shrink-0"
                    style={{ accentColor: "#012705" }}
                  />
                  <span className="text-gray-400 text-xs leading-relaxed">
                    I agree to receive marketing emails from Barlo's Burgers and confirm I have read the{" "}
                    <Link href="/privacy" className="underline text-[#012705] hover:opacity-70 transition-opacity">
                      Privacy Policy
                    </Link>
                    . I can unsubscribe at any time.
                  </span>
                </label>

                {errorMsg && <p className="text-red-500 text-xs">{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={status === "loading" || !consent}
                  style={{ backgroundColor: "#012705", borderRadius: "8px" }}
                  className="w-full py-3 text-white text-xs font-black tracking-[0.2em] hover:opacity-90 transition-opacity disabled:opacity-40"
                >
                  {status === "loading" ? "SIGNING UP..." : "SIGN ME UP"}
                </button>
              </form>
              <button
                onClick={dismiss}
                className="w-full text-center text-gray-400 text-xs mt-3 hover:text-gray-600 transition-colors"
              >
                No thanks
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  )
}
