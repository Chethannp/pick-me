/**
 * React Imports
 */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Helmet for dynamic
 */
import { Helmet } from "react-helmet-async";

/**
 * Redux - Thunk Imports
 * To read state values and to Dispatch an action to the reducer
 */
import { connect } from "react-redux";
import { fetchAllPosts } from "../../../redux-thunk/list/list.actions";

/**
 * Styled Component Imports
 */
import { Container, Div, FlexBox } from "../../styledComponents/layout";
import { DisplayDecisionMaker } from "../../styledComponents/breakpoints";

/**
 * Component Imports
 */
import ProfileComp from "../../components/profile";
import Post from "../../components/post";
import CustomToast from "../../components/toast";
import QuickView from "../../components/quickView";
import Loader from "../../components/pageLoader";

/**
 * @function loadData - this function is used to load initial data when it is being rendered from server
 * @parm  {store} - contains the combination of multiple reducers
 * @return - Promise - So that now the server can proceed in sending the res to the browser after building the html
 */
export const loadData = store => {
    return store.dispatch(fetchAllPosts());
};

/**
 * @function HomePage - Functional Components
 * @param {loaderStatus} boolean - Holds the page loader status to block the user from doing anything when asynchronous calls are happening
 * @param {toastMessage} string - Holds the custom message
 * @param {postList} array - Holds the array of fetched job
 * @param {fetchJobList} dispatch - Dispatch action to fetch job list
 * @returns {component}
 * Note: This component houses the following - Profile View, Search Box, Feed View, Quick View widget (Sponsored and Saved)
 */
const HomePage = ({
    loaderStatus = false,
    toastMessage = "",
    postList = [],
    fetchJobList
}) => {
    useEffect(() => {
        if (postList.length === 0) {
            fetchJobList();
        }
    }, []);

    return (
        <Div>
            <Helmet>
                <meta property="og:title" content="Dummy List" />
            </Helmet>
            <CustomToast toastMessage={toastMessage} />
            <Container>
                <FlexBox alignStart jcSpaceBetween marT20>
                    <DisplayDecisionMaker minWidth="min" maxWidth="md">
                        <ProfileComp />
                    </DisplayDecisionMaker>
                    <Post />
                    <DisplayDecisionMaker
                        minWidth="min"
                        maxWidth="lg"
                        style={{ position: "sticky", top: "56px" }}
                    >
                        <QuickView />
                    </DisplayDecisionMaker>
                </FlexBox>
            </Container>
            {loaderStatus && <Loader />}
        </Div>
    );
};

const mapStateToProps = state => {
    return {
        loaderStatus: state.list.pageLoader,
        toastMessage: state.list.toastMessage,
        postList: state.list.postList,
        isLoggedIn: state.list.isLoggedIn
    };
};

//Optimised way of exporting to components, this additional component info should be passed in the routes as well so that the server can have access loadData method for initial fetch data from server side
export default {
    loadData,
    component: connect(
        mapStateToProps,
        dispatch => ({
            fetchJobList: () => dispatch(fetchAllPosts())
        })
    )(HomePage)
};

HomePage.propTypes = {
    loaderStatus: PropTypes.bool,
    toastMessage: PropTypes.string,
    postList: PropTypes.array,
    isLoggedIn: PropTypes.bool,
    fetchJobList: PropTypes.func
};
