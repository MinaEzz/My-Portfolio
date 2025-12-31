import Badge from "@/ui/badge/Badge.component";
import Image from "next/image";
import ICardHeaderProps from "./CardHeader.types";

export default function CardHeader({
  image,
  title,
  projectType,
}: ICardHeaderProps) {
  return (
    <div className="w-full aspect-[1.6] relative overflow-hidden">
      <Image
        src={image}
        alt={`Thumbnail of ${title} project`}
        loading="lazy"
        fill
        className="object-cover object-center"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <div className="black-layer-to-right" />
      <Badge
        size="sm"
        variant={`${projectType === "fullstack" ? "green" : "blue"}`}
        className="absolute top-2 right-2 z-10"
      >
        {projectType === "fullstack" ? "Full Stack" : "Frontend"}
      </Badge>
    </div>
  );
}
