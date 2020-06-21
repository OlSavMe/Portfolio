import React, { useState } from "react";
import { Portfolio, Education, Home, Experience, Contact } from "./pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Logo from "./components/Logo";

const App = () => {
  const [open, setOpen] = useState(false);
  {
    return (
      <Router>
        <Switch>
          <>
            <Logo />
            <Nav open={open} setOpen={setOpen} />
            <div className="App">
              <Route path="/" exact component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/edu" component={Education} />
              <Route path="/exp" component={Experience} />
              <Route path="/contact" component={Contact} />
            </div>
          </>
        </Switch>
      </Router>
    );
  }
};

export default App;
