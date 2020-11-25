import React from "react";
import EduAccordion from "../components/education/EduAccordion";

import "../styles/EduAccordion.scss";

function Education() {
  return (
    <div className="edu-main">
      <section className="unis">
        <div id="card">
          <h3>
            <span>2017-2020 </span>
            Haaga Helia University of Applied Sciences, Software Development
            (GPA: 4.1/5, 273 cr)
          </h3>
        </div>
        <div id="card">
          <h3>
            <span>2002-2008 </span>
            Tver State University, Linguistics and Intercultural Communication
            (GPA: 4.8/5)
          </h3>
        </div>
      </section>
      <EduAccordion />
    </div>
  );
}

export default Education;
