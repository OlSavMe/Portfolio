import React, { useState, useEffect } from "react";
import "../../styles/Slider.scss";
import projectData from "../../data/ProjectData";

// import Slide from "./Slide";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  // console.log(current);

  // const toNext = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  const toNext = () => {
    const index = current === length - 1 ? 0 : current + 1;

    // assign the logical index to current image index that will be used in render method
    setCurrent(index);
  };

  // useEffect(() => {
  //   // setTimeout(toNext, 3000);
  //   // //clear timeout when component unmounts
  //   // return function () {
  //   //   clearTimeout(toNext);
  //   // };
  //   toNext();
  // }, []);
  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <section className="slider">
      {slides.map((item, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
          //for accessability reasons each non-active element is hidden
          aria-hidden={index !== current}
        >
          <h1>{item.title}</h1>
          {index === current && (
            <img
              className="picture"
              src={item.picture}
              alt={`${item.title}picture`}
            />
          )}
        </div>
      ))}
      <button onClick={toNext}>Next</button>
    </section>
  );
};

const SlideWrapper = () => {
  return (
    <div>
      <Slider slides={projectData} />
    </div>
  );
};

export default SlideWrapper;
