import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../routes";

export default (req, store) => {
  const preloadedState = store.getState();
  let stateJson = JSON.stringify(preloadedState).replace(/</g, "\\u003c");

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" href="/images/favicon.ico">
        <title>Pick Me!</title>
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
        <script>window.__PRELOADED_STATE__ = ${stateJson}</script>
    </body>
    </html>
  `;
};
