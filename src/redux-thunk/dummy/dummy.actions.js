import axios from "axios";

//Types declarations
export const FIRST_CASE = "First_Case";

/**
 * @function - {Function} - used to fetch data from the server
 * @param - () - has the ability to accept params, but currently none in our case so its marked empty
 * @async - Used to allow asynchronus fetch calls (i.e., await) from the server
 * @dispatch - Used to dispatch an action to the reducer.
 */

export const fetchCase = () => async dispatch => {
  try {
    const res = await axios.get("/dummy?ID=12345");
    dispatch({
      type: FIRST_CASE,
      payload: res
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
