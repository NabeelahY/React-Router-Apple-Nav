import React, { Component } from "react";
import NavWrapper from "./AppleNav/NavWrapper";
import AppleData  from './navData';

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.setState({
      products: AppleData
    })
  }

  render() {
    return (
      <header>
        <NavWrapper links={this.state.products} />
      </header>
    );
  }
}
