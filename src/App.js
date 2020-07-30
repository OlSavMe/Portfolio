import React, { useState } from "react";
import { Portfolio, Education, Home, Experience } from "./pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Burger from "./components/nav/Burger";
import Menu from "./components/nav/Menu";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import ScrollToTop from "./components/nav/ScrollToTop";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      {/* for scroll restoration on clicking page link  */}
      <ScrollToTop />
      <Nav />
      <Logo open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/edu" component={Education} />
        <Route path="/exp" component={Experience} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
