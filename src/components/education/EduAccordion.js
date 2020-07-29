import React, { useState, useEffect, useRef } from "react";
import "../../styles/EduAccordion.scss";
import { educationData, otherCoursesData } from "../../data/EducationData";
import AccordionSection from "./AccordionSection";

const EduAccordion = () => {
  return (
    <div className="edu-container">
      <h2>
        Haaga-Helia Completed Courses in Software Development, ICT Infra and
        Languages
      </h2>
      {educationData.map((item) => (
        <AccordionSection key={item.id} {...item} />
      ))}
      <h2>Other Completed Courses</h2>
      {otherCoursesData.map((item) => (
        <AccordionSection key={item.id} {...item} />
      ))}
    </div>
  );
};
export default EduAccordion;
