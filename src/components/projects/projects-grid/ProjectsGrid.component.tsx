"use client";
import { useGetProjects } from "@/hooks/useGetProjects.hook";
import ProjectCard from "./project-card/ProjectCard.component";
import { RingLoader } from "react-spinners";
import { useAppSelector } from "@/lib/store/hooks";

export default function ProjectsGrid() {
  const { projects, isLoading } = useGetProjects();
  const selected = useAppSelector((state) => state.projectsFilter.selected);

  const filteredProjects = projects.filter((project) => {
    if (selected === "all") return true;
    return project.projectType === selected;
  });

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
      {filteredProjects.map((project, index) => {
        return (
          <li key={index} className="w-full h-full">
            <ProjectCard {...project} />;
          </li>
        );
      })}
    </ul>
  );
}
