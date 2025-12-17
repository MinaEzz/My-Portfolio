import Button from "@/ui/button/Button.component";

export default function CTASection() {
  return (
    <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center gap-4 text-center">
      <h3 className="h4 text-white">Interested in working together?</h3>
      <p className="b2 text-white/80">
        If you like my work or have a project in mind, feel free to reach out.
        I’d love to hear from you.
      </p>
      <Button className="mt-2" variant="default" size="lg" href="/contact">
        Contact Me
      </Button>
    </div>
  );
}
