import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  const conent = renderToString(<Home />);
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${conent}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
