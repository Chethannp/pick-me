import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LogoImg from "../../assets/logo.png";

import {
    Div,
    Container,
    FlexBox,
    Anchor,
    ImageBlock
} from "../../styledComponents/layout";
import DrawerToggleButton from "../../styledComponents/drawerbtn";
import { DisplayDecisionMaker } from "../../styledComponents/breakpoints";

const NavbarComp = ({ drawerClickHandler, isLoggedIn = false }) => {
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

                    {isLoggedIn ? (
                        <Anchor
                            to="/update-profile"
                            color="brandPrimary"
                            textDecoration="none"
                        >
                            Profile
                        </Anchor>
                    ) : (
                        <span></span>
                    )}
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

export default connect(mapStateToProps)(NavbarComp);

NavbarComp.propTypes = {
    drawerClickHandler: PropTypes.func,
    isLoggedIn: PropTypes.bool
};
