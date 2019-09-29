import React, { useEffect } from "react";
import { fetchAllCases } from "../../../redux-thunk/dummy/dummy.actions";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";

/**
 * @function - loadData - this function is used to load initial data when it is being rendered from server
 * @parm - store - contains the combination of multiple reducers
 * @return - Promise - So that now the server can proceed in sending the res to the browser after building the html
 */

const loadData = store => {
  return store.dispatch(fetchAllCases());
};

const HomePage = props => {
  useEffect(() => {
    return () => {
      return false;
    };
  }, []);

  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Dummy List" />
      </Helmet>
      <h1>Welcome to home page!</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default {
  loadData,
  component: connect(mapStateToProps)(HomePage)
};
