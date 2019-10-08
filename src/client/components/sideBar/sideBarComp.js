import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styled, { css } from "styled-components";
import {
    Div,
    ProfileImage,
    ImageBlock,
    Container,
    Anchor,
    FlexBox
} from "../../styledComponents/layout";
import User from "../../assets/user-placeholder.png";
import { UserContext } from "../../App";
import useModal from "../modal/useModal";
import { CustomButton } from "../../styledComponents/button";
import Modal from "../modal/modal";
import Auth from "../auth";
import LazyImageLoader from "../lazyImageLoader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Row, Column } from "../../styledComponents/grid";
import { handleUserLogout } from "../../../redux-thunk/list/list.actions";

const SideBarWrapper = styled(Div)`
    transform: translateX(-100%);
    transition: transform 300ms ease-in-out;
    ${props =>
        props.expanded &&
        css`
            transform: translateX(0%);
        `}
`;

const SideBarComp = props => {
    const { isShowing, toggle } = useModal();
    const { isLoggedIn, profile, logOut } = props;
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
