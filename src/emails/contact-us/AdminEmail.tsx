import { Link, Section, Text } from "@react-email/components";
import EmailLayout from "../EmailLayout";

export default function AdminEmail({
  fullName = "",
  email = "",
  phoneNumber = "",
  subject = "",
  message = "",
}: {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}) {
  const submissionDate = new Date().toLocaleString();
  return (
    <EmailLayout isAdmin={true}>
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
          New Contact Message 📩
        </Text>

        <Text
          style={{ fontSize: "13px", color: "#006651", textAlign: "center" }}
        >
          Submitted on {submissionDate}
        </Text>
      </Section>

      {/* Info Card */}
      <Section
        style={{
          margin: "10px auto",
          padding: "16px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
        }}
      >
        <InfoRow label="Full Name" value={fullName} />
        <InfoRow label="Email" value={email} />
        <InfoRow label="Phone" value={phoneNumber} />
        <InfoRow label="Subject" value={subject} />
      </Section>

      {/* Message */}
      <Section
        style={{
          margin: "10px auto",
          padding: "16px",
          backgroundColor: "#f6fffb",
          borderLeft: "4px solid #27e0ab",
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
          Message
        </Text>

        <Text
          style={{
            fontSize: "14px",
            color: "#0c0c0c",
            lineHeight: "1.6",
          }}
        >
          {message || "No message provided."}
        </Text>
      </Section>

      <Section style={{ textAlign: "center" }}>
        <Link
          href={`mailto:${email}?subject=Re: ${subject}`}
          style={{
            display: "inline-block",
            padding: "12px 22px",
            backgroundColor: "#27e0ab",
            color: "#000000",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "bold",
            border: "1px solid #27e0ab",
          }}
        >
          Reply to {fullName}
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
