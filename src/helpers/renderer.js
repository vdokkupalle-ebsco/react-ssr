import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

export default function renderer() {
  const conent = renderToString(<Home />);
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
