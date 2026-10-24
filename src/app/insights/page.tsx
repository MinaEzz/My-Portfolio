import type { Metadata } from "next";
import Insights from "@/components/insights/Insights.page";

export const metadata: Metadata = {
  title: "Insights",
  description: "",
};

export default function page() {
  return <Insights />;
}
