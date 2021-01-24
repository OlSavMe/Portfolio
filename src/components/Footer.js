import React from "react";
import "../styles/componentStyles/Footer.scss";
import References from "./References";
import { linksData } from "../data/LinksData";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const NavLinks = () =>
    linksData.slice(1).map((link, index) => (
      <NavLink key={index} to={link.to} activeClassName="selectedLink">
        {link.name}
      </NavLink>
    ));

  return (
    <div className="footer">
      <div className="footer-grid">
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
            href="https://www.youtube.com/channel/UCurdVm5AZAPTOMF4vr2yTVw"
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
      </div>
      <section className="refer">
        <References />
      </section>
      <section className="copyright">
        <p>savkao.com © 2021</p>
      </section>
    </div>
  );
};
export default Footer;
