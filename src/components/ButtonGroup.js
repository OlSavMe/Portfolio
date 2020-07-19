import React, { useState } from "react";
import "../styles/ButtonGroup.scss";

const ButtonGroup = ({ setKeyword }) => {
  // const [isChecked, setIsChecked] = useState(true);
  // const [name, setName] = useState("");
  const buttons = [
    { value: "all", id: "b1", btn: "i1", name: "All GitHub Repos" },
    { value: "deployed", id: "b2", btn: "i2", name: "Only Deployed" },
    { value: "JavaScript", id: "b3", btn: "i3", name: "JavaScript & React" },
    { value: "Java", id: "b4", btn: "i4", name: "Java" },
    { value: "HTML", id: "b5", btn: "i5", name: "CSS & JQuery & Bootstrap" },
  ];
  // const [active, setActive] = useState(1);

  // const click = (val) => {
  //   setActive({ active: val });
  // };

  // const toggleChange = (e) => {
  //   const { value, x } = e.target;
  //   if (value === `${keyword}`) {
  //     x.classList.add("select");
  //   }
  // };

  // const toggleChange = () => {
  //   setIsChecked(!isChecked);
  // };

  // const onRadioChange = (e) => {
  //   setKeyword(e.target.value);
  // };

  return (
    <div className="button-group">
      {/* {buttons.map((btn) => (
        <input
          type="radio"
          id={btn.id}
          // checked={isChecked}
          // onChange={toggleChange}
        />
      ))} */}
      {/* 
      <select className="input">
        {buttons.map((btn) => (
          <option
            id={btn.id}
            value={btn.value}
            onChange={() => click(`${btn.id}`)}
          />
        ))}
      </select> */}

      <ul>
        {buttons.map((i) => (
          <li
            // onClick={() => click(`${i.id}`)}
            // active={`${i.id}`}
            // className={active ? "active" : ""}
            value={i.value}
            id={i.btn}
            key={i.btn}
            onClick={() => setKeyword(`${i.value}`)}
          >
            <label for={i.id}>{i.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonGroup;
