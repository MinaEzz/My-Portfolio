import Badge from "@/ui/badge/Badge.component";
import Image from "next/image";

export default function CardHeader({ image, title, projectType }) {
  return (
    <div className="w-full md:w-[40%] aspect-[16/10] relative overflow-hidden">
      <Image
        src={image}
        alt={`Thumbnail of ${title} project`}
        loading="lazy"
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="black-layer-to-right" />
      <Badge
        size="sm"
        variant={`${projectType === "fullstack" ? "green" : "blue"}`}
        className="absolute top-2 right-4 z-10"
      >
        {projectType === "fullstack" ? "Full Stack" : "Frontend"}
      </Badge>
    </div>
  );
}
