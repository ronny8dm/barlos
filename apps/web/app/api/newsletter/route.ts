import { Resend } from "resend"
import { NextResponse } from "next/server"
import { ConfirmationEmail } from "@/app/emails/confirmation"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!

  try {
    const { email, consentGiven } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 })
    }

    if (!consentGiven) {
      return NextResponse.json({ error: "You must agree to the terms to subscribe." }, { status: 400 })
    }

    const token =
      Buffer.from(email).toString("base64") +
      "." +
      Buffer.from(Date.now().toString()).toString("base64")

    const confirmUrl = `${BASE_URL}/api/newsletter/confirm?token=${token}`
    const unsubscribeUrl = `${BASE_URL}/api/newsletter/unsubscribe?token=${Buffer.from(email).toString("base64")}`

    // Add contact as unsubscribed until they confirm (double opt-in)
    const { error: contactError } = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: true,
      firstName: "",
      lastName: "",
    })

    if (contactError) {
      console.error("[newsletter] contacts.create error:", contactError)
      return NextResponse.json({ error: "Could not register your email. Please try again." }, { status: 500 })
    }

    // Send confirmation email
    const { error: emailError } = await resend.emails.send({
      from: `Barlo's Burgers <${FROM_EMAIL}>`,
      replyTo: FROM_EMAIL,
      to: email,
      subject: "Please confirm your Barlo's Burgers subscription",
      headers: {
        "List-Unsubscribe": `<${unsubscribeUrl}>, <mailto:${FROM_EMAIL}?subject=unsubscribe>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        "X-Entity-Ref-ID": Buffer.from(email).toString("base64"),
      },
      react: ConfirmationEmail({ confirmUrl, unsubscribeUrl }),
      text: `Hi,\n\nThanks for signing up to hear from Barlo's Burgers!\n\nPlease confirm your subscription by visiting this link:\n${confirmUrl}\n\nIf you didn't sign up, you can safely ignore this email.\n\nTo unsubscribe: ${unsubscribeUrl}\n\n— Barlo's Burgers`,
    })

    if (emailError) {
      console.error("[newsletter] emails.send error:", emailError)
      return NextResponse.json({ error: "Could not send the confirmation email. Please try again." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[newsletter] unexpected error:", err)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
