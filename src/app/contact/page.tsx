import type { Metadata } from "next";
import Contact from "@/components/contact/Contact.page";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with me for any inquiries or collaborations. I'd love to connect with you!",
};

export default function page() {
  return <Contact />;
}
