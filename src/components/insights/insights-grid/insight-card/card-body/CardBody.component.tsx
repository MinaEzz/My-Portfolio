import ICardBodyProps from "./CardBody.types";

export default function CardBody({
  title,
  excerpt,
  tags,
  publishDate,
}: ICardBodyProps) {
  return (
    <div className="w-full flex flex-col gap-3">
      <span className="s2 text-primary-400 tracking-wider uppercase">
        {publishDate}
      </span>
      <h2
        id={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="h4 text-white line-clamp-2"
      >
        {title}
      </h2>
      <p className="b4 text-white/60 line-clamp-3" dir="rtl">
        {excerpt}
      </p>
      <div className="w-full flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            title={`tag: ${tag}`}
            className="c2 rounded-md bg-primary-950/40 border border-primary-900/30 px-2 py-0.5 text-primary-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
