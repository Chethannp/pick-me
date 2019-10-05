import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../../../redux-thunk/dummy/dummy.actions";
import InlineLoaderComp from "../InlineLoader";
import Deck from "../deck";
import { Div } from "../../styledComponents/layout";
import { CardHeader } from "../../styledComponents/card";
import Search from "../search";

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
  //Further more you can still split the lazyloading feature to a different component or you can also create a dynamic hook.
  useEffect(() => {
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
  }, [endStatus, postList]); //passing posts prop to the useffect function the reason being if we do not do it then our props do not update in the call back function

  return (
    <Div marT10>
      <Search />

      {postList.length === 0 && (
        <CardHeader textAlign="center">
          <Div padT30 padL30 padR30 fontSize="xs">
            Oops...!, No Posts found :(
          </Div>
          <Div padT10 padL30 padR30 fontSize="xxs">
            Our engineers are putting their best efforts to bring you the best
            jobs that you need... please bare with us!!!
          </Div>
          <Div padT10 padL30 padR30 padB20 fontSize="xxs">
            However you can still spend some time updating your profile, we will
            send you a quick e-mail once our service is back up!
          </Div>
        </CardHeader>
      )}

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
        <Div
          mar20
          pad10
          textAlign="center"
          boxShadow="lightShade"
          bg="lightShade"
        >
          ~that's all folks!~
        </Div>
      )}
    </Div>
  );
};

const mapStateToProps = state => {
  return {
    postList: state.dummy.postList,
    postListCount: state.dummy.postListCount
  };
};

export default connect(
  mapStateToProps,
  dispatch => ({
    fetchMorePosts: () => dispatch(fetchAllPosts())
  })
)(Post);
