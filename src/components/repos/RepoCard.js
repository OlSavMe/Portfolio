import React from "react";

const RepoCard = (props) => {
  const { html_url, name, description, homepage } = props;

  return (
    <div className="single">
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        {" "}
        {name}
        <img src={require("../../assets/git.png")} alt="github-icon" />
      </a>
      <p>{description}</p>
      {homepage ? (
        <span>
          <a href={homepage} target="_blank" rel="noopener noreferrer">
            {homepage}
          </a>
        </span>
      ) : null}
    </div>
  );
};
export default RepoCard;
