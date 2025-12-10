import Image from "next/image";
import ISkillItemProps from "./SkillItem.types";

export default function SkillItem({ name, icon, ariaLabel }: ISkillItemProps) {
  return (
    <div
      className="w-32 h-32 flex items-center justify-center"
      aria-label={ariaLabel}
      role="img"
    >
      <Image src={icon} alt={ariaLabel} className="object-contain" />
    </div>
  );
}
