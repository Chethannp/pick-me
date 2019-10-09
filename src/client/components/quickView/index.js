/**
 * React Imports
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Redux  Imports
 * To read state values
 */
import { connect } from "react-redux";

/**
 * Styled Component Imports
 */
import {
    QuickViewWrapper,
    QuickViewHeading,
    QuickViewContent,
    QuickViewDiv
} from "../../styledComponents/quickview";
import { Div, Anchor } from "../../styledComponents/layout";

/**
 * Component Imports
 */
import Carousel from "../carousel";

/**
 * @function QuickView - Functional Component
 * @param {isLoggedIn} boolean - Holds the state of the user whether is logged in or not
 * @param {sponsoredList} array - Holds the sponsored company list
 * @param {userSavedList} array - Holds the user saved List
 * @returns {component} - The main intention of building the widget is for monetization and advance facilites for logged in and subscribed users
 */
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
                        <QuickViewHeading>
                            <Div posRel fontSize="xxs" fontWeight="bold">
                                Sponsored List
                            </Div>
                            <Anchor
                                fontSize="xxs"
                                color="brandSecondary"
                                to="/sponsored-jobs/"
                            >
                                View All
                            </Anchor>
                        </QuickViewHeading>
                        <QuickViewContent>
                            <Carousel list={sponsoredList} />
                        </QuickViewContent>
                    </QuickViewDiv>
                </QuickViewWrapper>
            )}

            {userSavedList.length > 0 && (
                <QuickViewWrapper>
                    <QuickViewDiv>
                        <QuickViewHeading>
                            <Div posRel fontSize="xxs" fontWeight="bold">
                                Saved List
                            </Div>
                            <Anchor
                                fontSize="xxs"
                                color="brandSecondary"
                                to="/saved-jobs/"
                            >
                                View All
                            </Anchor>
                        </QuickViewHeading>
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
