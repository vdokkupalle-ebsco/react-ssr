import Home from "./Home";
import { Route } from "react-router-dom";
import React from "react";
export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};
