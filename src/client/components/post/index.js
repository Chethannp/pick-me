/**
 * React Imports
 */
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * Redux  Imports
 * To read state values and to dispatch an action
 */
import { connect } from "react-redux";
import {
    fetchAllPosts,
    updateUserSavedList
} from "../../../redux-thunk/list/list.actions";

/**
 * Styled Component Imports
 */
import { Div } from "../../styledComponents/layout";
import { CardHeader } from "../../styledComponents/card";

/**
 * Component Imports
 */
import InlineLoaderComp from "../InlineLoader";
import Deck from "../deck";
import Search from "../search";

/**
 * @function Post - Functional Component
 * @param {postList} array - Holds the jobs array from the api response. Needed to send data to children component 'Deck'
 * @param {postListCount} number - Holds the maximum post count, to demonstrate lazyloading feature
 * @param {isLoggedIn} boolean - Holds the state of the user whether he is logged in or not
 * @param {fetchMorePosts} callback - Dispatch action to fetch more list once the bottom reference is reached
 * @param {updateUserSavedList} callback - Dispatch action to save user saved jobs to the userSavedList array and is immediately shown as a quick view widget on the right of the homepage below sponsored widget.
 * @param {filterOptions} object - Holds the filters array from the api response. Needed to send data to children component 'Search'
 * @returns {component} - Present a View which includes search box and card component
 */
const Post = ({
    postList = [],
    postListCount = 20, // Hard coded value just to demonstrate lazyloading feature
    isLoggedIn = false,
    fetchMorePosts,
    updateUserSavedList,
    filterOptions = []
}) => {
    /**
     * LazyLoading Functionality code:
     */
    const bottomRef = useRef(); // Lets collect the div reference that we want to watch for its entry into the view port

    const [loaderStatus, setLoaderStatus] = useState(false); //State to inform the user that we are loading addtional data
    const [endStatus, setEndStatus] = useState(false); //State to inform the user that we have reached the end of the list

    //Trigger the callback function when the intersection is reached (i.e., when bottomRef div comes inside the view port)
    function scrollCallBack(entries) {
        if (entries[0].isIntersecting) {
            setLoaderStatus(true);
        }
    }

    //Placing the below settimeout function which is doing a fetchMorePosts(); => in the above scrollCallBack function is causing a memory leak.
    //Hence I placed it inside the use effect function and doing the required clean up when the component unmount.
    //The settimeout is currently being used to show a loader, I wanted to do this to showcase an async operation.
    useEffect(() => {
        if (!isLoggedIn) return;
        const timer = setTimeout(() => {
            setLoaderStatus(false);
            if (postList.length < postListCount) {
                fetchMorePosts();
            } else {
                setEndStatus(true);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [loaderStatus]);

    //Defines the view port boundary
    //Defines the reference element which needs to be observed and Instantiates the observer
    //We need to make sure to disconnect observering to avoid memory leaks.
    //It is important to remove the observer and remove it from dom so that our useeffect hook doesn't trigger unecessarily. also it is good to inform the user that the end of the list is reached.
    //Further more you can still split the lazyloading feature to a different component or you can also create a custom hook, so that this feature can be reused elsewhere also!
    useEffect(() => {
        if (!isLoggedIn) return;
        if (searchFilteredOutput.length === 0) {
            return;
        }
        const scroll = new IntersectionObserver(scrollCallBack, {
            root: null,
            rootMargin: "10px 0px 10px 0px",
            threshold: [1]
        });
        if (endStatus) {
            setEndStatus(true);
            scroll.disconnect();
            return;
        }
        scroll.observe(bottomRef.current);
        return () => scroll.disconnect();
    }, [endStatus, searchFilteredOutput, isLoggedIn]);

    /**
     * Filter code goes here
     */

    const [method, setMethod] = useState();

    //This code is used to identify whether it is an input search or a dropdown select
    const identifySearchMethod = e => {
        if (e.target) {
            setMethod({
                option: "string",
                key: e.target.value
            });
        } else {
            let key;
            switch (e) {
            case "Sponsored":
                key = "is_sponsored";
                break;
            case "Saved":
                key = "is_saved";
                break;
            default:
                key = e;
                break;
            }

            setMethod({
                option: "sort",
                key
            });
        }
    };

    //Once the method is identified now lets write a function which outputs a filtered array.
    const filterFunnel = () => {
        if (!method) return;
        const { option, key } = method;

        if (key === "All") return postList;

        let tmp;
        switch (option) {
        case "string":
            tmp = postList.filter(item =>
                item.title.toLowerCase().includes(key.toLowerCase())
            );
            break;

        case "sort":
            tmp = postList.filter(item => item[key] === true);
            break;
        default:
            tmp = postList;
            break;
        }

        return tmp;
    };

    //Now lets assing this function to a searchFilteredOutput so that we can use it to iterate through and present it to the user :)
    let searchFilteredOutput = filterFunnel() || postList;

    /**
     * Dispatch and aaction to save the user saved job list
     */
    const updateJob = (job, action) => {
        updateUserSavedList(job, action);
    };

    return (
        <Div>
            {postList.length === 0 ? (
                <CardHeader textAlign="center" noCursor>
                    <Div padT10 padL30 padR30 fontSize="xs">
                        Oops...!, No Jobs found :(
                    </Div>
                    <Div padT10 padB10 padL30 padR30 fontSize="xxs">
                        Our engineers are putting their best efforts to bring
                        you the best jobs that you need... please bare with
                        us!!!
                    </Div>
                    {!isLoggedIn && (
                        <Div padL30 padR30 padB10 fontSize="xxs">
                            However you can still spend some time updating your
                            profile, we will send you a quick e-mail once our
                            service is back up!
                        </Div>
                    )}
                </CardHeader>
            ) : (
                <React.Fragment>
                    {isLoggedIn && (
                        <Search
                            filters={filterOptions}
                            search={identifySearchMethod}
                        />
                    )}

                    {searchFilteredOutput &&
                    searchFilteredOutput.length == 0 ? (
                            <CardHeader textAlign="center" noCursor pad20>
                            No results found
                            </CardHeader>
                        ) : (
                            <React.Fragment>
                                {searchFilteredOutput &&
                                searchFilteredOutput.map((list, i) => (
                                    <Deck
                                        key={i}
                                        {...list}
                                        loginStatus={isLoggedIn}
                                        updateJob={updateJob}
                                    />
                                ))}

                                {loaderStatus && (
                                    <Div
                                        style={{
                                            width: "100px",
                                            margin: "40px auto"
                                        }}
                                    >
                                        <InlineLoaderComp />
                                    </Div>
                                )}

                                {endStatus && searchFilteredOutput.length != 0 && (
                                    <Div
                                        mar20
                                        pad10
                                        textAlign="center"
                                        boxShadow="lightShade"
                                        bg="lightShade"
                                    >
                                    -- that&apos;s all folks!--
                                    </Div>
                                )}
                            </React.Fragment>
                        )}
                    {!endStatus && <Div marB20 ref={bottomRef} />}
                </React.Fragment>
            )}
        </Div>
    );
};

const mapStateToProps = state => {
    return {
        postList: state.list.postList,
        postListCount: state.list.postListCount,
        isLoggedIn: state.list.isLoggedIn,
        filterOptions: state.list.filterOptions
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        fetchMorePosts: () => dispatch(fetchAllPosts()),
        updateUserSavedList: (job, action) =>
            dispatch(updateUserSavedList(job, action))
    })
)(Post);

Post.propTypes = {
    postList: PropTypes.array,
    filterOptions: PropTypes.array,
    postListCount: PropTypes.number,
    fetchMorePosts: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    updateUserSavedList: PropTypes.func
};
