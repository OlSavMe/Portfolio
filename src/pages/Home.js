import React, { useState } from "react";
import Photo from "../components/Photo";
import "../styles/Home.scss";
import "../data/ProjectData";
import projectData from "../data/ProjectData";
import Project from "../components/Project";

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <Photo />
        <div className="scroll">
          Selected Projects
          <a href="#projects" className="indicator">
            <span></span>
            <span></span>
          </a>
        </div>
      </div>

      <section id="projects">
        {projectData.map((item, index) => (
          <Project key={index} {...item} index={index} />
        ))}
      </section>
    </div>
  );
}

export default Home;
