import Home from "./Home";
import { Route } from "react-router-dom";
import React from "react";
import UsersList from "./UsersList";
export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UsersList} />
    </div>
  );
};
