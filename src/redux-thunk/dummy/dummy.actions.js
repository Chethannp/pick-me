import axios from "../../utils/api";

//Types declarations
export const SAVE_FETCHED_CASES = "Saver_Fetched_Cases";

/**
 * @function - {Function} - used to fetch data from the server
 * @param - () - has the ability to accept params, but currently none in our case so its marked empty
 * @async - Used to allow asynchronus fetch calls (i.e., await) from the server
 * @dispatch - Used to dispatch an action to the reducer.
 */

export const fetchAllCases = () => async dispatch => {
  try {
    const data = await axios("/repos");
    dispatch(saveFetchedCases(data));
  } catch (error) {
    console.error(error);
  }
};

export const saveFetchedCases = data => async (dispatch, getState) => {
  let prevData = getState().dummy.dummyList;

  if (prevData != data) {
    let updatedList = [];
    updatedList = [...prevData, ...data];

    if (updatedList == []) return;
    dispatch({
      type: SAVE_FETCHED_CASES,
      payload: updatedList
    });
  }
};
