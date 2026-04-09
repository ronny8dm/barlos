import { Resend } from "resend"
import { NextResponse } from "next/server"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"

export async function GET(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!

  try {
    const { searchParams } = new URL(req.url)
    const token = searchParams.get("token")

    if (!token) {
      return NextResponse.redirect(`${BASE_URL}/newsletter/invalid`)
    }

    const email = Buffer.from(token, "base64").toString()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.redirect(`${BASE_URL}/newsletter/invalid`)
    }

    // Mark contact as unsubscribed in Resend audience
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: true,
    })

    return NextResponse.redirect(`${BASE_URL}/newsletter/unsubscribed`)
  } catch (err) {
    console.error("[unsubscribe] error:", err)
    return NextResponse.redirect(`${BASE_URL}/newsletter/invalid`)
  }
}
