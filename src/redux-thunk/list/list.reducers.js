import {
    SAVE_FETCHED_LISTS,
    HANDLE_PAGE_LOADER,
    HANDLE_LOGIN_SUCCESS,
    HANDLE_LOGIN_ERROR,
    SHOW_CUSTOM_TOAST,
    SAVE_PROFILE_INFO
} from "./list.actions";

/**
 * @function - default
 * @param - {Object} - contains the initial state of the store
 * @param - {Object} - Action creators which holds an object with type and paylod.
 * @return - {Object} - It returns the redux store
 */

export default (state = {}, action) => {
    switch (action.type) {
    case HANDLE_PAGE_LOADER: {
        return {
            ...state,
            pageLoader: action.payload
        };
    }
    case SHOW_CUSTOM_TOAST: {
        return {
            ...state,
            toastMessage: action.payload
        };
    }
    case HANDLE_LOGIN_SUCCESS: {
        return {
            ...state,
            isLoggedIn: action.payload.status,
            toastMessage: action.payload.message,
            loginErrorMessage: ""
        };
    }
    case HANDLE_LOGIN_ERROR: {
        return {
            ...state,
            isLoggedIn: action.payload.status,
            loginErrorMessage: action.payload.message
        };
    }
    case SAVE_PROFILE_INFO: {
        return {
            ...state,
            profile: action.payload.data,
            toastMessage: action.payload.message,
            isLoggedIn: true
        };
    }
    case SAVE_FETCHED_LISTS: {
        return {
            ...state,
            postList: action.payload.updatedList,
            sponsoredList: action.payload.sponsoredList,
            userSavedList: action.payload.userSavedList
        };
    }

    default:
        return state;
    }
};
