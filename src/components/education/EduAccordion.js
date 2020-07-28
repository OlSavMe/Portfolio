import React, { useState, useEffect, useRef } from "react";
import "../../styles/EduAccordion.scss";
import { educationData, otherCoursesData } from "../../data/EducationData";
import AccordionSection from "./AccordionSection";

const EduAccordion = () => {
  return (
    <div className="edu-container">
      <h2>
        Completed Haaga-Helia Courses in Software Development, ICT Infra and
        Languages
      </h2>
      {educationData.map((item) => (
        <AccordionSection key={item.id} {...item} />
      ))}
      <h2>Other Courses</h2>
      {otherCoursesData.map((item) => (
        <AccordionSection key={item.id} {...item} />
      ))}
    </div>
  );
};
export default EduAccordion;
