import React from "react";

const ExpCard = (props) => {
  const { company, period, duties, tech, projects, link, position, id } = props;

  return (
    <div className="exp-card" id={id}>
      <h2>{position}</h2>
      <h2>
        {" "}
        {period} {" : "} {company}
      </h2>

      <p>{projects}</p>

      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Project
        </a>
      ) : null}
      {projects ? <p>{projects}</p> : null}
    </div>
  );
};
export default ExpCard;
