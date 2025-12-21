import type { Metadata } from "next";
import About from "@/components/about/About.page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Mina Ezzat, a Front-End Developer with Full Stack experience specializing in React, Next.js, performance optimization, and accessible web development.",
};

export default function page() {
  return <About />;
}
