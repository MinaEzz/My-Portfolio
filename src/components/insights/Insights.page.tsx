import PageHeader from "../common/page-header/PageHeader.component";
import InsightsGrid from "./insights-grid/InsightsGrid.component";

export default function Insights() {
  return (
    <section
      aria-labelledby="insights-heading"
      className="w-full min-h-screen pd-y-s lg:px-16"
    >
      <div className="container">
        <div className="w-full flex flex-col gap-8">
          <PageHeader
            id="insights-heading"
            title="Insights"
            desc="Technical deep-dives, development tips, and reflections on building modern web applications. Sharing what I learn along the way."
          />
          <InsightsGrid />
        </div>
      </div>
    </section>
  );
}
