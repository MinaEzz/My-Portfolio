"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SKILLS } from "@/data";
import SkillItem from "./skill-item/SkillItem.component";

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 800,
  speed: 1200,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: "linear",
  waitForAnimate: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function PageFooter() {
  const duplicatedSkills = [...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS];
  return (
    <Slider {...settings}>
      {duplicatedSkills.map((skill, i) => (
        <SkillItem key={i} {...skill} />
      ))}
    </Slider>
  );
}
