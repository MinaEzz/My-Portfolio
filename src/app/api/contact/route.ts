import "server-only";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render, pretty } from "@react-email/render";
import AdminEmail from "@/emails/contact-us/AdminEmail";
import ClientEmail from "@/emails/contact-us/ClientEmail";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  const { fullName, email, phoneNumber, subject, message } =
    await request.json();

  if (!fullName || !email || !phoneNumber || !subject || !message)
    return NextResponse.json(
      { status: "ERROR", message: "Missing required fields" },
      { status: 400 }
    );

  const adminEmailHtml = await pretty(
    await render(
      AdminEmail({
        fullName,
        email,
        phoneNumber,
        subject,
        message,
      })
    )
  );
  const userEmailHtml = await pretty(
    await render(ClientEmail({ name: fullName }))
  );

  // Email to admin
  await transporter.sendMail({
    from: `"Mina Ezzat | Front-End Developer" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: "New Contact Form Submission",
    html: adminEmailHtml,
  });

  // Auto-reply to client
  await transporter.sendMail({
    from: `"Mina Ezzat | Front-End Developer" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Your message has been received",
    html: userEmailHtml,
  });

  return NextResponse.json(
    {
      status: "SUCCESS",
      data: { fullName, email, phoneNumber, subject, message },
      message: "Message sent successfully",
    },
    { status: 200 }
  );
}
