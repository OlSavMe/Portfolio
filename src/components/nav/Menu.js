import React from "react";
import "../../styles/componentStyles/Menu.scss";
import { linksData } from "../../data/LinksData";
import { NavLink } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  const handleClose = (e) => {
    console.log("closed");
    setOpen(!open);
  };

  const NavLinks = () =>
    linksData.slice(1).map((link, index) => (
      <NavLink
        key={index}
        to={link.to}
        onClick={handleClose}
        activeClassName="selectedMobileLink"
      >
        {link.name}
      </NavLink>
    ));

  return (
    <>
      <div className={open ? "menu-mobile" : "menu-mobile closed"}>
        <NavLink
          to="/"
          exact
          activeClassName="selectedMobileLink"
          onClick={handleClose}
        >
          Home
        </NavLink>
        <NavLinks />
      </div>
    </>
  );
};
export default Menu;
