import React from "react";
import "../styles/ButtonGroup.scss";

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <ul>
        <li>All repos</li>
        <li>Only Deployed</li>
        <li>JavaScript/React/React Native</li>
        <li>HTML/CSS/JQuery/Bootstrap</li>
        <li>Java</li>
      </ul>
    </div>
  );
};

export default ButtonGroup;
