import Button from "@/ui/button/Button.component";
import PageHeader from "../common/page-header/PageHeader.component";
import ProjectsSlider from "./projects-slider/ProjectsSlider.component";
import CTASection from "./CTA-section/CTASection.component";

export default function Projects() {
  return (
    <section className="w-full min-h-screen pd-y-s lg:px-16">
      <div className="container">
        <div className="w-full flex flex-col gap-8">
          <PageHeader
            title="Projects"
            desc="A selection of projects I've built using modern web technologies, focusing on performance, usability, and clean user interfaces."
          />
          <ProjectsSlider />
          <CTASection />
        </div>
      </div>
    </section>
  );
}
