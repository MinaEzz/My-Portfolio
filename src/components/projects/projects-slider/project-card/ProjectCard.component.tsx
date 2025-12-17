import IProjectCardProps from "./ProjectCard.types";
import CardHeader from "./card-header/CardHeader.component";
import CardBody from "./card-body/CardBody.component";
import CardFooter from "./card-footer/CardFooter.component";

export default function ProjectCard({
  image,
  title,
  technologies,
  githubLink,
  liveDemoLink,
  projectType,
}: IProjectCardProps) {
  return (
    <article
      className="group w-full max-w-4xl flex items-stretch max-md:flex-col mx-auto rounded-2xl bg-white/5 backdrop-blur-sm border border-white/1 transition-all duration-300 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/10 overflow-hidden"
      role="article"
      aria-labelledby={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {/* header */}
      <CardHeader image={image} title={title} projectType={projectType} />
      <div className="w-full h-full flex-1 p-6 space-y-8">
        {/* body */}
        <CardBody title={title} technologies={technologies} />
        {/*footer */}
        <CardFooter githubLink={githubLink} liveDemoLink={liveDemoLink} />
      </div>
    </article>
  );
}
