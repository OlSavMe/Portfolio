import React, { useState, useEffect, useRef } from "react";
import "../styles/componentStyles/Nav.scss";
import { linksData } from "../data/LinksData";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const prevPosY = useRef(0);

  const [upScroll, seUpScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosY = window.scrollY;
      if (prevPosY.current < currentPosY && upScroll) {
        seUpScroll(false);
      }
      if (prevPosY.current > currentPosY && !upScroll) {
        seUpScroll(true);
      }

      prevPosY.current = currentPosY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [upScroll]);

  const NavLinks = () =>
    linksData.slice(1).map((link, index) => (
      <NavLink key={index} to={link.to} activeClassName="selectedLink">
        {link.name}
      </NavLink>
    ));

  return (
    <nav className={upScroll ? "" : "hidden"}>
      <div className="menu">
        <NavLink to="/" exact activeClassName="selectedLink">
          Home
        </NavLink>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Nav;
