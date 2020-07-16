import React from "react";
import Slider from "../components/Slider";
import "../styles/Portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <section className="projects-section">
        <Slider />
        <div className="scroll">
          GitHub Repositories
          <a href="#projects" className="indicator">
            <span></span>
            <span></span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
