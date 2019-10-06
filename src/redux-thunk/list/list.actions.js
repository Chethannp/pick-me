import axios from "../../utils/api";

//Types declarations
export const SAVE_FETCHED_CASES = "Saver_Fetched_Cases";
export const HANDLE_PAGE_LOADER = `Handle_Page_Loader`;
export const HANDLE_LOGIN_ERROR = `Handle_Login_Error`;
export const HANDLE_LOGIN_SUCCESS = `Handle_Login_Success`;
export const SHOW_CUSTOM_TOAST = `Show_Custom_Toast`;

/**
 * @function - {Function} - used to fetch data from the server
 * @param - () - has the ability to accept params, but currently none in our case so its marked empty
 * @async - Used to allow asynchronus fetch calls (i.e., await) from the server
 * @dispatch - Used to dispatch an action to the reducer.
 */

export const fetchAllPosts = () => async dispatch => {
  try {
    const data = await axios("/repo", "get");
    dispatch(saveFetchedCases(data));
  } catch (error) {
    console.error(error);
  }
};

export const saveFetchedCases = data => async (dispatch, getState) => {
  let prevData = getState().list.postList;

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

export const validateUserLogin = credentials => async dispatch => {
  dispatch(showPageLoader(true));
  try {
    const data = await axios("/account", "post");
    setTimeout(() => {
      dispatch(handleAuthResponse(data));
    }, 3000);
  } catch (error) {
    console.error(error);
  }
};

const handleAuthResponse = data => dispatch => {
  if (data.error) {
    dispatch({
      type: HANDLE_LOGIN_ERROR,
      payload: {
        status: false,
        message: "Username or password is incorrect!"
      }
    });
  } else {
    dispatch({
      type: HANDLE_LOGIN_SUCCESS,
      payload: {
        status: true,
        message: "Logged In Successfully"
      }
    });
  }

  dispatch(showPageLoader(false));
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

export const showCustomToast = message => dispatch => {
  dispatch({
    type: SHOW_CUSTOM_TOAST,
    payload: message
  });
};
