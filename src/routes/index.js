import React from "react";
import { Route } from "react-router-dom";
import Home from "../client/pages/Home/home";
// import Details from "../client/pages/Details/details";

export default () => {
  return <Route exact path="/" component={Home} />;
};
