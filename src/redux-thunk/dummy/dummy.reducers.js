import { SAVE_FETCHED_CASES, HANDLE_PAGE_LOADER } from "./dummy.actions";

/**
 * @function - default
 * @param - {Object} - contains the initial state of the store
 * @param - {Object} - Action creators which holds an object with type and paylod.
 * @return - {Object} - It returns the redux store
 */

export default (
  state = {
    postList: [],
    postListCount: 20, //Hard coded value just to demonstrate lazyloading feature
    pageLoader: false
  },
  action
) => {
  switch (action.type) {
    case SAVE_FETCHED_CASES: {
      return {
        ...state,
        postList: action.payload
      };
    }
    case HANDLE_PAGE_LOADER: {
      return {
        ...state,
        pageLoader: action.payload
      };
    }
    default:
      return state;
  }
};
