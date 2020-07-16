import React, { useState } from "react";
import "../styles/Project.scss";
import Modal from "./Modal";

const Project = (props) => {
  const {
    title,
    picture,
    summary,
    description,
    github,
    url,
    technology,
  } = props;

  const [show, setShow] = useState(false);

  const toggleModal = (e) => {
    setShow(!show);
  };

  return (
    <div className="card">
      <figure>
        <img src={picture} alt="project"></img>
        <figcaption>
          {/* <a href={url} target="_blank" rel="noopener noreferrer"> */}
          <a href="#modal" onClick={toggleModal}>
            {" "}
            <h3>
              {title} <span>&rsaquo;&rsaquo;</span>
            </h3>
            {/* <Modal show={show} hideModal={hideModal} /> */}
          </a>
        </figcaption>
      </figure>
      <p>{summary}</p>
      {show && (
        <Modal toggleModal={toggleModal} id="modal">
          <h3>{title}</h3>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            Check github repository
          </a>
          <p>{description}</p>
          <p>{technology}</p>
        </Modal>
      )}
    </div>
  );
};
export default Project;
