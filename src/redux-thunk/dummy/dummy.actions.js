import axios from "../../utils/api";

//Types declarations
export const SAVE_FETCHED_CASES = "Saver_Fetched_Cases";
export const HANDLE_PAGE_LOADER = `Handle_Page_Loader`;

/**
 * @function - {Function} - used to fetch data from the server
 * @param - () - has the ability to accept params, but currently none in our case so its marked empty
 * @async - Used to allow asynchronus fetch calls (i.e., await) from the server
 * @dispatch - Used to dispatch an action to the reducer.
 */

export const fetchAllPosts = () => async dispatch => {
  try {
    const data = await axios("/repos");
    dispatch(saveFetchedCases(data));
  } catch (error) {
    console.error(error);
  }
};

export const saveFetchedCases = data => async (dispatch, getState) => {
  let prevData = getState().dummy.postList;

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

export const validateUserLogin = credentials => dispatch => {
  dispatch(showPageLoader(true));
  setTimeout(() => {
    dispatch(showPageLoader(false));
  }, 5000);
};

export const registerUserDetails = userInfo => dispatch => {
  dispatch(showPageLoader(true));
  setTimeout(() => {
    dispatch(showPageLoader(false));
  }, 5000);
};

export const showPageLoader = status => dispatch => {
  dispatch({
    type: HANDLE_PAGE_LOADER,
    payload: status
  });
};
