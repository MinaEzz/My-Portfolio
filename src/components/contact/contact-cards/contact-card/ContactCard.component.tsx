import React from "react";
import IContactCardProps from "./ContactCard.types";

export default function ContactCard({
  icon,
  title,
  value,
  href,
}: IContactCardProps) {
  return (
    <div className="group w-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/20 hover:shadow-[0_0_30px_-10px_#2231FF50]">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl text-primary-400 bg-primary-900/20  transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-black">
        {React.cloneElement(icon, {
          className: "w-7 h-7",
          title: title,
        })}
      </div>
      <div className="w-full flex-1 flex flex-col gap-1">
        <h2 className="b3 uppercase text-white/80">{title}</h2>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="b2 text-white transition-colors duration-300
            hover:text-primary-500"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
