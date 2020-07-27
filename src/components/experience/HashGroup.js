import React from "react";

const HashGroup = () => {
  const buttons = [
    { value: "theshortcut", id: "1" },
    { value: "frontend", id: "1" },
    { value: "webscale", id: "2" },
    { value: "UX", id: "3" },
    { value: "translator", id: "4" },
    { value: "SEO", id: "5" },
  ];

  return (
    <div className="hash-group">
      <ul>
        {buttons.map((i) => (
          <li key={i.value}>
            <a href={`/exp/${i.id}`}>#{i.value}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HashGroup;
