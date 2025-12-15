import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
} from "@react-email/components";

export default function EmailLayout({
  children,
  isAdmin = false,
}: {
  children: React.ReactNode;
  isAdmin?: boolean; // Toggle for admin vs. client footer
}) {
  return (
    <Html>
      <Head />
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f3f3f3", // Light neutral for email clients
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            overflow: "hidden",
            backgroundColor: "#f6fffb", // White container for contrast
            border: `1px solid #e5e7eb`,
          }}
        >
          {/* HEADER */}
          <Section
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/hGShKbtd/mina-banner-(1).webp')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 47%",
              backgroundColor: "#0c0c0c", // --background for dark header
              textAlign: "start",
              padding: "13.7% 16px",
              position: "relative",
            }}
          >
            <h1
              style={{
                width: "75%",
                margin: "auto 0",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#ffffff", // White for contrast on dark bg
                lineHeight: "1.2",
              }}
            >
              Mina Ezzat <br /> Front-End Web Developer
            </h1>
          </Section>
          {/* ./HEADER */}

          {/* BODY */}
          <Section
            style={{
              padding: "20px",
              backgroundColor: "#f6fffb", // --primary-50 for light green accent
            }}
          >
            {children}
          </Section>
          {/* ./BODY */}

          {/* FOOTER */}
          <Section
            style={{
              marginTop: "15px",
              padding: "25px",
              textAlign: "center",
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#0c0c0c", // --background for dark footer
            }}
          >
            <Text
              style={{
                fontSize: "12px",
                color: "#a1f9d7", // --primary-200 for light green text
                marginBottom: "5px",
              }}
            >
              © {new Date().getFullYear()} Mina Ezzat. All rights reserved.
            </Text>

            <Text
              style={{
                fontSize: "12px",
                color: "#a1f9d7",
                margin: "4px 0",
              }}
            >
              📧{" "}
              <Link
                href="mailto:minaezzat98@gmail.com" // Replace with your email
                style={{
                  fontWeight: "600",
                  color: "#27e0ab", // --primary-500
                  textDecoration: "none",
                }}
              >
                minaezzat98@gmail.com
              </Link>
            </Text>

            <Text
              style={{
                fontSize: "12px",
                color: "#a1f9d7",
                margin: "4px 0",
              }}
            >
              🌐{" "}
              <Link
                href="http://dev-mina-ezzat.vercel.app/" // Replace with your site
                style={{
                  fontWeight: "600",
                  color: "#27e0ab",
                  textDecoration: "none",
                }}
              >
                Portfolio Website
              </Link>
            </Text>

            {!isAdmin && (
              <Text
                style={{
                  marginTop: "16px",
                  fontSize: "11px",
                  color: "#64f1c4", // --primary-300
                }}
              >
                This is an automated response. If you have questions, reply to
                this email.
              </Text>
            )}
            {isAdmin && (
              <Text
                style={{
                  marginTop: "16px",
                  fontSize: "11px",
                  color: "#64f1c4",
                }}
              >
                Admin notification: Contact form submission.
              </Text>
            )}
          </Section>
          {/* ./FOOTER */}
        </Container>
      </Body>
    </Html>
  );
}
