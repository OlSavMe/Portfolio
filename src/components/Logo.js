import React from "react";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div style={{ top: "3%", right: "3%", position: "fixed", zIndex: "400" }}>
      <Link to="/">
        <img
          src={require("../assets/os.gif")}
          alt="logo"
          style={{
            border: "solid black 1px",
            boxShadow: "black 3px 3px",
            alighItems: "center",
            justifyItems: "space-around",
            display: "flex",
          }}
        ></img>
      </Link>
    </div>
  );
};
export default Logo;
