import TypingEffect from "@/components/common/animations/typing-effect/TypingEffect.component";
import Button from "@/ui/button/Button.component";

export default function TextContent() {
  return (
    <div className="lg:w-[70%] md:w-[80%] w-[90%] h-fit p-8 z-10 rounded-2xl flex flex-col items-center gap-4 text-center bg-gradient-to-b from-black/60 via-black/30 to-transparent">
      <h1 id="hero-heading" className="h4 text-white">
        <TypingEffect text="Hi, I'm Mina Ezzat" />
      </h1>
      <p className="b2 text-white/90 !leading-relaxed max-w-xl">
        <strong>Frontend Developer</strong> | Crafting Clean Code & Smooth,
        Modern Web Experiences <br /> Creating web experiences that users love.
      </p>

      <div className="w-fit mt-4 flex items-center gap-4 max-md:flex-col">
        <Button
          variant="default"
          size="lg"
          href="/Dev-Mina-Ezzat-Barsom.pdf"
          download={true}
          className="w-[12.75rem]"
          aria-label="Download Mina Ezzat Front-End Developer CV"
        >
          Download CV
        </Button>
        <Button
          variant="outlined"
          size="lg"
          href="/contact"
          className="w-[12.75rem]"
          aria-label="Contact Mina Ezzat for Front-End Development"
        >
          Hire Me
        </Button>
      </div>
    </div>
  );
}
