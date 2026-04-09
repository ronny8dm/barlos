import Image from "next/image"
import { MapPin, Menu } from "lucide-react"
import { NewsletterSection } from "@/components/newsletter-section"
import { NewsletterPopup } from "@/components/newsletter-popup"

export default function Page() {
  return (
    <>
    <main className="min-h-screen overflow-x-hidden" style={{ fontFamily: "var(--font-sans)" }}>

      {/* ── NAVBAR ── */}
      <nav
        style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e5e5" }}
        className="px-8 py-4 flex items-center justify-between sticky top-0 z-50"
      >
        <BarloBrand size="md" />

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#menu" dark>MENU</NavLink>
          <NavLink href="#find-us" dark>FIND US</NavLink>
          <NavLink href="#story" dark>OUR STORY</NavLink>
          <a
            href="#order"
            style={{ backgroundColor: "#012705", borderRadius: "8px" }}
            className="text-white text-xs font-bold tracking-[0.2em] px-6 py-2.5 hover:opacity-90 transition-opacity"
          >
            ORDER NOW
          </a>
        </div>

        <button className="md:hidden text-[#1C1B18]">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="relative w-full h-[480px] md:h-[580px] overflow-hidden">
        {/* Full-width background image */}
        <Image
          src="/assets/images/hero example.jpg"
          alt="Barlo's Burgers hero"
          fill
          className="object-cover object-[center_40%]"
          priority
        />

        {/* CTA overlay box — right side */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16">
          <div
            style={{ backgroundColor: "rgba(184, 212, 160, 0.93)", borderRadius: "5%" }}
            className="flex flex-col items-start px-12 py-10 w-[520px] max-w-[50%]"
          >
            <h1
              style={{ fontFamily: "var(--font-display)", lineHeight: 1.15, color: "#0a1a06" }}
              className="text-5xl md:text-6xl lg:text-7xl mb-4 tracking-wide text-left"
            >
              GOOD BEEF,<br />GOOD VIBES.
            </h1>
            <p className="text-[#1a2e14] text-xl font-medium mb-7 tracking-wide text-left">
              Worth the Wait. Every Time.
            </p>
            <div className="w-full flex justify-center">
              <a
                href="#order"
                style={{ backgroundColor: "#012705", borderRadius: "8px" }}
                className="text-white text-xs font-bold tracking-[0.2em] px-8 py-3 hover:opacity-90 transition-opacity"
              >
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASCOT ── */}
      <section id="story" className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto px-8 py-16 gap-8">

          {/* Left — mascot image */}
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/burger.svg"
              alt="Barlo's burger mascot"
              width={460}
              height={460}
              className="object-contain"
            />
          </div>

          {/* Right — text + badge */}
          <div className="flex gap-4">
            {/* Main text */}
            <div className="flex flex-col justify-center flex-1">
              <h2
                style={{ fontFamily: "var(--font-display)", color: "#012705" }}
                className="text-4xl md:text-5xl leading-tight mb-5"
              >
                MEET OUR MASCOT, THE ORIGINAL STREET-SLIDER.
              </h2>
              <p className="text-[#012705]/80 text-base font-semibold leading-relaxed mb-3">
                Barlo's Burgers is more than just food; it's an experience. We're all about quality ingredients,
                a casual atmosphere, and the perfect burger.
              </p>
              <p className="text-[#012705]/80 text-base font-semibold leading-relaxed">
                Whether you're at the game or just strolling by, we've got the good vibes covered.
              </p>
            </div>

            {/* Baseball badge — top right */}
            <div className="flex flex-col items-center gap-2 pt-1 shrink-0">
              <Image
                src="/assets/images/baseball.svg"
                alt="Barlo's Burgers badge"
                width={80}
                height={80}
                className="object-contain"
              />
              <div
                style={{ backgroundColor: "#012705", borderRadius: "6px" }}
                className="px-2 py-1 text-[9px] font-black tracking-[0.1em] text-white text-center leading-tight"
              >
                FIND US IN<br />THE KITCHEN!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR ALL-STARS ── */}
      <section
        id="menu"
        className="bg-white py-14 px-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">

          {/* Left — menu cards */}
          <div className="flex-1">
            <div
              style={{ border: "2px solid #d0d0d0", borderRadius: "10px", overflow: "hidden" }}
            >
              {/* Title inside border */}
              <h2
                style={{ fontFamily: "var(--font-display)", color: "#1C1B18", }}
                className="text-4xl text-center py-4 px-6"
              >
                OUR ALL-STARS
              </h2>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
                <MenuCard
                  emoji="🍔"
                  bg="from-[#8B4513] to-[#5C2E0A]"
                  name="MVP Burger"
                  description="Double smash patty, cheddar cheese, caramelised onions, pickles, Barlo's brioche bun"
                  price="Medium £3.50"
                />
                <MenuCard
                  emoji="🍟"
                  bg="from-[#D4A520] to-[#A0750E]"
                  name="Barlo Fries"
                  description="House seasoned fries"
                  price="Medium £3.50 / £4.50"
                />
                <MenuCard
                  emoji="🍗"
                  bg="from-[#C04A00] to-[#8B2E00]"
                  name="Buffalo Wings"
                  description="Crispy chicken wings tossed in house buffalo sauce"
                  price="12 wings — £13"
                />
              </div>

              {/* Button */}
              <div className="flex justify-center py-4 ">
                <a
                  href="#menu"
                  style={{ backgroundColor: "#012705", borderRadius: "8px" }}
                  className="px-12 py-3 text-white text-xs font-black tracking-[0.25em] text-center hover:opacity-90 transition-opacity"
                >
                  VIEW FULL MENU
                </a>
              </div>
            </div>
          </div>

          {/* Right — van + player stacked */}
          <div className="lg:w-72 flex flex-col items-center justify-end">
            <Image
              src="/assets/images/good-beef.svg"
              alt="Barlo's van"
              width={200}
              height={160}
              className="object-contain"
            />
            <Image
              src="/assets/images/player.svg"
              alt="Barlo's player"
              width={280}
              height={340}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── FIND US ── */}
      <section id="find-us" className="grid grid-cols-1 md:grid-cols-[55%_45%]">
        {/* Left — map */}
        <div
          className="relative min-h-[280px] overflow-hidden"
          style={{ backgroundColor: "#d6d2c4" }}
        >
          {/* Street grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#b8b4a8 1px, transparent 1px), linear-gradient(90deg, #b8b4a8 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          {/* Wider roads */}
          <div className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#a8a49a 2px, transparent 2px), linear-gradient(90deg, #a8a49a 2px, transparent 2px)",
              backgroundSize: "144px 144px",
            }}
          />
          {/* Map blocks */}
          <div className="absolute top-8 left-8 w-28 h-20 bg-[#c8c4b4] border border-[#b0ac9c]" />
          <div className="absolute top-8 right-12 w-20 h-28 bg-[#c8c4b4] border border-[#b0ac9c]" />
          <div className="absolute bottom-10 left-16 w-24 h-16 bg-[#c8c4b4] border border-[#b0ac9c]" />

          {/* Pin */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
            <MapPin className="w-10 h-10 text-red-600 drop-shadow-md" fill="#dc2626" />
            <div
              style={{ backgroundColor: "#1C1B18" }}
              className="text-white text-[10px] font-black tracking-[0.15em] px-4 py-2 shadow-lg"
            >
              THE GILDED LION PUB
            </div>
          </div>
        </div>

        {/* Right — details */}
        <div className="bg-white flex flex-col justify-center px-12 py-12">
          <h2
            style={{ fontFamily: "var(--font-display)", color: "#012705" }}
            className="text-5xl mb-5 leading-tight"
          >
            WHERE TO FIND US
          </h2>
          <p className="text-[#012705] text-base mb-1.5">
            Located in the kitchen of The Gilded Lion Pub.
          </p>
          <p className="text-[#012705] text-base mb-1.5 font-bold">
            Open 7 days, 12pm–10pm.
          </p>
          <p className="text-[#012705]/60 text-base mt-3">Follow our socials for updates.</p>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <NewsletterSection />

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#012705" }} className="px-10 py-4 mt-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          {/* Logo */}
          <BarloBrand size="sm" invert />

          {/* Nav links — center */}
          <div className="flex items-center gap-6">
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
          </div>

          {/* Social + copyright — right */}
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-3">
              <SocialIcon href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </SocialIcon>
            </div>
            <p className="text-white/50 text-[11px] tracking-wide">
              © 2024 Barlo's Burgers. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

    </main>

    <NewsletterPopup />
    </>
  )
}

/* ── Sub-components ── */

function BarloBrand({ size, invert = false }: { size: "sm" | "md"; invert?: boolean }) {
  const s = size === "md" ? 160 : 90
  return (
    <Image
      src="/assets/images/logo.svg"
      alt="Barlo's Burgers"
      width={s}
      height={s}
      className="object-contain"
      style={invert ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  )
}

function NavLink({ href, children, dark }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`text-xs font-bold tracking-[0.2em] hover:opacity-70 transition-opacity ${dark ? "text-[#1C1B18]" : "text-white"}`}
    >
      {children}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-400 text-xs tracking-wider hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  )
}

function MenuCard({
  emoji,
  bg,
  name,
  description,
  price,
}: {
  emoji: string
  bg: string
  name: string
  description: string
  price: string
}) {
  return (
    <div className="flex flex-col">
      <div className={`h-44 bg-gradient-to-b ${bg} flex items-center justify-center`}>
        <span className="text-6xl drop-shadow-lg">{emoji}</span>
      </div>
      <div className="p-4">
        <h3 className="text-[#1C1B18] font-black text-sm mb-1 tracking-wide">{name}</h3>
        <p className="text-gray-600 text-xs leading-relaxed mb-1">{description}</p>
        <p className="text-gray-500 text-xs font-semibold">{price}</p>
      </div>
    </div>
  )
}
