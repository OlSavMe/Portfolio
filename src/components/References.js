import React, { useState, useRef, useCallback } from "react";
import "../styles/componentStyles/References.scss";
import referenceData from "../data/ReferenceData";

const References = () => {
  const [current, setCurrent] = useState(0);
  const referenceRef = useRef(0);
  const { length } = referenceData;

  const toNextRef = useCallback(() => {
    const index = current === length - 1 ? 0 : current + 1;
    setCurrent(index);
    referenceRef.current.focus();
  }, [current, length]);

  const toPrevRef = useCallback(() => {
    const index = current === 0 ? length - 1 : current - 1;
    setCurrent(index);
    referenceRef.current.focus();
  }, [current, length]);

  return (
    <section className="content-slider">
      {referenceData.map((item, index) => (
        <div
          ref={referenceRef}
          className={index === current ? "ref active" : "ref"}
          key={index}
          //for accessability reasons each non-active element is hidden
          aria-hidden={index !== current}
        >
          {index === current && (
            <div className="quote-wrapper">
              <p className="quote">{item.text}</p>
              <h3 className="source">{item.source}</h3>
            </div>
          )}
        </div>
      ))}
      <button className="prevbutton" onMouseDown={toPrevRef}>
        &lsaquo;
      </button>
      <button className="nextbutton" onMouseDown={toNextRef}>
        &rsaquo;
      </button>
    </section>
  );
};

export default References;
