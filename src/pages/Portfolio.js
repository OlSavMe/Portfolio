import React from "react";
import SlideWrapper from "../components/slider/Slider";
import Github from "../components/Github";
import "../styles/Portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <section className="projects-section">
        <SlideWrapper />
        <div className="scroll">
          GitHub Repositories
          <a href="#github-container" className="indicator">
            <span></span>
            <span></span>
          </a>
        </div>
      </section>
      <section id="github-container">
        <Github />
      </section>
    </div>
  );
}

export default Portfolio;
