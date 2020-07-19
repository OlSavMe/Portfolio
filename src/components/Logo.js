import React, { useState, useEffect, useRef } from "react";
import "../styles/Logo.scss";

import { Link } from "react-router-dom";

const Logo = ({ open, setOpen }) => {
  const prevPos = useRef(0);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPos = window.scrollY;
      if (scrollPos !== prevPos.current) {
        setScroll(true);
      }
      if (scrollPos === 0) {
        setScroll(false);
      }

      prevPos.current = scrollPos;
      // console.log(scroll, scrollPos);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <main className={scroll ? "scroll" : ""}>
      <Link className={open ? "logo-active" : "logo"} to="/">
        <img src={require("../assets/vv.gif")} alt="logo"></img>
      </Link>
    </main>
  );
};
export default Logo;
