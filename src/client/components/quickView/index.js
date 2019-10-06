import React from "react";
import { connect } from "react-redux";
import {
  QuickViewWrapper,
  QuickViewHeading,
  QuickViewContent,
  QuickViewDiv
} from "../../styledComponents/quickview";
import Carousel from "../carousel";
import { Div } from "../../styledComponents/layout";

const QuickView = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <QuickViewWrapper>
      <QuickViewDiv>
        <QuickViewHeading>Heading</QuickViewHeading>
        <QuickViewContent>
          <Carousel />
        </QuickViewContent>
      </QuickViewDiv>
    </QuickViewWrapper>
  ) : (
    <Div width="320px" />
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.list.isLoggedIn
  };
};

export default connect(mapStateToProps)(QuickView);
