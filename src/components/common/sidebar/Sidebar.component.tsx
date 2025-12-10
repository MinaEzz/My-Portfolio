import { NAVIGATION_LINKS } from "@/data";
import Navlink from "./Navlink/Navlink.component";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full lg:col-span-2 max-lg:hidden bg-background py-8 px-4 overflow-auto">
      <div className="w-full h-full flex flex-col justify-between items-center">
        {/* sidebar header */}
        <Link
          href={"/"}
          className="h3 !font-semibold text-primary-500 text-center capitalize font-heading"
        >
          Mina Ezzat
        </Link>

        {/* sidebar body */}
        <ul className="w-full h-full flex-1 space-y-8 my-16">
          {NAVIGATION_LINKS.map((link, index) => {
            return (
              <li key={index}>
                <Navlink {...link} />
              </li>
            );
          })}
        </ul>

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
