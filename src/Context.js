import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

const Provider = (props) => {
  const [repos, setRepos] = useState([]);
  const url =
    "https://api.github.com/users/OlSavMe/repos?sort=updated&direction=desc&per_page=100";

  useEffect(() => {
    getRepos(); // eslint-disable-next-line
  }, []);

  const getRepos = async () => {
    await axios.get(url).then((response) => {
      setRepos(response.data);
    });
  };

  console.log(repos);
  const nofork = repos.filter((repo) => repo.fork === false);

  return (
    <Context.Provider value={{ nofork }}>{props.children}</Context.Provider>
  );
};

export const Consumer = Context.Consumer;
export default Provider;
