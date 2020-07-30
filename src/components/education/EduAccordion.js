import React, { useState, useEffect, useRef } from "react";
import "../../styles/EduAccordion.scss";
import { educationData, otherCoursesData } from "../../data/EducationData";
import AccordionSection from "./AccordionSection";

const EduAccordion = () => {
  return (
    <div className="edu-container">
      <h3>
        Haaga-Helia Completed Courses in Software Development, ICT Infra and
        Languages
      </h3>
      {educationData.map((item) => (
        <AccordionSection key={item.id} {...item} />
      ))}
      <h3>Other Completed Courses</h3>
      {otherCoursesData.map((item) => (
        <AccordionSection key={item.id} {...item} />
      ))}
    </div>
  );
};
export default EduAccordion;
