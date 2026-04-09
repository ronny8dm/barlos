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

export function ConfirmationEmail({ confirmUrl, unsubscribeUrl }: { confirmUrl: string; unsubscribeUrl: string }) {
  return (
    <Html>
      <Head />
      <Preview>One step away — confirm your Barlo's Burgers subscription</Preview>
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
              You're almost in the crew.
            </Heading>
            <Text style={{ color: "#444", fontSize: "15px", lineHeight: "1.6" }}>
              You recently signed up to receive news, discounts, and events from Barlo's Burgers.
              Just tap the button below to verify your email address and you're all set.
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
              YES, SUBSCRIBE ME
            </Button>

            <Text style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
              Or copy and paste this link into your browser:
            </Text>
            <Text style={{ color: "#012705", fontSize: "12px", wordBreak: "break-all" }}>
              {confirmUrl}
            </Text>

            <Hr style={{ borderColor: "#e5e5e5", margin: "32px 0" }} />

            <Text style={{ color: "#999", fontSize: "12px", lineHeight: "1.6" }}>
              Didn't sign up? No worries — just ignore this email and nothing will happen.
              Your address will not be added to our list.
            </Text>
            <Text style={{ color: "#999", fontSize: "12px" }}>
              By confirming, you agree to our{" "}
              <a href="https://barlosburgers.com/privacy" style={{ color: "#012705" }}>
                Privacy Policy
              </a>
              .
            </Text>
            <Text style={{ color: "#bbb", fontSize: "11px", marginTop: "8px" }}>
              Don't want to hear from us?{" "}
              <a href={unsubscribeUrl} style={{ color: "#999" }}>
                Unsubscribe here
              </a>
              .
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
