import React from "react";
import styled, { css } from "styled-components";
import { Div } from "../../styledComponents/layout";

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
      Side Nav
    </SideBarWrapper>
  );
};

export default SideBarComp;
