"use client";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Link from "next/link";
import INavlinkProps from "./Navlink.types";
import { usePathname } from "next/navigation";

const linkStyles = cva(
  "flex items-center gap-2 px-4 py-2 b2 capitalize hover:text-primary-500 transition-colors ease-linear hover:translate-x-1 transition-transform hover:drop-shadow-[0_0_16px_#2231FF50] relative",
  {
    variants: {
      active: {
        true: "text-primary-500 bg-white/10 rounded-xl",
        false: "text-white",
      },
    },
  }
);

export default function Navlink({ icon, label, href }: INavlinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={cn(linkStyles({ active: isActive }))}>
      {React.cloneElement(icon, { className: "w-6 h-6" })}
      {label}
    </Link>
  );
}
