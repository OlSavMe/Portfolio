import React from "react";
import RepoCard from "./RepoCard";

export const All = (props) => {
  return (
    <>
      <p>
        <span>{props.nofork.length} </span> repos in total
      </p>
      <div className="list">
        {" "}
        {props.nofork.map((repo) => (
          <RepoCard key={repo.id} {...repo} />
        ))}
      </div>
    </>
  );
};

export const Filtered = (props) => {
  const filtered = props.nofork.filter(
    (repo) => repo.language === `${props.keyword}`
  );

  return (
    <>
      <p>
        <span>{filtered.length}</span> {props.keyword} repos
      </p>
      <div className="list">
        {filtered.map((repo) => (
          <RepoCard key={repo.id} {...repo} />
        ))}
      </div>
    </>
  );
};

export const Deployed = (props) => {
  const deployed = props.nofork.filter(
    (repo) => repo.homepage !== null && repo.homepage !== ""
  );

  return (
    <>
      <p>
        {" "}
        <span>{deployed.length}</span> deployed repos
      </p>
      <div className="list">
        {deployed.map((repo) => (
          <RepoCard key={repo.id} {...repo} />
        ))}
      </div>
    </>
  );
};
