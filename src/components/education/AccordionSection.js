import React, { useState, useRef } from "react";
import "../../styles/EduAccordion.scss";

const AccordionSection = (props) => {
  const { url, title, link, desc } = props;
  const details = useRef(null);
  const [unfold, setUnfold] = useState(false);
  const [height, setHeight] = useState("0px");

  const toggleUnfold = () => {
    setUnfold(!unfold);
    setHeight(unfold ? "0px" : `${details.current.scrollHeight}px`);
  };

  // const toggleHeight = () => {
  //   setHeight(unfold ? "0px" : `${details.current.scrollHeight}px`);
  // };

  return (
    <div className="course_section">
      <button className="course_header" onClick={toggleUnfold}>
        <span>
          {title}{" "}
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              Course Project
            </a>
          ) : null}
        </span>
        <img
          className={unfold ? " pic unfold" : "pic"}
          src={require("../../assets/down.png")}
        ></img>
      </button>
      <div ref={details} style={{ maxHeight: `${height}` }} className="details">
        <span>{desc}</span>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Course Page
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default AccordionSection;
