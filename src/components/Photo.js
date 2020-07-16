import React from "react";
import "../styles/Photo.scss";

function Photo(props) {
  return (
    <div class="photos">
      <section class="item">
        {" "}
        <figure>
          <img src={require("../assets/pic.jpeg")} alt="me"></img>
          <figcaption>Olga Savka</figcaption>
        </figure>
      </section>
      {/* <article className="about"> */}{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      {/* </article> */}
    </div>
  );
}

export default Photo;
