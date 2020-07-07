import React from "react";
import Photo from "../components/Photo";
import Info from "../components/Info";
import "../styles/Home.scss";

function Home() {
  return (
    <div className="container">
      {/* <div className="inner"> */}
      <div className="hero">
        <section className="about">
          <Photo />
          {/* <Info /> */}
        </section>
        <div className="scroll">
          Selected Projects
          <a href="#skills" className="indicator">
            <span></span>
            <span></span>
          </a>
        </div>
      </div>

      {/* </div> */}

      <div className="skills" id="skills">
        <p>Frontend Development</p>
        <p>Software Development student in Haaga Helia UAS</p>
        <p>Web Design</p>
        <p>email</p>
        <p>Backend development</p>
        <p>email</p>
      </div>
      <div className="projects">
        <h2>selected projects</h2>
      </div>
    </div>
  );
}

export default Home;
