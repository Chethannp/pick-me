// Just to maintain a cleaner code and structuring
//I have created a new file for creating a store on server side.
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux-thunk";

/**Server store creation
 * @function default -
 * @const store = {object} - An object that holds the complete state of your app.
 * @function createStore - Creates a Redux store that holds the complete state tree of your app.
 * @param reducers - {Function} - It is a collection of reducers that are created in the project
 * @param  state - {any} - The initial state
 * @param applyMiddleware(thunk) - {Function} - The store enhancer
 * @returns store
 */

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};
