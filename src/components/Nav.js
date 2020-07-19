import React, { useState, useEffect, useRef } from "react";
import "../styles/Nav.scss";
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
      // console.log(upScroll, currentPosY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [upScroll]);

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
