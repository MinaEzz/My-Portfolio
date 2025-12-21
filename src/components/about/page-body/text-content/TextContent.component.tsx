import { ABOUT_TEXT } from "@/data";
import Button from "@/ui/button/Button.component";

export default function TextContent() {
  return (
    <div className="w-full flex-1 flex flex-col gap-4">
      <h2
        className="h4 uppercase text-primary-500"
        aria-label="Mina Ezzat, Front-End Developer"
      >
        Mina Ezzat <br />
        <strong className="text-white">Front-End Developer</strong>
      </h2>
      <div className="w-full flex flex-col gap-2">
        {ABOUT_TEXT.map((text, index) => {
          return (
            <p key={index} className="b4 capitalize text-white/80">
              {text}
            </p>
          );
        })}
      </div>
      <Button
        variant="default"
        size="md"
        href="/Dev-Mina-Ezzat-Barsom.pdf"
        download={true}
        aria-label="Download Mina Ezzat Front-End Developer CV"
      >
        Download CV
      </Button>
    </div>
  );
}
