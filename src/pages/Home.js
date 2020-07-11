import React from "react";
import Photo from "../components/Photo";
import Info from "../components/Info";
import "../styles/Home.scss";
import "../data/ProjectData";
import { projectData } from "../data/ProjectData";
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

      {/* </div> */}

      <div className="projects" id="projects">
        {projectData.map((item, index) => (
          <Project key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
