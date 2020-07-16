import React, { useState } from "react";
import "../styles/Slider.scss";

const Slider = () => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="slider">
      <p>Selected Projects</p>

      <div class="slides">
        <input
          type="radio"
          name="image"
          id="i1"
          checked={isChecked}
          onChange={toggleChange}
        />
        <input
          type="radio"
          name="image"
          id="i2"
          checked={isChecked}
          onChange={toggleChange}
        />
        <input
          type="radio"
          name="image"
          id="i3"
          checked={isChecked}
          onChange={toggleChange}
        />
        <input
          type="radio"
          name="image"
          id="i4"
          checked={isChecked}
          onChange={toggleChange}
        />
        <div className="slide_img" id="one">
          <img src="img/short.jpg" />

          <label className="prev" for="i4">
            <span></span>
          </label>
          <label className="next" for="i2">
            <span></span>
          </label>
        </div>

        <div className="slide_img" id="two">
          <img src="img/current.jpg" />

          <label className="prev" for="i1">
            <span></span>
          </label>
          <label className="next" for="i3">
            <span></span>
          </label>
        </div>
        <div className="slide_img" id="three">
          <img src="img/pr.jpg" />

          <label className="prev" for="i2">
            <span></span>
          </label>
          <label className="next" for="i4">
            <span></span>
          </label>
        </div>
        <div className="slide_img" id="four">
          <img src="img/manag.png" />
          <label className="prev" for="i3">
            <span></span>
          </label>
          <label className="next" for="i1">
            <span></span>
          </label>
        </div>
        <div id="nav_slide">
          <label for="i1" className="dots" id="dot1"></label>
          <label for="i2" className="dots" id="dot2"></label>
          <label for="i3" className="dots" id="dot3"></label>
          <label for="i4" className="dots" id="dot4"></label>
        </div>
      </div>
    </div>
  );
};

export default Slider;
