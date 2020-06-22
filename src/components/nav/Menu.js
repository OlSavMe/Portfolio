import React from "react";
import "../../styles/Menu.scss";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  const links = [
    { name: "Home", to: "/" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Experience", to: "/exp" },
    { name: "Education", to: "/edu" },
    { name: "Contact", to: "/contact" },
  ];

  const handleClose = (e) => {
    console.log("closed");
    setOpen(!open);
  };

  const NavLinks = () =>
    links.map((link, index) => (
      <Link key={index} to={link.to} onClick={handleClose}>
        {link.name}
      </Link>
    ));

  return (
    <>
      <div className={open ? "menu-mobile" : "menu-mobile closed"}>
        <NavLinks />
      </div>
    </>
  );
};
export default Menu;
