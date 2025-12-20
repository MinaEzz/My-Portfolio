import React from "react";
import ICarouselProps from "./Carousel.types";
import "./style.css";

export default function Carousel({ children }: ICarouselProps) {
  return (
    <div className="carousel">
      <div className="wrapper">
        <div className="group">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="slide">
              {child}
            </div>
          ))}
        </div>

        {/* this for styling purpose */}
        <div aria-hidden className="group">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="slide">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
