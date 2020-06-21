import React from "react";
import "../styles/Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = [
    // { name: "Home.", to: "/" },
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
    <nav>
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
