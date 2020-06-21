import React from "react";
import "../../styles/Burger.scss";

const Burger = ({ open, setOpen }) => {
  return (
    <div>
      <button
        open={open}
        onClick={() => setOpen(!open)}
        className={open ? "burger" : "burger closed"}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
};
export default Burger;
