import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css"

import Landing from "./layouts/Landing.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing" component={Landing} />
      <Redirect to="/landing" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
