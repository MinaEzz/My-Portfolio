import { Metadata } from "next";
import Button from "@/ui/button/Button.component";

export const metadata: Metadata = {
  title: "404 – Page Not Found",
  description:
    "The page you are looking for does not exist. Return to the homepage or explore my projects.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center"
      role="main"
      aria-labelledby="not-found-title"
    >
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <p className="b4 text-primary-500 uppercase">ERROR 404</p>
          <div className="w-full flex flex-col gap-2">
            <h1 id="not-found-title" className="h1 capitalize text-white">
              Page not found
            </h1>
            <p className="s2 text-white/80">
              Sorry, the page you’re looking for doesn’t exist or may have been
              moved. Let’s get you back on track.
            </p>
          </div>
          <div className="w-full mt-6 flex items-center gap-4 flex-wrap justify-center">
            <Button
              variant="default"
              size="md"
              href="/"
              className="w-[12.75rem]"
            >
              Return Home
            </Button>

            <Button
              variant="outlined"
              size="md"
              href="/projects"
              className="w-[12.75rem]"
            >
              Explore Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
