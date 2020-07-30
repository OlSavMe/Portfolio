import React from "react";
import "../../styles/Menu.scss";
import { linksData } from "../../data/LinksData";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  const handleClose = (e) => {
    console.log("closed");
    setOpen(!open);
  };

  const NavLinks = () =>
    linksData.map((link, index) => (
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
