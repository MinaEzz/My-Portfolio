import ICardBodyProps from "./CardBody.types";

export default function CardBody({ title, technologies }: ICardBodyProps) {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h2
        id={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="h4 text-white"
      >
        {title}
      </h2>
      <div className="w-full flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            title={`Technology: ${tech}`}
            role="listitem"
            className="c2 rounded-md bg-white/10 px-2.5 py-1 text-white/80 transition hover:bg-white/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
