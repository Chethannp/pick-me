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
import User from "../../assets/user-placeholder.png";

/**
 * Styled Component Imports
 */
import styled, { css } from "styled-components";
import {
    Div,
    ProfileImage,
    ImageBlock,
    Anchor
} from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";
import { Row, Column } from "../../styledComponents/grid";

/**
 * Note: These below styles are more specific to this component.
 *       Hence I decided to place it inline rather than
 *       creating a seperate file.
 */
const SideBarWrapper = styled(Div)`
    transform: translateX(-100%);
    transition: transform 300ms ease-in-out;
    ${props =>
        props.expanded &&
        css`
            transform: translateX(0%);
        `}
`;

/**
 * Context Hooks
 */
import { UserContext } from "../../App";

/**
 * Custom Reusable Hooks
 */
import Modal from "../customHooks/modal/modal";
import useModal from "../customHooks/modal/useModal";

/**
 * FontAwesome Imports for icons support
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

/**
 * Component Imports
 */
import Auth from "../auth";
import LazyImageLoader from "../lazyImageLoader";

/**
 * @function SideBarComp - Functional Component
 * @param {props} props - Contains user login status, profile information and logOut dispatch action
 * @return {component}
 * Note: The component is built for the purpose of the sidebar on mobile devices
 * Context hook is used in this component to close the app drawer
 * when the user clicks on the login/signup button
 */
const SideBarComp = props => {
    const { isShowing, toggle } = useModal();
    const { isLoggedIn, profile = {}, logOut } = props;

    return (
        <UserContext.Consumer>
            {closeSideNav => {
                const handleLoginClick = () => {
                    toggle();
                    close();
                };
                const close = () => {
                    closeSideNav();
                };

                const handleLogout = () => {
                    logOut();
                    close();
                };

                return (
                    <SideBarWrapper
                        zIndex="300"
                        height="100%"
                        width="280px"
                        bg="white"
                        posFixed
                        expanded={props.expanded}
                    >
                        <Div>
                            <Div
                                height="80px"
                                width="100%"
                                bg="lightShade"
                                borderRadius
                            />
                            <Div width="80px" height="80px" marAuto>
                                <ProfileImage>
                                    {isLoggedIn ? (
                                        <LazyImageLoader
                                            url={
                                                profile
                                                    ? `${profile.profileImage}`
                                                    : "http://placeimg.com/295/295/any/tech"
                                            }
                                            fallbackUrl={User}
                                            width="100%"
                                            height="100%"
                                        />
                                    ) : (
                                        <ImageBlock
                                            src={User}
                                            width="100%"
                                            height="100%"
                                        />
                                    )}
                                </ProfileImage>
                            </Div>
                            <Div marT20 width="100%">
                                {isLoggedIn ? (
                                    <React.Fragment>
                                        <Row>
                                            <Column xs="12">
                                                <Div marB20 textAlign="center">
                                                    {profile
                                                        ? `${profile.firstName}`
                                                        : "Hello User"}
                                                </Div>
                                            </Column>
                                        </Row>
                                        <Row>
                                            <Column xs="12">
                                                <Anchor
                                                    textDecoration="none"
                                                    color="black"
                                                    onClick={close}
                                                    to="/saved-jobs/"
                                                >
                                                    <Div boxShadow="lightGrey">
                                                        <Row>
                                                            <Column xs="9">
                                                                <Div pad8>
                                                                    Saved Jobs
                                                                </Div>
                                                            </Column>
                                                            <Column xs="3">
                                                                <Div
                                                                    pad8
                                                                    textAlign="right"
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faChevronRight
                                                                        }
                                                                    />
                                                                </Div>
                                                            </Column>
                                                        </Row>
                                                    </Div>
                                                </Anchor>
                                            </Column>
                                        </Row>
                                        <Row>
                                            <Column xs="12">
                                                <Anchor
                                                    textDecoration="none"
                                                    color="black"
                                                    onClick={close}
                                                    to="/sponsored-jobs/"
                                                >
                                                    <Div boxShadow="lightGrey">
                                                        <Row>
                                                            <Column xs="9">
                                                                <Div pad8>
                                                                    Sponsored
                                                                    Jobs
                                                                </Div>
                                                            </Column>
                                                            <Column xs="3">
                                                                <Div
                                                                    pad8
                                                                    textAlign="right"
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faChevronRight
                                                                        }
                                                                    />
                                                                </Div>
                                                            </Column>
                                                        </Row>
                                                    </Div>
                                                </Anchor>
                                            </Column>
                                        </Row>
                                        <Row>
                                            <Column xs="12">
                                                <Anchor
                                                    textDecoration="none"
                                                    color="black"
                                                    onClick={handleLogout}
                                                    to=""
                                                >
                                                    <Div boxShadow="lightGrey">
                                                        <Row>
                                                            <Column xs="9">
                                                                <Div pad8>
                                                                    Logout
                                                                </Div>
                                                            </Column>
                                                            <Column xs="3">
                                                                <Div
                                                                    pad8
                                                                    textAlign="right"
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faChevronRight
                                                                        }
                                                                    />
                                                                </Div>
                                                            </Column>
                                                        </Row>
                                                    </Div>
                                                </Anchor>
                                            </Column>
                                        </Row>
                                    </React.Fragment>
                                ) : (
                                    <Row>
                                        <Column>
                                            <Div textAlign="center">
                                                <CustomButton
                                                    secondary
                                                    xs
                                                    onClick={handleLoginClick}
                                                >
                                                    Login / Sign Up
                                                </CustomButton>
                                            </Div>
                                        </Column>
                                    </Row>
                                )}
                            </Div>
                        </Div>

                        <Modal isShowing={isShowing} hide={toggle}>
                            <Auth hide={toggle} />
                        </Modal>
                    </SideBarWrapper>
                );
            }}
        </UserContext.Consumer>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.list.isLoggedIn,
        profile: state.list.profile
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        logOut: () => dispatch(handleUserLogout())
    })
)(SideBarComp);

SideBarComp.propTypes = {
    expanded: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    profile: PropTypes.object,
    logOut: PropTypes.func
};
