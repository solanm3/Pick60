import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";

import About from "./components/layouts/About.js";
import Home from "./components/layouts/Home.js";
import Prediction from "./components/layouts/PredictPage.js";
import Bet from "./BetApp.js";
import SendBet from "./components/BetPages/SendBet.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/About" component={About} />
      <Route path="/SendBet" component={SendBet} />
      <Route path="/Prediction/:key" component={Prediction} />
      <Route path="/bet/:key/:team" component={Bet} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
