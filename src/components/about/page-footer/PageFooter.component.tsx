import { SKILLS } from "@/data";
import SkillItem from "./skill-item/SkillItem.component";
import Carousel from "@/ui/carousel/Carousel.component";

export default function PageFooter() {
  return (
    <Carousel aria-label="Skills carousel">
      {SKILLS.map((skill, i) => (
        <SkillItem key={i} {...skill} />
      ))}
    </Carousel>
  );
}
