import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

export function ConfirmationEmail({ confirmUrl }: { confirmUrl: string }) {
  return (
    <Html>
      <Head />
      <Preview>Confirm your subscription to Barlo's Burgers</Preview>
      <Body style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ maxWidth: "560px", margin: "40px auto", backgroundColor: "#ffffff", borderRadius: "8px", overflow: "hidden" }}>

          {/* Header */}
          <Section style={{ backgroundColor: "#012705", padding: "32px 40px" }}>
            <Heading style={{ color: "#ffffff", fontSize: "28px", margin: 0, letterSpacing: "1px" }}>
              BARLO'S BURGERS
            </Heading>
          </Section>

          {/* Body */}
          <Section style={{ padding: "40px" }}>
            <Heading style={{ color: "#012705", fontSize: "22px", marginTop: 0 }}>
              One step away from the good stuff.
            </Heading>
            <Text style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
              Thanks for signing up! Click the button below to confirm your email address and join the Barlo's crew.
              You'll get exclusive discounts and event announcements straight to your inbox.
            </Text>

            <Button
              href={confirmUrl}
              style={{
                backgroundColor: "#012705",
                color: "#ffffff",
                padding: "14px 32px",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: "bold",
                letterSpacing: "2px",
                textDecoration: "none",
                display: "inline-block",
                marginTop: "8px",
              }}
            >
              CONFIRM MY SUBSCRIPTION
            </Button>

            <Hr style={{ borderColor: "#e5e5e5", margin: "32px 0" }} />

            <Text style={{ color: "#999", fontSize: "12px", lineHeight: "1.6" }}>
              If you didn't sign up for Barlo's newsletter, you can safely ignore this email —
              you won't be added to our list without confirming.
            </Text>
            <Text style={{ color: "#999", fontSize: "12px" }}>
              By confirming, you agree to our{" "}
              <a href="https://barlosburgers.com/privacy" style={{ color: "#012705" }}>
                Privacy Policy
              </a>
              . You can unsubscribe at any time.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: "#f3f3f3", padding: "20px 40px" }}>
            <Text style={{ color: "#aaa", fontSize: "11px", margin: 0 }}>
              © 2024 Barlo's Burgers. All Rights Reserved.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  )
}
