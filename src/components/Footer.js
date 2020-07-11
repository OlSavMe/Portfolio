import React, { useState, useEffect, useRef } from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <section className="contact">
        <a
          href="https://github.com/OlSavMe"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={require("../assets/git.png")} alt="github-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/olga-savka-2a1a988a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={require("../assets/in.jpg")} alt="linkedin-icon" />
        </a>
        <a href="mailto:savkao@hotmail.com">savkao@hotmail.com</a>
      </section>
      <section className="refer">
        <p>"fvbofbfjvbfvjbjvbsjvbkjbksbfbbksbksfbkbkb"</p>
        <p>"fvbofbfjvbfvjbjvbsjvbkjbksbfbbksbksfbkbkb"</p>
        <p>"fvbofbfjvbfvjbjvbsjvbkjbksbfbbksbksfbkbkb"</p>
        <p>"fvbofbfjvbfvjbjvbsjvbkjbksbfbbksbksfbkbkb"</p>
      </section>
    </div>
  );
};
export default Footer;
