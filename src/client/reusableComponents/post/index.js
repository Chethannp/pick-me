import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchAllCases } from "../../../redux-thunk/dummy/dummy.actions";
import InlineLoaderComp from "../InlineLoader";
import Deck from "../deck";
import { Div } from "../../styledComponents/layout";

const Post = ({ postList, postListCount, fetchMorePosts }) => {
  const bottomRef = useRef();
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [endStatus, setEndStatus] = useState(false);

  //Trigger the callback function when the intersection is reached
  function scrollCallBack(entries) {
    if (entries[0].isIntersecting) {
      if (postList.length < postListCount) {
        setLoaderStatus(true);
        setTimeout(() => {
          setLoaderStatus(false);
          fetchMorePosts();
        }, 3000);
      } else {
        setLoaderStatus(true);
        setTimeout(() => {
          setLoaderStatus(false);
          setEndStatus(true);
        }, 3000);
      }
    }
  }

  //Defines the view port boundary
  //Defines the reference element which needs to be observed and Instantiates the observer
  //We need to make sure to disconnect observering to avoid memory leaks.
  //It is important to remove the observer and remove it from dom so that our useeffect hook doesn't trigger unecessarily. also it is good to inform the user that the end of the list is reached.

  useEffect(() => {
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
  }, [endStatus, postList]); //passing posts prop to the useffect function the reason being if we do not do it then our props do not update in the call back function

  return (
    <Div>
      {postList.map((list, i) => (
        <Deck key={i} {...list} />
      ))}
      {!endStatus && <div ref={bottomRef} />}
      {loaderStatus && (
        <Div style={{ width: "100px", margin: "40px auto" }}>
          <InlineLoaderComp />
        </Div>
      )}
      {endStatus && (
        <Div marB20 textAlign="center">
          ~that's all folks!~
        </Div>
      )}
    </Div>
  );
};

const mapStateToProps = state => {
  return {
    postList: state.dummy.dummyList,
    postListCount: state.dummy.postListCount
  };
};

export default connect(
  mapStateToProps,
  dispatch => ({
    fetchMorePosts: () => dispatch(fetchAllCases())
  })
)(Post);
