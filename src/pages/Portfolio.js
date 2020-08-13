import React from "react";
import Slider from "../components/slider/Slider";
import Github from "../components/Github";
import DownArrow from "../components/DownArrow";
import "../styles/Portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <section className="projects-section">
        <div className="slider-container">
          <Slider />
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
