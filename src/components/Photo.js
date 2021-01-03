import React from "react";
import "../styles/componentStyles/Photo.scss";

function Photo(props) {
  return (
    <div class="photo-section">
      <section class="photo-item">
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
        user-friendly apps. The tools I use include JavaScript, Reac.js, SASS,
        PHP and WordPress, Google Cloud tools, REST API and headless CMS, UX
        prototyping. I've been studying software development in Haaga-Helia UAS.
        I have experience of working both as a sole developer and in
        multidisciplinary teams.
      </p>
      <p></p>
    </div>
  );
}

export default Photo;
