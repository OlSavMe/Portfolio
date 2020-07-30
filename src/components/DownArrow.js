import React from "react";
import "../styles/DownArrow.scss";

const DownArrow = (props) => {
  return (
    <div className="down-arrow">
      {props.title}
      <a href={`#${props.destination}`} className="indicator">
        <span></span>
        <span></span>
      </a>
    </div>
  );
};
export default DownArrow;
