import moment from "moment";
import axios from "../../utils/api";

// Types declarations
export const SAVE_FETCHED_LISTS = "Saver_Fetched_Lists";
export const HANDLE_PAGE_LOADER = "Handle_Page_Loader";
export const HANDLE_LOGIN_ERROR = "Handle_Login_Error";
export const HANDLE_LOGIN_SUCCESS = "Handle_Login_Success";
export const SHOW_CUSTOM_TOAST = "Show_Custom_Toast";
export const SAVE_PROFILE_INFO = "Save_Profile_Info";
/**
 * @function - {Function} - used to fetch data from the server
 * @param - () - has the ability to accept params, but currently none in our case so its marked empty
 * @async - Used to allow asynchronus fetch calls (i.e., await) from the server
 * @dispatch - Used to dispatch an action to the reducer.
 */

export const fetchAllPosts = () => async dispatch => {
    try {
        const res = await axios("/repo", "get");
        dispatch(saveFetchedList(res));
    } catch (error) {
        console.error(error);
    }
};

export const saveFetchedList = res => async (dispatch, getState) => {
    //Using moment Js library to convert server time to standard hours and day notation so that we can display a readable text for the user.
    const data = res.map(list => {
        if (list.time_of_post) {
            list.time_of_post = moment(new Date(list.time_of_post)).fromNow();
        }
        return list;
    });

    //Check for the prevdata to avoid unecessary dispatch of action
    const prevData = getState().list.postList || [];

    if (prevData != data) {
        let updatedList = [];
        updatedList = [...prevData, ...data];

        if (updatedList == []) return;

        const sponsoredList = updatedList
            ? updatedList.filter(item => item.is_sponsored)
            : undefined;
        const userSavedList = updatedList
            ? updatedList.filter(item => item.is_saved)
            : undefined;

        dispatch({
            type: SAVE_FETCHED_LISTS,
            payload: {
                updatedList,
                userSavedList,
                sponsoredList
            }
        });
    }
};

export const validateUserLogin = credentials => async dispatch => {
    console.log(credentials);
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

export const saveProfileInfo = (data, message) => (dispatch, getState) => {
    const prevData = getState().list.profile || undefined;
    const newData = prevData ? [...prevData, ...data] : data;

    dispatch(showPageLoader(true));
    setTimeout(() => {
        dispatch(showPageLoader(false));

        dispatch({
            type: SAVE_PROFILE_INFO,
            payload: {
                data: newData,
                message: message
            }
        });
    }, 2000);
};
