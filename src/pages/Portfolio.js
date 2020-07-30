import React from "react";
import SlideWrapper from "../components/slider/Slider";
import Github from "../components/Github";
import DownArrow from "../components/DownArrow";
import "../styles/Portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <section className="projects-section">
        <div className="slider-container">
          <SlideWrapper />
        </div>
        <DownArrow title="GitHub Repositories" destination="github-container" />
      </section>
      <section id="github-container">
        <Github />
      </section>
    </div>
  );
}

export default Portfolio;
