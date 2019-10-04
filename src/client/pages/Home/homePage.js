import React from "react";
import { fetchAllCases } from "../../../redux-thunk/dummy/dummy.actions";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";

//Styled Imports
import ProfileComp from "../../components/Profile/profileComp";
// import SponsoredComp from "../../components/Sponsored/sponsoredComp";
// import MainComp from "../../components/Main/mainComp";
import { Container, Div } from "../../styledComponents/layout";

/**
 * @function - loadData - this function is used to load initial data when it is being rendered from server
 * @parm - store - contains the combination of multiple reducers
 * @return - Promise - So that now the server can proceed in sending the res to the browser after building the html
 */

const loadData = store => {
  return store.dispatch(fetchAllCases());
};

const HomePage = props => {

  return (
    <Div>
      <Helmet>
        <meta property="og:title" content="Dummy List" />
      </Helmet>

      <Container>
        <ProfileComp />
        {/* <Auth signupFlow="false"/> */}
        {/* <FlexBox alignStart jcSpaceBetween marT20>
          
          <MainComp />
          <SponsoredComp />
        </FlexBox> */}
      </Container>

      {/* <Container>
        <FlexBox alignStart jcSpaceBetween marT20>
          <DisplayDecisionMaker minWidth="min" maxWidth="md">
            <Div
              bg="white"
              width="200px"
              borderRadius
              boxShadow="lightGrey"
              borderStyle="lightGrey"
              mar10
            >
              <ProfileComp />
            </Div>
          </DisplayDecisionMaker>

          <Div mar10 width="100%">
            <Div
              bg="white"
              borderRadius
              boxShadow="lightGrey"
              borderStyle="lightGrey"
              pad20
            >
              Your dream job’s just a search away…{" "}
            </Div>
          </Div>

          <DisplayDecisionMaker minWidth="min" maxWidth="lg">
            <Div
              bg="white"
              width="200px"
              borderRadius
              boxShadow="lightGrey"
              borderStyle="lightGrey"
              mar10
              pad20
            >
              Promoted Jobs
            </Div>
            <Div
              bg="white"
              width="200px"
              borderRadius
              boxShadow="lightGrey"
              borderStyle="lightGrey"
              mar10
              pad20
            >
              <SliderDeckComp />
            </Div>
          </DisplayDecisionMaker>
        </FlexBox>
      </Container> */}
    </Div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default {
  loadData,
  component: connect(mapStateToProps)(HomePage)
};
