import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavWrapper from "./AppleNav/NavWrapper";
import SubNav from "./AppleNav/SubNav";

import "./App.css";

export default class App extends Component {
 

  render() {
    return (
      <Router>
        <header>
        <Route path='/' component={NavWrapper} />
        <Route path='/:name' component={SubNav} />
        </header>
      </Router>
    );
  }
}
