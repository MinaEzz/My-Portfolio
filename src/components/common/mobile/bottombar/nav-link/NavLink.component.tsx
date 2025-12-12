"use client";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import INavLinkProps from "./NavLink.types";

const linkStyles = cva(
  "md:w-[8rem] flex flex-col items-center justify-center gap-2 max-md:p-4 p-2 rounded-xl transition-colors duration-200 ease-in-out",
  {
    variants: {
      active: {
        true: "text-primary-400 bg-primary-900/20",
        false: "text-white hover:text-primary-400 hover:bg-primary-900/10",
      },
    },
  }
);

export default function NavLink({ href, label, icon }: INavLinkProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={cn(linkStyles({ active: isActive }))}
      aria-current={isActive ? "page" : undefined}
      aria-label={label}
    >
      {React.cloneElement(icon, { className: "w-6 h-6", name: label })}
      <span className="b3 hidden md:block">{label}</span>
    </Link>
  );
}
