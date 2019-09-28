//Starting point for server code
import express from "express";
import renderer from "./renderer";
import createStore from "./createStore";

//Creating an express instance
const app = express();

//Refer to public folder for all the assets
app.use(express.static("public"));

//Proxy setup
process.env.API_ENDPOINT = "http://localhost:9002";
const proxy = require("http-proxy-middleware");
app.use("/repositories", proxy({ target: process.env.API_ENDPOINT }));

app.get("*", (req, res, next) => {
  //Creating server store and then passing it to the renderer function
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(9000, () => {
  console.log("Listening on port 'https://localhost:9000'");
});
