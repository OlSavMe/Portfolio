import React, { useState, useEffect, useRef, useCallback } from "react";
import "../../styles/componentStyles/Slider.scss";
import Modal from "../modals/Modal";
import projectData from "../../data/ProjectData";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const { length } = projectData;
  const [show, setShow] = useState(false);
  const [swiping, setSwiping] = useState(false);
  const sliderRef = useRef(0);

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e) => {
    e.stopPropagation();
    setTouchStart(e.targetTouches[0].clientX);
    setSwiping(false);
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    setTouchEnd(e.targetTouches[0].clientX);
    setSwiping(true);
  };

  const handleTouchEnd = () => {
    if (swiping && touchStart - touchEnd > 100) {
      toNext();
    }

    if (swiping && touchStart - touchEnd < -100) {
      toPrev();
    }
  };

  const toggleModal = () => {
    setShow(!show);
  };

  const toNext = useCallback(() => {
    const index = current === length - 1 ? 0 : current + 1;
    setCurrent(index);
    sliderRef.current.focus();
  }, [current, length]);

  const toPrev = useCallback(() => {
    const index = current === 0 ? length - 1 : current - 1;
    setCurrent(index);
    sliderRef.current.focus();
  }, [current, length]);

  const moveKeys = useCallback(
    (event) => {
      const key = event.key;
      if (key === "ArrowRight") {
        toNext();
      } else if (key === "ArrowLeft") {
        toPrev();
      }
    },
    [toNext, toPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", moveKeys);
    // cleanup this component
    return () => {
      window.removeEventListener("keydown", moveKeys);
    };
  }, [moveKeys]);

  return (
    <section className="slider">
      {projectData.map((item, index) => (
        <div
          ref={sliderRef}
          className={index === current ? "slide active" : "slide"}
          key={index}
          //for accessability reasons each non-active element is hidden
          aria-hidden={index !== current}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <span id="count">{`${index + 1}/${length}`}</span>

          <a href="#modal" onMouseDown={toggleModal} className="figCaption">
            {" "}
            <h3>
              <span>&rsaquo;&rsaquo;</span> {item.title}
            </h3>
          </a>

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
              <div className="bottom-pic-wrapper ">
                <img
                  className="bottom-pic"
                  src={item.bigpic}
                  alt={`${item.title}`}
                />
              </div>
            </Modal>
          )}
        </div>
      ))}
      <button onMouseDown={toPrev}>
        <span>&lsaquo;</span>
      </button>
      <button onMouseDown={toNext}>
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
