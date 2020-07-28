import React from "react";

const ExpCard = (props) => {
  const { company, period, desc, link, desctwo, position, id } = props;

  return (
    <div className="exp-card" id={id}>
      <h2>{position}</h2>
      <h2>
        {" "}
        {period} {" : "} {company}
      </h2>

      <p>{desc}</p>

      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View the project
        </a>
      ) : null}
      {desctwo ? <p>{desctwo}</p> : null}
    </div>
  );
};
export default ExpCard;
