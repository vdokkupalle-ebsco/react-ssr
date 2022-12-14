import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../client/components/Routes";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

export default function renderer(req, store) {
  const conent = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
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
