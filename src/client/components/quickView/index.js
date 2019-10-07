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
    userSavedList = []
}) => {
    return isLoggedIn ? (
        <React.Fragment>
            {sponsoredList.length > 0 && (
                <QuickViewWrapper>
                    <QuickViewDiv>
                        <QuickViewHeading>Sponsored List</QuickViewHeading>
                        <QuickViewContent>
                            <Carousel list={sponsoredList} />
                        </QuickViewContent>
                    </QuickViewDiv>
                </QuickViewWrapper>
            )}

            {userSavedList.length > 0 && (
                <QuickViewWrapper>
                    <QuickViewDiv>
                        <QuickViewHeading>Saved List</QuickViewHeading>
                        <QuickViewContent>
                            <Carousel list={userSavedList} />
                        </QuickViewContent>
                    </QuickViewDiv>
                </QuickViewWrapper>
            )}
        </React.Fragment>
    ) : (
        <Div width="320px" /> //I need this to retain the real estate space on homepage so that the job list div does not span over
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.list.isLoggedIn,
        sponsoredList: state.list.sponsoredList,
        userSavedList: state.list.userSavedList
    };
};

export default connect(mapStateToProps)(QuickView);

QuickView.propTypes = {
    isLoggedIn: PropTypes.bool,
    sponsoredList: PropTypes.array,
    userSavedList: PropTypes.array
};
