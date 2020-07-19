import React, { useState } from "react";
import "../styles/Slider.scss";
import { projectData } from "../data/ProjectData";
import Modal from "./Modal";

const Slider = () => {
  const [isChecked, setIsChecked] = useState(true);
  const radios = [
    { value: "i1", id: "dot1" },
    { value: "i2", id: "dot2" },
    { value: "i3", id: "dot3" },
    { value: "i4", id: "dot4" },
  ];

  const toggleChange = () => {
    setIsChecked(!isChecked);
  };

  const [show, setShow] = useState(false);

  const toggleModal = (e) => {
    setShow(!show);
  };

  return (
    <div className="slider">
      <p>Selected Dev Projects</p>

      <div class="slides">
        {radios.reverse().map((radio) => (
          <input
            type="radio"
            name="image"
            id={radio.value}
            checked={isChecked}
            onChange={toggleChange}
          />
        ))}

        <div className="slide_img" id="one">
          <img src="img/short.jpg" />
          <div className="go">
            <a href="#modal" onClick={toggleModal}>
              The Shortcut Website
            </a>
          </div>
          {show && (
            <Modal toggleModal={toggleModal} id="modal">
              <h3> The Shortcut Website</h3>
              <a
                href={projectData[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectData[0].url}
              </a>
              <a
                href={projectData[0].github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check github repository
              </a>
              <p>{projectData[0].description}</p>
              <p>{projectData[0].technology}</p>
            </Modal>
          )}
          <label className="prev" for="i4">
            <span></span>
          </label>
          <label className="next" for="i2">
            <span></span>
          </label>
        </div>

        <div className="slide_img" id="two">
          <img src="img/current.jpg" />
          <div className="go">
            <a>Current Portfolio Site</a>
          </div>
          <label className="prev" for="i1">
            <span></span>
          </label>
          <label className="next" for="i3">
            <span></span>
          </label>
        </div>
        <div className="slide_img" id="three">
          <img src="img/pr.jpg" />
          <div className="go">
            <a style={{ backgroundColor: "#666666" }}>Previous CV Site</a>
          </div>
          <label className="prev" for="i2">
            <span></span>
          </label>
          <label className="next" for="i4">
            <span></span>
          </label>
        </div>
        <div className="slide_img" id="four">
          <img src="img/manag.png" />
          <div className="go">
            <a style={{ backgroundColor: "#666666" }}>Order Manager App</a>
          </div>
          <label className="prev" for="i3">
            <span></span>
          </label>
          <label className="next" for="i1">
            <span></span>
          </label>
        </div>
        {/* {projectData.map((item, index) => (
          <div className="go" key={index}>
            <a>Current Portfolio Site</a>
          </div>
        ))} */}
        {/* <div className="go">
          <a>Details</a>
        </div> */}
        <div id="nav_slide">
          {radios.reverse().map((radio) => (
            <label for={radio.value} className="dots" id={radio.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
