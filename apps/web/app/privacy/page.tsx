import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy — Barlo's Burgers",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <header style={{ backgroundColor: "#012705" }} className="px-8 py-5 flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt="Barlo's Burgers" width={90} height={90} className="object-contain" style={{ filter: "brightness(0) invert(1)" }} />
        </Link>
        <Link href="/" className="text-white/70 text-xs font-bold tracking-[0.2em] hover:text-white transition-colors">
          ← BACK TO HOME
        </Link>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 py-16">
        <h1 style={{ fontFamily: "var(--font-display)", color: "#012705" }} className="text-5xl mb-2">
          PRIVACY POLICY
        </h1>
        <p className="text-gray-400 text-sm mb-12">Last updated: April 2024</p>

        <Section title="1. Who We Are">
          <p>
            Barlo's Burgers operates from the kitchen of The Gilded Lion Pub. We are the data controller
            responsible for your personal data collected through this website.
          </p>
          <p className="mt-2">
            For any privacy-related queries, contact us at:{" "}
            <a href="mailto:privacy@barlosburgers.com" className="text-[#012705] underline">
              privacy@barlosburgers.com
            </a>
          </p>
        </Section>

        <Section title="2. What Data We Collect">
          <p>We collect the following personal data:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Email address</strong> — when you sign up for our newsletter</li>
            <li><strong>Consent record</strong> — the date and time you gave consent to receive marketing emails</li>
          </ul>
          <p className="mt-2">We do not collect payment data, location data, or any sensitive personal data.</p>
        </Section>

        <Section title="3. How We Use Your Data">
          <p>We use your email address to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Send you exclusive discounts and promotional offers</li>
            <li>Notify you of upcoming events and announcements</li>
          </ul>
          <p className="mt-2">
            We will never sell, rent, or share your personal data with third parties for their own marketing purposes.
          </p>
        </Section>

        <Section title="4. Legal Basis for Processing">
          <p>
            We process your personal data on the basis of <strong>consent</strong> (Article 6(1)(a) GDPR).
            You gave explicit consent when you ticked the opt-in checkbox and submitted the newsletter sign-up form.
            You can withdraw your consent at any time by unsubscribing.
          </p>
        </Section>

        <Section title="5. Double Opt-In">
          <p>
            We use a double opt-in process. After submitting your email address, you will receive a confirmation email.
            Your email will not be added to our mailing list until you click the confirmation link.
            This ensures we only contact people who have actively chosen to hear from us.
          </p>
        </Section>

        <Section title="6. Third-Party Services">
          <p>
            We use <strong>Resend</strong> (resend.com) to manage our mailing list and send emails.
            Your email address is stored on Resend's servers. Resend is GDPR-compliant and acts as a
            data processor on our behalf. You can review their privacy policy at{" "}
            <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#012705] underline">
              resend.com/legal/privacy-policy
            </a>.
          </p>
        </Section>

        <Section title="7. How Long We Keep Your Data">
          <p>
            We will retain your email address on our mailing list until you unsubscribe or request deletion.
            Upon unsubscribing, your data will be removed from our active mailing list within 30 days.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>Under GDPR, you have the right to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
            <li><strong>Rectification</strong> — request correction of inaccurate data</li>
            <li><strong>Erasure</strong> — request deletion of your personal data ("right to be forgotten")</li>
            <li><strong>Restrict processing</strong> — request we limit how we use your data</li>
            <li><strong>Data portability</strong> — request your data in a machine-readable format</li>
            <li><strong>Withdraw consent</strong> — unsubscribe at any time via the link in any email we send</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, email us at{" "}
            <a href="mailto:privacy@barlosburgers.com" className="text-[#012705] underline">
              privacy@barlosburgers.com
            </a>
            . We will respond within 30 days.
          </p>
        </Section>

        <div id="cookies">
          <Section title="9. Cookies">
            <p>We use the following categories of cookies:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                <strong>Essential cookies</strong> — required for the website to function. These cannot be disabled.
              </li>
              <li>
                <strong>Analytics cookies (Google Analytics)</strong> — help us understand how visitors interact with our website
                (pages visited, time on site, traffic sources). IP addresses are anonymised. Data is processed by Google LLC.
                See{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#012705] underline">
                  Google's Privacy Policy
                </a>.
              </li>
              <li>
                <strong>Marketing cookies (Meta Pixel)</strong> — allow us to measure the effectiveness of our advertising
                on Facebook and Instagram, and to show relevant ads to people who have visited our site.
                Data is processed by Meta Platforms, Inc. See{" "}
                <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-[#012705] underline">
                  Meta's Privacy Policy
                </a>.
              </li>
            </ul>
            <p className="mt-3">
              Analytics and marketing cookies are only set <strong>after you give explicit consent</strong> via the
              cookie banner. You can withdraw consent at any time by clearing your browser's local storage or
              contacting us at{" "}
              <a href="mailto:privacy@barlosburgers.com" className="text-[#012705] underline">
                privacy@barlosburgers.com
              </a>.
            </p>
          </Section>
        </div>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. The date at the top of this page will
            reflect any changes. Continued use of our newsletter after changes are made constitutes
            acceptance of the updated policy.
          </p>
        </Section>

        <Section title="11. Contact & Complaints">
          <p>
            If you have concerns about how we handle your data, please contact us at{" "}
            <a href="mailto:privacy@barlosburgers.com" className="text-[#012705] underline">
              privacy@barlosburgers.com
            </a>.
          </p>
          <p className="mt-2">
            You also have the right to lodge a complaint with your national data protection authority.
            In the UK, this is the Information Commissioner's Office (ICO):{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#012705] underline">
              ico.org.uk
            </a>.
          </p>
        </Section>

      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#012705" }} className="px-8 py-5 text-center">
        <p className="text-white/40 text-xs">© 2024 Barlo's Burgers. All Rights Reserved.</p>
      </footer>

    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 style={{ color: "#012705" }} className="text-lg font-black mb-3 tracking-wide">
        {title}
      </h2>
      <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
    </div>
  )
}
