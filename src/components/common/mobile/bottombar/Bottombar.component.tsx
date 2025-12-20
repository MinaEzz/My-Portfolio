import { NAVIGATION_LINKS } from "@/data";
import NavLink from "./nav-link/NavLink.component";

export default function Bottombar() {
  return (
    <nav
      className="w-[95%] min-h-[74px] fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-md rounded-2xl shadow-lg shadow-primary-500/10 xl:hidden"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <ul className="w-full h-full flex items-center justify-around px-4 py-2">
        {NAVIGATION_LINKS.map((link, index) => {
          return (
            <li key={index}>
              <NavLink {...link} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
