import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../client/App";

import { matchPath } from "react-router-dom";
import Routes from "../routes";

export default (req, res, next, store) => {
  const activeRoute = Routes.find(route => matchPath(req.url, route)) || {};

  const promise = activeRoute.loadData
    ? activeRoute.loadData(store)
    : Promise.resolve();

  promise
    .then(() => {
      const preloadedState = store.getState();
      let stateJson = JSON.stringify(preloadedState).replace(/</g, "\\u003c");

      const content = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      );

      res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Pick Me!</title>
            <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, user-scalable=yes">
          <script src="bundle.js" defer></script>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>window.__PRELOADED_STATE__ = ${stateJson}</script>
        </body>
        </html>
    `);
    })
    .catch(next);
};
