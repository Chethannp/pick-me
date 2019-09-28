//Starting point for client code

import React from "react";
import ReactDom from "react-dom";
import Routes from "../routes";
import { BrowserRouter } from "react-router-dom";

/**
 * createStore - function is used to make a redux store
 * applyMiddleware - function is used to hook up any middlewares that we might use in the project
 * thunk - To handle asynchronous action creators
 * Provider - Ties our store and react together, it is a react component that is used to communicate data from store to any connected component
 */

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "../redux-thunk";

/**Client store creation
 * @const store = {object} - An object that holds the complete state of your app.
 * @function createStore - Creates a Redux store that holds the complete state tree of your app.
 * @param reducers - {Function} - It is a collection of reducers that are created in the project
 * @param  state - {any} - The initial state
 * @param applyMiddleware(thunk) - {Function} - The store enhancer
 */

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
