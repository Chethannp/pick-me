/**
 * React Imports
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Redux - Thunk Imports
 * To read state values and to Dispatch an action to the reducer
 */
import { connect } from "react-redux";
import { handleUserLogout } from "../../../redux-thunk/list/list.actions";

/**
 * Static Assets
 */
import LogoImg from "../../assets/logo.png";

/**
 * Styled Component Imports
 */
import {
    Div,
    Container,
    FlexBox,
    Anchor,
    ImageBlock
} from "../../styledComponents/layout";
import DrawerToggleButton from "../../styledComponents/drawerbtn";
import { DisplayDecisionMaker } from "../../styledComponents/breakpoints";

/**
 * @function NavbarComp - Functional Component
 * @param {drawerClickHandler} callback - to toggle the side menu view on mobile
 * @param {isLoggedIn} Boolean - Holds the user state if he is logged in or not
 * @param {logOut} Dispatch - Dispatches the action required to upadte the logged in state
 * @returns {component} - This returns the header view of our project
 */
const NavbarComp = ({ drawerClickHandler, isLoggedIn = false, logOut }) => {
    const handleLogout = () => {
        logOut();
    };

    return (
        <Div zIndex="1" posSticky bg="white" boxShadow="lightGrey">
            <Container>
                <FlexBox alignCenter jcSpaceBetween height="50px" padT5>
                    <DisplayDecisionMaker minWidth="md">
                        <DrawerToggleButton click={drawerClickHandler} />
                    </DisplayDecisionMaker>

                    <Anchor to="/" color="brandSecondary" textDecoration="none">
                        <FlexBox alignCenter>
                            <Div width="40px">
                                <ImageBlock
                                    src={LogoImg}
                                    alt="Company Logo"
                                    width="100%"
                                    height="100%"
                                />
                            </Div>
                            <Div fontSize="md" padL10 fontWeight="bold">
                                Hey Jobs
                            </Div>
                        </FlexBox>
                    </Anchor>

                    <Anchor to="" textDecoration="none" color="brandPrimary">
                        {isLoggedIn ? (
                            <Div onClick={handleLogout}>Logout</Div>
                        ) : (
                            <span>&nbsp;</span>
                        )}
                    </Anchor>
                </FlexBox>
            </Container>
        </Div>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.list.isLoggedIn
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        logOut: () => dispatch(handleUserLogout())
    })
)(NavbarComp);

NavbarComp.propTypes = {
    drawerClickHandler: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
};
