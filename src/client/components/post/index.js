import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import InlineLoaderComp from "../InlineLoader";
import Deck from "../deck";
import { Div } from "../../styledComponents/layout";
import { CardHeader } from "../../styledComponents/card";
import Search from "../search";
import {
    fetchAllPosts,
    updateUserSavedList
} from "../../../redux-thunk/list/list.actions";

const Post = ({
    postList,
    postListCount = 20, // Hard coded value just to demonstrate lazyloading feature
    isLoggedIn = false,
    fetchMorePosts,
    updateUserSavedList
}) => {
    const bottomRef = useRef();
    const [loaderStatus, setLoaderStatus] = useState(false);
    const [endStatus, setEndStatus] = useState(false);
    const [search, setSearch] = useState("");

    //Trigger the callback function when the intersection is reached
    function scrollCallBack(entries) {
        if (entries[0].isIntersecting) {
            setLoaderStatus(true);
        }
    }

    //Placing this settimeout inside the scrollCallBack function is causing a memory leak so placing it inside the use effect function and clearing it once the component unmounts
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
    //Further more you can still split the lazyloading feature to a different component or you can also create a dynamic hook.
    useEffect(() => {
        if (!isLoggedIn) return;
        if (postList.length === 0) return;
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
    }, [endStatus, postList, isLoggedIn]); //passing posts prop to the useffect function the reason being if we do not do it then our props do not update in the call back function

    const filterSearch = e => {
        setSearch(e.target.value);
    };

    let filteredJobs = postList.filter(
        job => job.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

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
                        <Div marT10>
                            <Search search={filterSearch} />
                        </Div>
                    )}

                    {filteredJobs && filteredJobs.length == 0 ? (
                        <CardHeader textAlign="center" noCursor pad20>
                            No results found
                        </CardHeader>
                    ) : (
                        <React.Fragment>
                            {filteredJobs.map((list, i) => (
                                <Deck
                                    key={i}
                                    {...list}
                                    loginStatus={isLoggedIn}
                                    updateJob={updateJob}
                                />
                            ))}

                            {!endStatus && <div ref={bottomRef} />}

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

                            {endStatus && (
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
                </React.Fragment>
            )}
        </Div>
    );
};

const mapStateToProps = state => {
    return {
        postList: state.list.postList,
        postListCount: state.list.postListCount,
        isLoggedIn: state.list.isLoggedIn
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
    postListCount: PropTypes.number,
    fetchMorePosts: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    updateUserSavedList: PropTypes.func
};
