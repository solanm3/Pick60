import React, { Component, Fragment } from "react";
import { Header, Home, OurTeam } from "./components/layouts";
import App from "./App.js";
//import { BrowserRouter as Router } from "react-router-dom";
//import Route from "react-router-dom/Route";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <OurTeam />
        <Home />
      </Fragment>
    );
  }
}
