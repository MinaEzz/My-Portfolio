import { StaticImageData } from "next/image";

export default interface ISkillItemProps {
  name: string;
  icon: StaticImageData;
  ariaLabel: string;
}
