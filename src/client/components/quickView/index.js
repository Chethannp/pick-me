import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    QuickViewWrapper,
    QuickViewHeading,
    QuickViewContent,
    QuickViewDiv
} from "../../styledComponents/quickview";
import Carousel from "../carousel";
import { Div } from "../../styledComponents/layout";

const QuickView = ({
    isLoggedIn = false,
    sponsoredList = [],
    userSavedPostList = []
}) => {
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
        isLoggedIn: state.list.isLoggedIn,
        sponsoredList: state.list.sponsoredList,
        userSavedPostList: state.list.userSavedPostList
    };
};

export default connect(mapStateToProps)(QuickView);

QuickView.propTypes = {
    isLoggedIn: PropTypes.bool,
    sponsoredList: PropTypes.array,
    userSavedPostList: PropTypes.array
};
