"use client";
import { IProjectsApiResponse, TProject } from "@/types/project.types";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export function useGetProjects() {
  const [projects, setProjects] = useState<TProject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchProjects() {
    try {
      setIsLoading(true);
      const response = await fetch("/api/projects");
      if (!response.ok) {
        console.error("Failed to fetch projects");
        throw new Error("Failed to fetch projects");
      }

      const data: IProjectsApiResponse = await response.json();
      if (data.status !== "SUCCESS") {
        console.error("Failed to fetch projects");
        toast.error(data.message || "Failed to fetch projects");
        throw new Error(data.message || "Failed to fetch projects");
      }
      setProjects(data.data || []);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || "Failed to fetch projects");
      }
      toast.error("Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, isLoading };
}
