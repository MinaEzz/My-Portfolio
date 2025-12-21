import type { Metadata } from "next";
import Home from "@/components/home/Home.page";

export const metadata: Metadata = {
  description:
    "Mina Ezzat is a Front-End Developer and React.js Specialist building fast, accessible, and modern web applications using React, Next.js, and Tailwind CSS.",
};

export default function page() {
  return <Home />;
}
