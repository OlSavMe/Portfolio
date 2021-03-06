import React from "react";
import "../styles/componentStyles/Photo.scss";

function Photo() {
  return (
    <div className="photo-section">
      <section className="photo-item">
        {" "}
        <figure>
          <img src={require("../assets/sh.jpeg")} alt="me"></img>
          <figcaption>Olga Savka</figcaption>
        </figure>
      </section>
      <p>
        Hi!{" "}
        <span role="img" aria-label="grinning face">
          😃
        </span>{" "}
        I am a Web Developer living in Helsinki. I enjoy creating dynamic and
        user-friendly apps. The tools I use are JavaScript, React, SASS, PHP,
        Google Cloud tools, REST API, UX prototyping. I've been studying
        software development in Haaga-Helia UAS. I have experience of working
        both as a sole developer and in multidisciplinary teams.
      </p>
      <p></p>
    </div>
  );
}

export default Photo;
