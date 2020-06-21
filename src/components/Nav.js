import React from "react";
import "../styles/Nav.scss";
import { Link } from "react-router-dom";

const Nav = ({ open, setOpen }) => {
  const links = [
    { name: "Home.", to: "/" },
    { name: "Portfolio.", to: "/portfolio" },
    { name: "Experience.", to: "/exp" },
    { name: "Education.", to: "/edu" },
    { name: "Contact.", to: "/contact" },
  ];

  // const toggle = () => {
  //   setActive(!active);
  // };

  const NavLinks = () =>
    links.map((link, index) => (
      <Link key={index} to={link.to}>
        <span className="hover hover-1">{link.name}</span>
      </Link>
    ));

  return (
    <div className="nav">
      <button
        open={open}
        onClick={() => setOpen(!open)}
        className={open ? "burger-active" : "burger"}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className="menu">
        <NavLinks />
      </div>
      <div className={open ? "menu-mobile-active" : "menu-mobile"}>
        <NavLinks />
      </div>
    </div>
  );
};
export default Nav;
