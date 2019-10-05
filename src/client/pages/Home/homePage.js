import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import ProfileComp from "../../components/profile";

//Styled Imports
import styled from "styled-components";
import { Container, Div, FlexBox } from "../../styledComponents/layout";
import Post from "../../components/post";
import { fetchAllPosts } from "../../../redux-thunk/dummy/dummy.actions";
import { DisplayDecisionMaker } from "../../styledComponents/breakpoints";
import QuickView from "../../components/quickView";

/**
 * @function - loadData -this function is used to load initial data when it is being rendered from server
 * @parm - store - contains the combination of multiple reducers
 * @return - Promise - So that now the server can proceed in sending the res to the browser after building the html
 */

const loadData = store => {
  return store.dispatch(fetchAllPosts());
};

const HomePageWrapper = styled(FlexBox)`
  @media screen and (max-width: 991px) {
    flex-flow: wrap-reverse;
  }
`;

const HomePage = props => {
  return (
    <Div>
      <Helmet>
        <meta property="og:title" content="Dummy List" />
      </Helmet>

      <Container>
        <HomePageWrapper alignStart jcSpaceBetween marT20>
          <DisplayDecisionMaker minWidth="min" maxWidth="md">
            <ProfileComp />
          </DisplayDecisionMaker>
          <Post />
          <QuickView />
        </HomePageWrapper>
      </Container>
    </Div>
  );
};

export default {
  loadData,
  component: HomePage
};
