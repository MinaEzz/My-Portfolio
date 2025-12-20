"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./project-card/ProjectCard.component";
import { PROJECTS } from "@/data";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3500,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",
  // dotsClass: "slick-dots",
  pauseOnHover: true,
  pauseOnFocus: true,
  dotsClass: "custom-pagination",
  customPaging: (i: number) => <button>{i + 1}</button>,
};

export default function ProjectsSlider() {
  return (
    <Slider {...settings}>
      {PROJECTS.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </Slider>
  );
}
