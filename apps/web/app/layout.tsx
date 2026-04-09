import { Inter, Geist_Mono, Anton } from "next/font/google"
import type { Metadata } from "next"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils";
import { CookieConsent } from "@/components/cookie-consent"

export const metadata: Metadata = {
  title: "Barlo's Burgers | Good Beef, Good Vibes",
  description: "Quality smash burgers, seasoned fries & buffalo wings served from the kitchen of The Gilded Lion Pub. Open 7 days, 12pm–10pm. Worth the wait. Every time.",
  keywords: ["burgers", "smash burgers", "Barlo's Burgers", "The Gilded Lion Pub", "buffalo wings", "fries", "street food"],
  openGraph: {
    title: "Barlo's Burgers | Good Beef, Good Vibes",
    description: "Quality smash burgers, seasoned fries & buffalo wings. Open 7 days, 12pm–10pm.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barlo's Burgers | Good Beef, Good Vibes",
    description: "Quality smash burgers, seasoned fries & buffalo wings. Open 7 days, 12pm–10pm.",
  },
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, inter.variable, anton.variable)}
    >
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
