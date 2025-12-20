import { NAVIGATION_LINKS } from "@/data";
import Link from "next/link";
import NavLink from "./nav-link/NavLink.component";

export default function Sidebar() {
  return (
    <aside className="w-full min-h-screen lg:col-span-2 max-lg:hidden bg-background py-8 px-4 overflow-auto sticky left-0">
      <div className="w-full h-full flex flex-col justify-between items-center">
        {/* sidebar header */}
        <Link
          href={"/"}
          className="h3 !font-semibold text-primary-500 text-center capitalize font-heading"
        >
          Mina Ezzat
        </Link>

        {/* sidebar body */}
        <nav className="w-full h-full flex-1 my-16">
          <ul className="w-full h-full space-y-8">
            {NAVIGATION_LINKS.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink {...link} />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* sidebar footer */}
        <footer className="w-full h-fit flex flex-col items-center gap-2 c1 text-white/60 text-center">
          <span>&copy; {new Date().getFullYear()} Mina Ezzat</span>
          <p>Designed by Hazem Ahmed – UI/UX Designer.</p>
          <p>Developed by Mina Ezzat – Web Developer.</p>
        </footer>
      </div>
    </aside>
  );
}
