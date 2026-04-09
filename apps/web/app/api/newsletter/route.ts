import { Resend } from "resend"
import { NextResponse } from "next/server"
import { ConfirmationEmail } from "@/app/emails/confirmation"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

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

    // Create a signed token: base64(email):base64(timestamp)
    const token = Buffer.from(email).toString("base64") +
      "." +
      Buffer.from(Date.now().toString()).toString("base64")

    const confirmUrl = `${BASE_URL}/api/newsletter/confirm?token=${token}`

    // Add contact as unsubscribed until they confirm (double opt-in)
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: true, // confirmed via email click
      firstName: "",
      lastName: "",
    })

    // Send confirmation email
    await resend.emails.send({
      from: "Barlo's Burgers <hello@barlosburgers.com>",
      to: email,
      subject: "Confirm your subscription to Barlo's Burgers",
      react: ConfirmationEmail({ confirmUrl }),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
