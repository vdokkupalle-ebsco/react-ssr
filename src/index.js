const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const Home = require("./client/components/Home.jsx").default;

const app = express();

app.get("/", (req, res) => {
  const html = renderToString(<Home />);
  res.send(html);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
