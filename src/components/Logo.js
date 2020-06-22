import React from "react";
import "../styles/Logo.scss";

import { Link } from "react-router-dom";

const Logo = ({ open, setOpen }) => {
  return (
    <main>
      <Link className={open ? "logo-active" : "logo"} to="/">
        <img src={require("../assets/s.gif")} alt="logo"></img>
      </Link>
    </main>
  );
};
export default Logo;
