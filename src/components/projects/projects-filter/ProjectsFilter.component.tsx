import { FILTER_OPTIONS } from "@/data";
import FilterButton from "./filter-button/FilterButton.component";

export default function ProjectsFilter() {
  return (
    <ul className="w-full flex items-center gap-5 flex-wrap">
      {FILTER_OPTIONS.map((option, index) => {
        return (
          <li key={index}>
            <FilterButton {...option} />
          </li>
        );
      })}
    </ul>
  );
}
