"use client";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import INavLinkProps from "./Navlink.types";

const linkStyles = cva(
  "flex items-center gap-2 px-4 py-2 b2 capitalize relative",
  {
    variants: {
      active: {
        true: "text-primary-500 bg-white/10 rounded-xl",
        false:
          "text-white hover:text-primary-500 transition-colors ease-linear hover:translate-x-1 transition-transform hover:drop-shadow-[0_0_16px_#2231FF50]",
      },
    },
  }
);

export default function NavLink({ icon, label, href }: INavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(linkStyles({ active: isActive }))}
      aria-current={isActive ? "page" : undefined}
      aria-label={label}
    >
      {React.cloneElement(icon, { className: "w-6 h-6", name: label })}
      {label}
    </Link>
  );
}
