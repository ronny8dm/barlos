import Image from "next/image"
import Link from "next/link"

export default function InvalidPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center" style={{ backgroundColor: "#012705" }}>
      <Image src="/assets/images/logo.svg" alt="Barlo's Burgers" width={100} height={100} className="object-contain mb-8" style={{ filter: "brightness(0) invert(1)" }} />
      <h1 style={{ fontFamily: "var(--font-display)" }} className="text-white text-5xl mb-4">
        INVALID LINK.
      </h1>
      <p className="text-white/70 text-base max-w-sm mb-8">
        This confirmation link is invalid or has already been used. Please sign up again.
      </p>
      <Link
        href="/"
        style={{ backgroundColor: "#ffffff", color: "#012705", borderRadius: "8px" }}
        className="px-8 py-3 text-xs font-black tracking-[0.2em] hover:opacity-90 transition-opacity"
      >
        BACK TO HOME
      </Link>
    </main>
  )
}
