import CardBody from "./card-body/CardBody.component";
import CardFooter from "./card-footer/CardFooter.component";
import CardHeader from "./card-header/CardHeader.component";
import IProjectCardProps from "./ProjectCard.types";

export default function ProjectCard({
  image,
  title,
  projectType,
  technologies,
  isPrivate,
  githubLink,
  liveDemoLink,
}: IProjectCardProps) {
  return (
    <article
      className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-primary-400/20 hover:shadow-[0_0_30px_-10px_#2231FF50] overflow-hidden flex flex-col"
      role="article"
      aria-labelledby={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <CardHeader image={image} title={title} projectType={projectType} />
      <div className="w-full h-full flex-1 bg-black flex flex-col justify-between p-5 gap-4">
        <CardBody title={title} technologies={technologies} />
        <CardFooter
          githubLink={githubLink}
          liveDemoLink={liveDemoLink}
          isPrivate={isPrivate}
        />
      </div>
    </article>
  );
}
