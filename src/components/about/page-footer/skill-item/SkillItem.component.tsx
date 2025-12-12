import Image from "next/image";
import ISkillItemProps from "./SkillItem.types";

export default function SkillItem({ name, icon, ariaLabel }: ISkillItemProps) {
  return (
    <div
      className="w-20 h-20 flex items-center justify-center"
      aria-label={ariaLabel}
      role="img"
      title={name}
    >
      <Image
        src={icon}
        alt={ariaLabel}
        className="object-contain pointer-events-none select-none"
        draggable={false}
      />
    </div>
  );
}
