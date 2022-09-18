import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../client/components/Routes";
import { StaticRouter } from "react-router-dom";

export default function renderer(req) {
  const conent = renderToString(
    <StaticRouter context={{}} location={req.path}>
      <Routes />
    </StaticRouter>
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
