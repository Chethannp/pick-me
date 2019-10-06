import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";

//Components
import ProfileComp from "../../components/profile";

//Styled Imports
import { Container, Div, FlexBox } from "../../styledComponents/layout";
import Post from "../../components/post";
import CustomToast from "../../components/toast";

import { DisplayDecisionMaker } from "../../styledComponents/breakpoints";
import QuickView from "../../components/quickView";
import Loader from "../../components/pageLoader";
import { fetchAllPosts } from "../../../redux-thunk/list/list.actions";

/**
 * @function - loadData -this function is used to load initial data when it is being rendered from server
 * @parm - store - contains the combination of multiple reducers
 * @return - Promise - So that now the server can proceed in sending the res to the browser after building the html
 */

export const loadData = store => {
  return store.dispatch(fetchAllPosts());
};

const HomePage = ({ loaderStatus, toastMessage }) => {
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
          <DisplayDecisionMaker minWidth="min" maxWidth="lg">
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
    toastMessage: state.list.toastMessage
  };
};

export default {
  loadData,
  component: connect(mapStateToProps)(HomePage)
};

HomePage.propTypes = {
  loaderStatus: PropTypes.bool,
  toastMessage: PropTypes.string
};
