import "babel-polyfill";
import renderer from "./helpers/renderer";
import express from "express";
const app = express();
import { matchRoutes } from "react-router-config";
import createStore from "./helpers/createStore";
import Routes from "./client/components/Routes";

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
