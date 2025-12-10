import PageHeader from "../common/page-header/PageHeader.component";
import PageBody from "./page-body/PageBody.component";
import PageFooter from "./page-footer/PageFooter.component";

export default function About() {
  return (
    <section className="w-full min-h-screen pd-y-s lg:px-16">
      <div className="container">
        <div className="w-full flex flex-col gap-8">
          <PageHeader
            title="About Me"
            desc="Learn more about who I am, my journey as a Frontend Developer, and how I create modern, interactive web experiences."
          />
          <PageBody />
          <PageFooter />
        </div>
      </div>
    </section>
  );
}
