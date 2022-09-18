import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../client/components/Routes";
import { StaticRouter } from "react-router-dom";
import createStore from "./createStore";
import { Provider } from "react-redux";

export default function renderer(req) {
  const store = createStore();

  const conent = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
      <html>
        <head></head>
        <body>
          <div id="root">${conent}</div>
          <script src="bundle.js"></script>
        </body>
      </html>
    `;
}
