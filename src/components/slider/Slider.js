import React, { useState, useEffect, useRef } from "react";
import "../../styles/componentStyles/Slider.scss";
import Modal from "../Modal";
import projectData from "../../data/ProjectData";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;
  const [show, setShow] = useState(false);
  const sliderRef = useRef(0);

  const toggleModal = (e) => {
    setShow(!show);
  };

  const toNext = () => {
    const index = current === length - 1 ? 0 : current + 1;
    setCurrent(index);
  };

  const toPrev = () => {
    const index = current === 0 ? length - 1 : current - 1;
    setCurrent(index);
  };

  //function for navigation with left and right buttons
  const moveKeys = (e) => {
    if (e.keyCode === 37) {
      const index = current === length - 1 ? 0 : current + 1;
      setCurrent(index);
    } else if (e.keyCode === 39) {
      const index = current === 0 ? length - 1 : current - 1;
      setCurrent(index);
    }
  };

  useEffect(() => {
    sliderRef.current.focus();
  }, []);

  console.log(sliderRef);

  return (
    <section className="slider" ref={sliderRef} onKeyDown={moveKeys}>
      {slides.map((item, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
          //for accessability reasons each non-active element is hidden
          aria-hidden={index !== current}
        >
          <span id="count">{`${index + 1}/${length}`}</span>
          <figcaption>
            <a href="#modal" onClick={toggleModal}>
              {" "}
              <h3>{item.title}</h3>
            </a>
          </figcaption>
          {index === current && (
            <img
              className="screenshot"
              src={item.bigpic}
              alt={`${item.title}screenshot`}
            />
          )}
          {show && (
            <Modal toggleModal={toggleModal} id="modal">
              <h3>{item.title}</h3>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.url}
              </a>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                Check github repository
              </a>
              <p>{item.description}</p>
              <p>{item.technology}</p>
            </Modal>
          )}
        </div>
      ))}
      <button onClick={toPrev}>
        <span>&lsaquo;</span>
      </button>
      <button onClick={toNext}>
        <span>&rsaquo;</span>
      </button>
      <div className="dots">
        {slides.map((i, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
          ></span>
        ))}
      </div>
    </section>
  );
};

const SlideWrapper = () => {
  return (
    <>
      <Slider slides={projectData} />
    </>
  );
};

export default SlideWrapper;
