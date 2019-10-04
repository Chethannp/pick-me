import React, { useState } from "react";
import Deck from "../deck";
import { connect } from "react-redux";
import LazyLoadComp from "../lazyLoader";
import { fetchAllCases } from "../../../redux-thunk/dummy/dummy.actions";
import InlineLoaderComp from "../InlineLoader";
import { Div } from "../../styledComponents/layout";

const List = props => {
  
  const [endStatus, setEndStatus] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(false);

  const handleCallBack = () => {
    if (props.lists.length < 20) {
      setLoaderStatus(true);
      setTimeout(() => {
        setLoaderStatus(false);
        props.fetchAllCases();
      }, 3000);
    } else {
      setLoaderStatus(true);
      setTimeout(() => {
        setLoaderStatus(false);
        setEndStatus(true);
      }, 3000);
    }
  };

  return (
    <LazyLoadComp callback={handleCallBack} theEnd={endStatus}>
      {props.lists.map((list, i) => (
        <Deck key={i} {...list} />
      ))}
      {loaderStatus && (
        <Div style={{ width: "100px", margin: "0 auto" }}>
          <InlineLoaderComp />
        </Div>
      )}
    </LazyLoadComp>
  );
};

const mapStateToProps = state => {
  return {
    lists: state.dummy.dummyList
  };
};
export default connect(
  mapStateToProps,
  dispatch => ({
    fetchAllCases: () => dispatch(fetchAllCases())
  })
)(List);
