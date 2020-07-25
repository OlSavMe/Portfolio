import React, { useState } from "react";
import "../../styles/Slider.scss";
import Modal from "../Modal";

const Slide = (props) => {
  const { title, picture, description, github, url, technology } = props;

  const [show, setShow] = useState(false);

  const toggleModal = (e) => {
    setShow(!show);
  };

  return (
    <a href="#modal" onClick={toggleModal} className="card">
      <div className="slide_img">
        <img src={picture} alt="project" />
        <div className="go">
          <a href="#modal" onClick={toggleModal}>
            {title}
          </a>
        </div>
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
    </a>
  );
};
export default Slide;
