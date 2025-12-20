import Image from "next/image";
import HOME_BG from "@/assets/home-background-image.webp";
import TextContent from "./text-content/TextContent.component";

export default function Home() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center">
      <Image
        src={HOME_BG}
        alt=""
        aria-hidden="true"
        role="presentation"
        draggable={false}
        priority
        className="absolute -z-10 object-cover object-center opacity-80"
      />
      <div className="black-layer" aria-hidden="true" />
      <TextContent />
    </section>
  );
}
