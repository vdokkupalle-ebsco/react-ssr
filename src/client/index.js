import "babel-polyfill";
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Routes from "./components/Routes";
import { Provider } from "react-redux";
import createStore from "../helpers/createStore";

const store = createStore();

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
