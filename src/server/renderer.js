import React from "react";
import Routes from "../routes";
import { matchPath } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../client/App";
import serialize from "serialize-javascript";
import { HelmetProvider } from "react-helmet-async";

export default (req, res, next, store) => {
  const activeRoute = Routes.find(route => matchPath(req.url, route)) || {};

  const promise = activeRoute.loadData
    ? activeRoute.loadData(store)
    : Promise.resolve();

  promise
    .then(() => {
      const preloadedState = store.getState();
      let stateJson = serialize(preloadedState);

      const helmetContext = {};

      const content = renderToString(
        <HelmetProvider context={helmetContext}>
          <Provider store={store}>
            <StaticRouter location={req.url}>
              <App />
            </StaticRouter>
          </Provider>
        </HelmetProvider>
      );

      // Creating an instance of Helmet to pull all the tags out of the library
      const { helmet } = helmetContext;

      res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Pick Me!</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, user-scalable=yes">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <link rel="shortcut icon" href="/images/favicon.ico">
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
