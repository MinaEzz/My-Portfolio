import "server-only";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { render, pretty } from "@react-email/render";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});
