import React from "react";
import "../styles/Slider.scss";

const Slider = () => {
  return (
    <div className="slider">
      <p>Selected Projects</p>

      <div class="slides">
        <input type="radio" id="i1" name="images" checked />
        <input type="radio" id="i2" name="images" />
        <input type="radio" id="i3" name="images" />
        <input type="radio" id="i4" name="images" />
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
          <img src="img/pr.jpg" />

          <label className="prev" for="i1">
            <span></span>
          </label>
          <label className="next" for="i3">
            <span></span>
          </label>
        </div>
        <div className="slide_img" id="three">
          <img src="img/short.jpg" />

          <label className="prev" for="i2">
            <span></span>
          </label>
          <label className="next" for="i4">
            <span></span>
          </label>
        </div>
        <div className="slide_img" id="four">
          <img src="img/short.jpg" />

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
