import React, { useState } from "react";
import "../styles/componentStyles/ButtonGroup.scss";

const ButtonGroup = ({ setKeyword }) => {
  const buttons = [
    { value: "all", id: "b1", btn: "i1", name: "All GitHub Repos" },
    { value: "deployed", id: "b2", btn: "i2", name: "Only Deployed" },
    { value: "JavaScript", id: "b3", btn: "i3", name: "JavaScript & React" },
    { value: "Java", id: "b4", btn: "i4", name: "Java" },
    { value: "HTML", id: "b5", btn: "i5", name: "CSS & JQuery & Bootstrap" },
  ];
  const [selected, setSelected] = useState("b1");

  const handleSelected = (id) => {
    setSelected(id);
  };

  return (
    <div className="button-group">
      <ul>
        {buttons.map((item) => (
          <li
            value={item.value}
            id={item.id}
            key={item.id}
            onClick={() => {
              setKeyword(`${item.value}`);
              handleSelected(item.id);
            }}
            className={selected === item.id ? "selected" : ""}
          >
            <label for={item.id}>{item.name}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonGroup;
