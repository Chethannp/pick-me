//Starting point for server code

import express from "express";
import renderer from "./renderer";

const app = express();

//Refer to public folder for all the assets
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  res.send(renderer(req));
});

app.listen(9000, () => {
  console.log("Listening on port 'https://localhost:9000'");
});
