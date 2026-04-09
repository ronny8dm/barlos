"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-[#1C1B18] p-1"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: "#012705" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Image
            src="/assets/images/logo.svg"
            alt="Barlo's Burgers"
            width={80}
            height={80}
            className="object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <button
            onClick={() => setOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 py-8 gap-2 flex-1">
          {[
            { label: "MENU", href: "#menu" },
            { label: "FIND US", href: "#find-us" },
            { label: "OUR STORY", href: "#story" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-sm font-black tracking-[0.2em] py-4 border-b border-white/10 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-6 pb-10">
          <a
            href="#order"
            onClick={() => setOpen(false)}
            style={{ backgroundColor: "#ffffff", color: "#012705", borderRadius: "8px" }}
            className="block w-full text-center py-4 text-xs font-black tracking-[0.2em] hover:opacity-90 transition-opacity"
          >
            ORDER NOW
          </a>
        </div>
      </div>
    </>
  )
}
