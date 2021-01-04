import React, { useState } from "react";
import "../styles/componentStyles/Project.scss";
import Modal from "./modals/Modal";

const Project = (props) => {
  const [show, setShow] = useState(false);
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
    id,
  } = props;

  const toggleModal = (e) => {
    setShow(!show);
  };

  return (
    <a href="#modal" onClick={toggleModal} className="card" key={id}>
      <figure>
        <img src={bigpic} alt="project"></img>
        <figcaption>
          <h3>
            {title} <span>&rsaquo;&rsaquo;</span>
          </h3>
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
                Link
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
                  {features.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </div>
            )}
            {tools && (
              <div>
                <p>Tools:</p>
                <ul>
                  {tools.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
              </div>
            )}
            {libraries && (
              <div>
                <p>Libraries:</p>
                <ul>
                  {libraries.map((el, x) => (
                    <li key={x}>{el}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
          <div className="bottom-pic-wrapper">
            <img className="bottom-pic" src={bigpic} alt={`${title}`} />
          </div>
        </Modal>
      )}
    </a>
  );
};

export default Project;
