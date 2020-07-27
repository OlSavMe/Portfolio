import React, { useContext, useState, useEffect } from "react";
import "../styles/Github.scss";
import ButtonGroup from "../components/ButtonGroup";
import { All, Filtered, Deployed } from "../components/repos/FilteredRepos";

import { Context } from "../Context";

function Github(props) {
  const appContext = useContext(Context);
  const { nofork } = appContext;
  const [keyword, setKeyword] = useState("all");

  const getRepos = () => {
    // eslint-disable-next-line
    switch (keyword) {
      case "all":
        return <All nofork={nofork} />;
      case "Java":
        return <Filtered keyword={keyword} nofork={nofork} />;
      case "JavaScript":
        return <Filtered keyword={keyword} nofork={nofork} />;
      case "HTML":
        return <Filtered keyword={keyword} nofork={nofork} />;
      case "deployed":
        return <Deployed nofork={nofork} />;
    }
  };

  return (
    <div className="github">
      <ButtonGroup setKeyword={setKeyword} />
      <div className="repolist">{getRepos()}</div>
    </div>
  );
}

export default Github;
