"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SKILLS } from "@/data";
import SkillItem from "./skill-item/SkillItem.component";

const settings = {
  infinite: true, // Enables seamless infinite loop
  initialSlide: 0,
  slidesToShow: 5, // Default for large screens
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 600, // Reduced from 800ms for faster, more continuous scrolling
  speed: 1200, // Smooth transition speed
  arrows: false,
  dots: false,
  pauseOnHover: false, // No pauses for continuous feel
  pauseOnFocus: false,
  cssEase: "linear", // Linear easing for smooth, constant motion
  waitForAnimate: false, // Prevents animation waits, enhancing continuity
  centerMode: true, // Centers slides to reduce jumpiness
  variableWidth: false, // Forces equal widths (critical for continuity)
  useTransform: false, // Helps with smoother infinite loops
  responsive: [
    {
      breakpoint: 1024, // Tablet (md in Tailwind: ≥768px, but Slick uses px; adjust if needed)
      settings: {
        slidesToShow: 4, // 4 slides on tablet
        centerPadding: "5px", // Adjust padding for tablet
      },
    },
    {
      breakpoint: 640, // Mobile (sm in Tailwind: ≥640px)
      settings: {
        slidesToShow: 2, // 2 slides on mobile
        centerPadding: "5px", // Adjust padding for tablet
      },
    },
  ],
};

export default function PageFooter() {
  const duplicatedSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <Slider {...settings} aria-label="Skills carousel">
      {duplicatedSkills.map((skill, i) => (
        <SkillItem key={i} {...skill} />
      ))}
    </Slider>
  );
}
