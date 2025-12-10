import Button from "@/ui/button/Button.component";

export default function TextContent() {
  return (
    <div className="lg:w-[70%] md:w-[80%] w-[90%] h-fit p-8 z-10 rounded-2xl flex flex-col items-center gap-4 text-center bg-gradient-to-b from-black/60 via-black/30 to-transparent">
      <h1 className="h4 text-white">Hi, I&apos;m Mina Ezzat</h1>
      <p className="b2 text-white/90 !leading-relaxed max-w-xl">
        Frontend Developer | Crafting Clean Code & Smooth, Modern Web
        Experiences <br /> Creating web experiences that users love.
      </p>

      <div className="w-fit mt-4 flex items-center gap-4 max-md:flex-col">
        <Button variant="default" size="lg" className="w-[12.75rem]">
          Download CV
        </Button>
        <Button
          variant="outlined"
          size="lg"
          //   href="/Hazem Ahmed CV.pdf"
          //   download={true}
          className="w-[12.75rem]"
        >
          Hire Me
        </Button>
      </div>
    </div>
  );
}
