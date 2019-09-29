import axios from "../../utils/api";

//Types declarations
export const SAVE_FETCHED_CASES = "Saver_Fetched_Cases";

/**
 * @function - {Function} - used to fetch data from the server
 * @param - () - has the ability to accept params, but currently none in our case so its marked empty
 * @async - Used to allow asynchronus fetch calls (i.e., await) from the server
 * @dispatch - Used to dispatch an action to the reducer.
 */

export const fetchAllCases = (id = "all") => async dispatch => {
  try {
    const data = await axios(`/repositories?dummy=${id}`);
    dispatch(saveFetchedCases(data));
  } catch (error) {
    console.error(error);
  }
};

export const saveFetchedCases = data => async dispatch => {
  if (data) {
    dispatch({
      type: SAVE_FETCHED_CASES,
      payload: data
    });
  }
};
