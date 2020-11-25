import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HashGroup = () => {
  const buttons = [
    { value: "TheShortcut", id: 1, btn: 1 },
    { value: "WebDeveloper", id: 7, btn: 2 },
    { value: "WebscaleOy", id: 2, btn: 3 },
    { value: "UXDesign", id: 3, btn: 4 },
    { value: "TechTranslator", id: 5, btn: 5 },
    { value: "SEO", id: 6, btn: 6 },
    { value: "e-commerce", id: 6, btn: 7 },
    { value: "Alejandra", id: 7, btn: 8 },
  ];

  const [selected, setSelected] = useState("");

  const handleSelected = (btn) => {
    setSelected(btn);
  };

  return (
    <div className="hash-group">
      <ul>
        {buttons.map((i) => (
          <li>
            <AnchorLink
              key={i.btn}
              id={i.ibtn}
              onClick={() => {
                handleSelected(i.btn);
              }}
              className={selected === i.btn ? "selected" : ""}
              href={`#${i.id}`}
            >
              #{i.value}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HashGroup;
