import React from "react";

import "./main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Import Components
import Container from "./Container";
import Nav from "./Nav";
import Body from "./Body";
import Footer from "./Footer";
import Preview from "./Preview";

function App() {
  return (
      <Router>
    <div className="Appp">
      <Switch>
        <Route exact path="/">
          <div className="landing-extension">
            <Nav />
          </div>
          <Body />
          <Footer />
        </Route>
        </Switch>
        
        <Switch>
        <Route path="/catalog">
          <Container />
          </Route>
        </Switch>
        <Switch>
          <Route path="/preview">
            <Preview/>
          </Route>
        </Switch>
    </div>
  </Router>
  );
}


export default App;
