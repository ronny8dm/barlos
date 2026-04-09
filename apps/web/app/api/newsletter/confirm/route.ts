import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get("token")

    if (!token || !token.includes(".")) {
      return NextResponse.redirect(`${BASE_URL}/newsletter/invalid`)
    }

    const emailB64 = token.split(".")[0]
    if (!emailB64) return NextResponse.redirect(`${BASE_URL}/newsletter/invalid`)
    const email = Buffer.from(emailB64, "base64").toString()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.redirect(`${BASE_URL}/newsletter/invalid`)
    }

    // Mark contact as subscribed
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    })

    return NextResponse.redirect(`${BASE_URL}/newsletter/confirmed`)
  } catch {
    return NextResponse.redirect(`${BASE_URL}/newsletter/invalid`)
  }
}
