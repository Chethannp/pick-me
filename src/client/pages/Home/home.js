import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllCases } from "../../../redux-thunk/dummy/dummy.actions";

const Home = props => {
  useEffect(() => {
    return () => {
      return false;
    };
  }, []);

  return (
    <div>
      <h1>This is my best attempt!!</h1>
      <button onClick={() => console.log("jaffa")}>Press Me!</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dummyList: state.dummy.dummyList
  };
};

const loadData = store => {
  return store.dispatch(fetchAllCases());
};

export { loadData };
export default connect(mapStateToProps)(Home);
