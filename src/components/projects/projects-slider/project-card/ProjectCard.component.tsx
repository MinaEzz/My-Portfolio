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
  isPrivate,
}: IProjectCardProps) {
  return (
    <article
      className="max-w-4xl min-h-[15rem] flex max-md:flex-col mx-auto rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-primary-400/20 hover:shadow-[0_0_30px_-10px_#2231FF50] overflow-hidden"
      role="article"
      aria-labelledby={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {/* header */}
      <CardHeader image={image} title={title} projectType={projectType} />
      <div className="w-full flex-1 flex flex-col justify-between gap-8 p-6">
        {/* body */}
        <CardBody title={title} technologies={technologies} />
        {/*footer */}
        <CardFooter
          githubLink={githubLink}
          liveDemoLink={liveDemoLink}
          isPrivate={isPrivate}
        />
      </div>
    </article>
  );
}
