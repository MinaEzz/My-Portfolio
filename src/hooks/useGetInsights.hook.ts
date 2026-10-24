"use client";
import { IInsightsApiResponse, TInsight } from "@/types/insight.types";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useGetInsights() {
  const { data: insights = [], isLoading } = useQuery({
    queryKey: ["insights"],
    queryFn: fetchInsights,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  async function fetchInsights() {
    try {
      const response = await fetch("/api/insights");
      if (!response.ok) {
        toast.error("Failed to fetch insights");
        console.error("Failed to fetch insights");
        throw new Error("Failed to fetch insights");
      }

      const data: IInsightsApiResponse = await response.json();
      if (data.status !== "SUCCESS") {
        toast.error(data.message || "Failed to fetch insights");
        console.error(data.message || "Failed to fetch insights");
        throw new Error(data.message || "Failed to fetch insights");
      }
      return (data.data as TInsight[]) || [];
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message || "Failed to fetch insights");
        toast.error(error.message || "Failed to fetch insights");
      }
      console.error("Unexpected error:", error);
      toast.error("Failed to fetch insights");
    }
  }

  return { insights, isLoading };
}
