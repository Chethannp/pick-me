import { FIRST_CASE } from "./dummy.actions";

/**
 * @function - default
 * @param - {Object} - contains the initial state of the store
 * @param - {Object} - Action creators which holds an object with type and paylod.
 * @return - {Object} - It returns the redux store
 */

export default (
  state = {
    data: []
  },
  action
) => {
  switch (action.type) {
    case FIRST_CASE:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
