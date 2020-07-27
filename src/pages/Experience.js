import React from "react";
import careerData from "../data/ExperienceData";
import ExpCard from "../components/experience/ExperienceCard";
import HashGroup from "../components/experience/HashGroup";
import "../styles/Experience.scss";

function Experience() {
  return (
    <div className="exp-container">
      <section id="work">
        <HashGroup />
        {careerData.map((item, index) => (
          <ExpCard key={index} {...item} index={index} id={item.id} />
        ))}
      </section>
    </div>
  );
}

export default Experience;
