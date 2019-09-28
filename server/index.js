import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../src/pages/Home/home";

const app = express();

app.get("/", (req, res, next) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log("Listening on port 'https://localhost:3000'");
});
