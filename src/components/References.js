import React, { useState } from "react";
import "../styles/References.scss";

const References = () => {
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

  return (
    <div class="content-slider">
      <div class="ref">
        <div class="mask">
          <ul>
            <li class="anim1">
              <div class="quote">
                When I was interviewing Olga for the developer position, I was
                very impressed noticing how level headed and professional she
                is. Olga is very practical with expectations setting and
                delivers what's promised in due time even if it requires
                learning new things on the go. She also led sessions at The
                Shortcut hosted FreeCodeCamp meetup on Redux and did a
                tremendous job as per feedback from the participants. She is
                very proficient with JavaScript frontend technologies and
                especially comfortable with React and necessary libraries to
                pull off a project from scratch. Olga worked on The Shortcut's
                database management system's frontend and the new website of The
                Shortcut both of which required her to use React, and she did a
                great thorough job on both. I would highly recommend Olga as a
                great professional, friendly, and welcoming team player and a
                developer who works very calmly under pressure.
              </div>
              <div class="source">
                - Mojjammil Khandker, CTO at The Shortcut
              </div>
            </li>
            <li class="anim2">
              <div class="quote">
                When I was interviewing Olga for the developer position, I was
                very impressed noticing how level headed and professional she
                is. Olga is very practical with expectations setting and
                delivers what's promised in due time even if it requires
                learning new things on the go. She also led sessions at The
                Shortcut hosted FreeCodeCamp meetup on Redux and did a
                tremendous job as per feedback from the participants. She is
                very proficient with JavaScript frontend technologies and
                especially comfortable with React and necessary libraries to
                pull off a project from scratch. Olga worked on The Shortcut's
                database management system's frontend and the new website of The
                Shortcut both of which required her to use React, and she did a
                great thorough job on both. I would highly recommend Olga as a
                great professional, friendly, and welcoming team player and a
                developer who works very calmly under pressure.
              </div>
              <div class="source">
                - Mojjammil Khandker, CTO at The Shortcut
              </div>
            </li>
            <li class="anim3">
              <div class="quote">
                When I was interviewing Olga for the developer position, I was
                very impressed noticing how level headed and professional she
                is. Olga is very practical with expectations setting and
                delivers what's promised in due time even if it requires
                learning new things on the go. She also led sessions at The
                Shortcut hosted FreeCodeCamp meetup on Redux and did a
                tremendous job as per feedback from the participants. She is
                very proficient with JavaScript frontend technologies and
                especially comfortable with React and necessary libraries to
                pull off a project from scratch. Olga worked on The Shortcut's
                database management system's frontend and the new website of The
                Shortcut both of which required her to use React, and she did a
                great thorough job on both. I would highly recommend Olga as a
                great professional, friendly, and welcoming team player and a
                developer who works very calmly under pressure.
              </div>
              <div class="source">
                - Mojjammil Khandker, CTO at The Shortcut
              </div>
            </li>
            <li class="anim4">
              <div class="quote">
                When I was interviewing Olga for the developer position, I was
                very impressed noticing how level headed and professional she
                is. Olga is very practical with expectations setting and
                delivers what's promised in due time even if it requires
                learning new things on the go. She also led sessions at The
                Shortcut hosted FreeCodeCamp meetup on Redux and did a
                tremendous job as per feedback from the participants. She is
                very proficient with JavaScript frontend technologies and
                especially comfortable with React and necessary libraries to
                pull off a project from scratch. Olga worked on The Shortcut's
                database management system's frontend and the new website of The
                Shortcut both of which required her to use React, and she did a
                great thorough job on both. I would highly recommend Olga as a
                great professional, friendly, and welcoming team player and a
                developer who works very calmly under pressure.
              </div>
              <div class="source">
                - Mojjammil Khandker, CTO at The Shortcut
              </div>
            </li>
            <li class="anim5">
              <div class="quote">
                When I was interviewing Olga for the developer position, I was
                very impressed noticing how level headed and professional she
                is. Olga is very practical with expectations setting and
                delivers what's promised in due time even if it requires
                learning new things on the go. She also led sessions at The
                Shortcut hosted FreeCodeCamp meetup on Redux and did a
                tremendous job as per feedback from the participants. She is
                very proficient with JavaScript frontend technologies and
                especially comfortable with React and necessary libraries to
                pull off a project from scratch. Olga worked on The Shortcut's
                database management system's frontend and the new website of The
                Shortcut both of which required her to use React, and she did a
                great thorough job on both. I would highly recommend Olga as a
                great professional, friendly, and welcoming team player and a
                developer who works very calmly under pressure.
              </div>
              <div class="source">
                - Mojjammil Khandker, CTO at The Shortcut
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div className="refs">
    //   <div class="texts">
    //     {radios.reverse().map((radio) => (
    //       <input
    //         type="radio"
    //         name="image"
    //         id={radio.value}
    //         checked={isChecked}
    //         onChange={toggleChange}
    //       />
    //     ))}

    //     <div className="slide_text" id="one">
    //       <img src="img/short.jpg" />
    //     </div>
    //     <div className="slide_text" id="two">
    //       <img src="img/short.jpg" />
    //     </div>
    //     <div className="slide_text" id="three">
    //       <img src="img/short.jpg" />
    //     </div>
    //     <div className="slide_text" id="four">
    //       <img src="img/short.jpg" />
    //     </div>

    //     {/* <div className="slide_text" id="one">
    //   <p>
    //     When I was interviewing Olga for the developer position, I was very
    //     impressed noticing how level headed and professional she is. Olga is
    //     very practical with expectations setting and delivers what's
    //     promised in due time even if it requires learning new things on the
    //     go. She also led sessions at The Shortcut hosted FreeCodeCamp meetup
    //     on Redux and did a tremendous job as per feedback from the
    //     participants. She is very proficient with JavaScript frontend
    //     technologies and especially comfortable with React and necessary
    //     libraries to pull off a project from scratch. Olga worked on The
    //     Shortcut's database management system's frontend and the new website
    //     of The Shortcut both of which required her to use React, and she did
    //     a great thorough job on both. I would highly recommend Olga as a
    //     great professional, friendly, and welcoming team player and a
    //     developer who works very calmly under pressure.
    //   </p>
    //   <p>Mojjammil Khandker, CTO at The Shortcut</p>
    // </div>

    //     <div className="slide_text" id="two">
    //       <p>
    //         When I was interviewing Olga for the developer position, I was very
    //         impressed noticing how level headed and professional she is. Olga is
    //         very practical with expectations setting and delivers what's
    //         promised in due time even if it requires learning new things on the
    //         go. She also led sessions at The Shortcut hosted FreeCodeCamp meetup
    //         on Redux and did a tremendous job as per feedback from the
    //         participants. She is very proficient with JavaScript frontend
    //         technologies and especially comfortable with React and necessary
    //         libraries to pull off a project from scratch. Olga worked on The
    //         Shortcut's database management system's frontend and the new website
    //         of The Shortcut both of which required her to use React, and she did
    //         a great thorough job on both. I would highly recommend Olga as a
    //         great professional, friendly, and welcoming team player and a
    //         developer who works very calmly under pressure.
    //       </p>
    //       <p>Mojjammil Khandker, CTO at The Shortcut</p>
    //     </div>

    //     <div className="slide_text" id="three">
    //       <p>
    //         When I was interviewing Olga for the developer position, I was very
    //         impressed noticing how level headed and professional she is. Olga is
    //         very practical with expectations setting and delivers what's
    //         promised in due time even if it requires learning new things on the
    //         go. She also led sessions at The Shortcut hosted FreeCodeCamp meetup
    //         on Redux and did a tremendous job as per feedback from the
    //         participants. She is very proficient with JavaScript frontend
    //         technologies and especially comfortable with React and necessary
    //         libraries to pull off a project from scratch. Olga worked on The
    //         Shortcut's database management system's frontend and the new website
    //         of The Shortcut both of which required her to use React, and she did
    //         a great thorough job on both. I would highly recommend Olga as a
    //         great professional, friendly, and welcoming team player and a
    //         developer who works very calmly under pressure.
    //       </p>
    //       <p>Mojjammil Khandker, CTO at The Shortcut</p>
    //     </div>

    //     <div className="slide_text" id="four">
    //       <p>
    //         "When I was interviewing Olga for the developer position, I was very
    //         impressed noticing how level headed and professional she is. Olga is
    //         very practical with expectations setting and delivers what's
    //         promised in due time even if it requires learning new things on the
    //         go. She also led sessions at The Shortcut hosted FreeCodeCamp meetup
    //         on Redux and did a tremendous job as per feedback from the
    //         participants. She is very proficient with JavaScript frontend
    //         technologies and especially comfortable with React and necessary
    //         libraries to pull off a project from scratch. Olga worked on The
    //         Shortcut's database management system's frontend and the new website
    //         of The Shortcut both of which required her to use React, and she did
    //         a great thorough job on both. I would highly recommend Olga as a
    //         great professional, friendly, and welcoming team player and a
    //         developer who works very calmly under pressure."
    //       </p>
    //       <p>Mojjammil Khandker, CTO at The Shortcut</p>
    //     </div> */}
    //     <div id="nav_slide">
    //       {radios.reverse().map((radio) => (
    //         <label for={radio.value} className="dots" id={radio.id} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default References;
