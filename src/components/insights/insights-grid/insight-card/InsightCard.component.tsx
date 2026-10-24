import CardBody from "./card-body/CardBody.component";
import CardFooter from "./card-footer/CardFooter.component";
import CardHeader from "./card-header/CardHeader.component";
import IInsightCardProps from "./InsightCard.types";

export default function InsightCard({
  image,
  title,
  excerpt,
  tags,
  linkedInLink,
  publishDate,
  readingTime,
}: IInsightCardProps) {
  return (
    <article
      className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-primary-400/20 hover:shadow-[0_0_30px_-10px_#2231FF50] overflow-hidden flex flex-col"
      role="article"
    >
      <CardHeader image={image} title={title} readingTime={readingTime} />
      <div className="w-full h-full flex-1 flex flex-col justify-between p-5 gap-4">
        <CardBody
          title={title}
          excerpt={excerpt}
          tags={tags}
          publishDate={publishDate}
        />
        <CardFooter linkedInLink={linkedInLink} />
      </div>
    </article>
  );
}
