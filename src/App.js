import React, { useState } from "react";
import { Portfolio, Education, Home, Experience } from "./pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Burger from "./components/nav/Burger";
import Menu from "./components/nav/Menu";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import ScrollToTop from "./components/nav/ScrollToTop";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const App = () => {
  const [open, setOpen] = useState(false);
  const history = createBrowserHistory();

  // Initialize google analytics page view tracking
  history.listen((location) => {
    ReactGA.initialize("UA-173430018-1");
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

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
