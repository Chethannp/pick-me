import React from "react";
import { Route } from "react-router-dom";
import Home from "../client/pages/Home/home";

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};
