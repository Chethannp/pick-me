import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Div } from "../../styledComponents/layout";
import ProfileComp from "../profile";

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
    return (
        <SideBarWrapper
            zIndex="300"
            height="100%"
            width="280px"
            bg="white"
            posFixed
            expanded={props.expanded}
        >
            <ProfileComp />
        </SideBarWrapper>
    );
};

export default SideBarComp;

SideBarComp.propTypes = {
    expanded: PropTypes.bool
};
