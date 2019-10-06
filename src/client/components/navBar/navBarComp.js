import React from "react";
import PropTypes from "prop-types";
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

const NavbarComp = props => {
    return (
        <Div zIndex="1" posSticky bg="white" boxShadow="lightGrey">
            <Container>
                <FlexBox alignCenter jcSpaceBetween height="50px" padT5>
                    <DisplayDecisionMaker minWidth="md">
                        <DrawerToggleButton click={props.drawerClickHandler} />
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
                </FlexBox>
            </Container>
        </Div>
    );
};

export default NavbarComp;

NavbarComp.propTypes = {
    drawerClickHandler: PropTypes.func
};
