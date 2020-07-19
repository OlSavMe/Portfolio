import React from "react";
import "../styles/Footer.scss";
import References from "./References";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const links = [
    { name: "Portfolio", to: "/portfolio" },
    { name: "Experience", to: "/exp" },
    { name: "Education", to: "/edu" },
    { name: "Contact", to: "/contact" },
  ];

  const NavLinks = () =>
    links.map((link, index) => (
      <NavLink key={index} to={link.to} activeClassName="selectedLink">
        {link.name}
      </NavLink>
    ));

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
        <a
          href="https://github.com/OlSavMe"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={require("../assets/tube.png")} alt="github-icon" />
        </a>
        <a href="mailto:savkao@hotmail.com">
          <span>savkao@hotmail.com</span>
          <img src={require("../assets/email.jpg")} alt="email-icon" />
        </a>
      </section>
      <section className="navigation">
        <NavLinks />
      </section>
      <section className="refer">
        <References />
      </section>
    </div>
  );
};
export default Footer;
