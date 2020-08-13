import React from "react";
import Photo from "../components/Photo";
import "../styles/Home.scss";
import "../data/ProjectData";
import Projects from "../components/Project";
import DownArrow from "../components/DownArrow";
import projectData from "../data/ProjectData";

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <Photo />
        <DownArrow title=" Selected Projects" destination="projects" />
      </div>
      <section id="projects">
        {projectData.map((item, index) => (
          <Projects key={index} {...item} index={index} />
        ))}
      </section>
    </div>
  );
}

export default Home;
