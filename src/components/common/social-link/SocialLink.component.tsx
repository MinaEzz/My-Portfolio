import React from "react";
import ISocialLinkProps from "./SocialLink.types";

export default function SocialLink({ name, href, icon }: ISocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="w-12 h-12 bg-black/50 flex items-center justify-center text-white rounded-full shadow-lg hover:-translate-x-2 transition-transform duration-300"
    >
      {React.cloneElement(icon, { className: "w-6 h-6", title: name })}
    </a>
  );
}
