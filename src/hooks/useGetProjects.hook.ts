"use client";
import type { IProjectsApiResponse, TProject } from "@/types/project.types";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

export function useGetProjects() {
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  async function fetchProjects() {
    try {
      const response = await fetch("/api/projects");
      if (!response.ok) {
        toast.error("Failed to fetch projects");
        console.error("Failed to fetch projects");
        throw new Error("Failed to fetch projects");
      }

      const data: IProjectsApiResponse = await response.json();
      if (data.status !== "SUCCESS") {
        toast.error(data.message || "Failed to fetch projects");
        console.error(data.message || "Failed to fetch projects");
        throw new Error(data.message || "Failed to fetch projects");
      }
      return (data.data as TProject[]) || [];
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message || "Failed to fetch projects");
        toast.error(error.message || "Failed to fetch projects");
      }
      console.error("Unexpected error:", error);
      toast.error("Failed to fetch projects");
    }
  }

  return { projects, isLoading };
}
