import { Section, Text, Link } from "@react-email/components";
import EmailLayout from "../EmailLayout";

export default function ClientEmail({ name = "" }: { name: string }) {
  const responseTime = "within 24 hours"; // Customize as needed
  const displayName = name || "there"; // Fallback for missing name
  return (
    <EmailLayout>
      {/* Header */}
      <Section>
        <Text
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#0c0c0c",
            marginBottom: "6px",
            textAlign: "center",
          }}
        >
          Thanks for Reaching Out, {displayName}! 🙌
        </Text>
        <Text
          style={{ fontSize: "13px", color: "#006651", textAlign: "center" }}
        >
          Received on {new Date().toLocaleString()}
        </Text>
      </Section>

      {/* Thank-You Message */}
      <Section
        style={{
          margin: "10px auto",
          padding: "14px",
          backgroundColor: "#f6fffb", // Light green background for warmth
          borderLeft: "4px solid #27e0ab", // --primary-500 accent
        }}
      >
        <Text
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            marginBottom: "8px",
            color: "#0c0c0c",
          }}
        >
          Your Message Has Been Received
        </Text>
        <Text
          style={{
            fontSize: "14px",
            color: "#0c0c0c",
            lineHeight: "1.6",
          }}
        >
          Hi {displayName}, thank you for contacting me! I&apos;ve received your
          message and appreciate you taking the time to reach out. I&apos;ll
          review it and get back to you {responseTime}.
        </Text>
        <Text
          style={{
            fontSize: "14px",
            color: "#0c0c0c",
            lineHeight: "1.6",
            marginTop: "10px",
          }}
        >
          In the meantime, feel free to explore my portfolio for more about my
          work and projects.
        </Text>
      </Section>

      {/* Quick Info */}
      <Section
        style={{
          margin: "16px auto 10px",
          padding: "16px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
        }}
      >
        <InfoRow
          label="What Happens Next"
          value="I'll respond personally with more details."
        />
        <InfoRow
          label="Need Urgent Help?"
          value="Reply to this email for faster assistance."
        />
      </Section>

      <Section style={{ textAlign: "center" }}>
        <Link
          href="http://dev-mina-ezzat.vercel.app/" // Replace with your actual portfolio URL
          style={{
            display: "inline-block",
            padding: "12px 22px",
            backgroundColor: "#27e0ab", // --primary-500
            color: "#000000",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "bold",
            border: "1px solid #27e0ab",
          }}
        >
          Visit My Portfolio
        </Link>
      </Section>
    </EmailLayout>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <Text
      style={{
        fontSize: "14px",
        marginBottom: "8px",
        color: "#0c0c0c",
      }}
    >
      <strong style={{ color: "#00a27b" }}>{label}:</strong>{" "}
      {value || "Not provided"}
    </Text>
  );
}
