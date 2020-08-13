import React, { useState, useEffect, useRef } from "react";
import "../../styles/componentStyles/Slider.scss";
import Modal from "../modals/Modal";
import ModalContent from "../modals/ModalContent";
import projectData from "../../data/ProjectData";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const { length } = projectData;
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

  return (
    <section className="slider" ref={sliderRef} onKeyDown={moveKeys}>
      {projectData.map((item, index) => (
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
              <h3>
                <span>&rsaquo;&rsaquo;</span> {item.title}
              </h3>
            </a>
          </figcaption>
          {index === current && (
            <picture>
              <source media="(min-width: 480px)" srcSet={item.bigpic} />
              <img
                className="screenshot"
                src={item.smallpic}
                alt={`${item.title}screenshot`}
              />
            </picture>
          )}
          {show && (
            <Modal toggleModal={toggleModal} id="modal">
              <ModalContent />
              <h3>{item.title}</h3>
              <div className="links">
                {" "}
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                )}
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
              </div>
              <p>{item.description}</p>
              <section>
                {item.features && (
                  <div>
                    <p>Features:</p>
                    <ul>
                      {item.features.map((el) => (
                        <li>{el}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.tools && (
                  <div>
                    <p>Tools:</p>
                    <ul>
                      {item.tools.map((el) => (
                        <li>{el}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.libraries && (
                  <div>
                    <p>Libraries:</p>
                    <ul>
                      {item.libraries.map((el) => (
                        <li>{el}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
              <img
                className="bottom-pic"
                src={item.bigpic}
                alt={`${item.title}`}
              />
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
        {projectData.map((i, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Slider;
