import axios from "../../utils/api";
//Types declarations
export const FETCH_ALL_CASES = "Fetch_All_Cases";

/**
 * @function - {Function} - used to fetch data from the server
 * @param - () - has the ability to accept params, but currently none in our case so its marked empty
 * @async - Used to allow asynchronus fetch calls (i.e., await) from the server
 * @dispatch - Used to dispatch an action to the reducer.
 */

export const fetchAllCases = (id = "all") => async dispatch => {
  try {
    const data = axios(`/repositories?dummy=${id}`);
    dispatch({
      type: FETCH_ALL_CASES,
      payload: data
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
