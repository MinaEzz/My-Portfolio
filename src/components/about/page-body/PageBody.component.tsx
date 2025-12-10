import MINA_IMG from "@/assets/mina-ezzat-image.png";
import Image from "next/image";
import TextContent from "./text-content/TextContent.component";

export default function PageBody() {
  return (
    <div className="w-full flex flex-1 items-center justify-between max-lg:flex-col gap-8">
      <div className="lg:w-[35%] md:w-[50%] max-md:w-full">
        <Image src={MINA_IMG} alt="Portrait of Mina Ezzat Barsom" />
      </div>
      <TextContent />
    </div>
  );
}
