import PageHeader from "../common/page-header/PageHeader.component";

export default function Projects() {
  return (
    <section className="w-full min-h-screen pd-y-s lg:px-16">
      <div className="container">
        <div className="w-full flex flex-col gap-8">
          <PageHeader
            title="Projects"
            desc="I've worked on a range of projects, from web apps. Here are some of my favorite projects that I've worked on."
          />
        </div>
      </div>
    </section>
  );
}
