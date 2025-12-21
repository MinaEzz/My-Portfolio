import type { Metadata } from "next";
import Projects from "@/components/projects/Projects.page";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of projects I've built using modern web technologies, focusing on performance, accessibility, and clean user interfaces.",
};

export default function page() {
  return <Projects />;
}
