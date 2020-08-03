import React, { useState } from "react";
import "../styles/componentStyles/Project.scss";
import Modal from "./Modal";

const Project = (props) => {
  const {
    title,
    bigpic,
    summary,
    description,
    features,
    tools,
    github,
    url,
    libraries,
  } = props;

  const [show, setShow] = useState(false);

  const toggleModal = (e) => {
    setShow(!show);
  };

  return (
    <a href="#modal" onClick={toggleModal} className="card">
      <figure>
        <img src={bigpic} alt="project"></img>
        <figcaption>
          <a href="#modal" onClick={toggleModal}>
            {" "}
            <h3>
              {title} <span>&rsaquo;&rsaquo;</span>
            </h3>
          </a>
        </figcaption>
      </figure>
      <p>{summary}</p>
      {show && (
        <Modal toggleModal={toggleModal} id="modal">
          <h3>{title}</h3>
          <div className="links">
            {" "}
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                Website
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            )}
          </div>
          <p>{description}</p>
          <section>
            {features && (
              <div>
                <p>Features:</p>
                <ul>
                  {features.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </div>
            )}
            {tools && (
              <div>
                <p>Tools:</p>
                <ul>
                  {tools.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </div>
            )}
            {libraries && (
              <div>
                <p>Libraries:</p>
                <ul>
                  {libraries.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </Modal>
      )}
    </a>
  );
};
export default Project;
