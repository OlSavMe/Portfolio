import React from "react";
import "../styles/componentStyles/Photo.scss";

function Photo(props) {
  return (
    <div class="photo-section">
      <section class="photo-item">
        {" "}
        <figure>
          <img src={require("../assets/pic.jpeg")} alt="me"></img>
          <figcaption>Olga Savka</figcaption>
        </figure>
      </section>
      <p>
        Hi!{" "}
        <span role="img" aria-label="grinning face">
          😃
        </span>{" "}
        I am a Web Developer living in Helsinki. I enjoy creating eye-catching
        and user-friendly applications. I have hands-on experience in app
        building using JavaScript, Reac.js (v16.8), React Native, SASS/SCSS,
        JQuery, Bootstrap, REST API, headless CMS, Node.js, Express, Google
        Cloud tools, SQL, CI/CD pipelines and UX prototyping. I've been working
        in multidisciplinary Agile teams within several web development
        projects. In 2020, I am graduating from Haaga Helia UAS as a Software
        Developer. Due to my previous Tech Translator’s career, I have
        substantial experience of international teamwork.
      </p>
      <p></p>
    </div>
  );
}

export default Photo;
