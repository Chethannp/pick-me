import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../src/pages/Home/home";

export default () => {
  const content = renderToString(<Home />);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" href="/images/favicon.ico">
        <title>Pick Me</title>
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
    </body>
    </html>
  `;
};
