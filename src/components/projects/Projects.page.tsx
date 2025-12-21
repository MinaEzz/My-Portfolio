import PageHeader from "../common/page-header/PageHeader.component";
import ProjectsGrid from "./projects-grid/ProjectsGrid.component";

export default function Projects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="w-full min-h-screen pd-y-s lg:px-16"
    >
      <div className="container">
        <div className="w-full flex flex-col gap-8">
          <PageHeader
            id="projects-heading"
            title="Projects"
            desc="A selection of projects I've built using modern web technologies, focusing on performance, usability, and clean user interfaces."
          />
          <ProjectsGrid />
        </div>
      </div>
    </section>
  );
}
