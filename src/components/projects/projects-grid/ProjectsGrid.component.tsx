import { PROJECTS } from "@/data";

import ProjectCard from "./project-card/ProjectCard.component";

export default function ProjectsGrid() {
  return (
    <div className="w-full grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-8">
      {PROJECTS.map((project, index) => {
        return <ProjectCard key={index} {...project} />;
      })}
    </div>
  );
}
