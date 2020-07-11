import React from "react";
import "../styles/Project.scss";

const Project = (props) => {
  const { title, picture, summary, description, github, url } = props;

  return (
    <div className="card">
      <figure>
        <img src={picture} alt="project"></img>
        <figcaption>
          {/* <a href={url} target="_blank" rel="noopener noreferrer"> */}

          <h3>{title}</h3>
        </figcaption>
      </figure>
      <p>{summary}</p>
      <button>Details</button>
    </div>
  );
};
export default Project;
