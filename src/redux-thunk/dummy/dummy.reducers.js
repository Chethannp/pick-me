import { SAVE_FETCHED_CASES } from "./dummy.actions";

/**
 * @function - default
 * @param - {Object} - contains the initial state of the store
 * @param - {Object} - Action creators which holds an object with type and paylod.
 * @return - {Object} - It returns the redux store
 */

export default (
  state = {
    dummyList: [],
    postListCount: 20 //Hard coded value just to demonstrate lazyloading feature
  },
  action
) => {
  switch (action.type) {
    case SAVE_FETCHED_CASES: {
      return {
        ...state,
        dummyList: action.payload
      };
    }
    default:
      return state;
  }
};
