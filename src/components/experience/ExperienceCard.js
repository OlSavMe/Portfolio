import React from "react";

const ExpCard = (props) => {
  const { company, period, duties, tech, projects, link, position, id } = props;

  return (
    <div className="exp-card" id={id}>
      <section>
        <h2>{position}</h2>
        <h2>
          {period} {" : "} {company}
        </h2>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            View project
          </a>
        )}
      </section>
      <section>
        <div className="column">
          {projects && (
            <div>
              <p>Project(s) I contributed to:</p>
              <ul>
                {projects.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
          )}
          {duties && (
            <div>
              <p>What I did:</p>
              <ul>
                {duties.map((el) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {tech && (
          <div>
            <p>Tools I used:</p>
            <ul>
              {tech.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};
export default ExpCard;
