"use client";
import { useGetInsights } from "@/hooks/useGetInsights.hook";
import { RingLoader } from "react-spinners";
import InsightCard from "./insight-card/InsightCard.component";

export default function InsightsGrid() {
  const { insights, isLoading } = useGetInsights();

  if (isLoading)
    return (
      <div className="w-full flex flex-col items-center text-center gap-2">
        <RingLoader size={100} color="#27e0ab" className="mx-auto" />
        <p className="s2 text-white/80 capitalize">Loading...</p>
      </div>
    );

  return (
    <ul
      className="w-full grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8"
      role="list"
    >
      {insights.map((insight, index) => {
        return (
          <li key={index} className="w-full h-full">
            <InsightCard {...insight} />
          </li>
        );
      })}
    </ul>
  );
}
