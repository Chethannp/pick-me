import React from "react";
import styled, { keyframes } from "styled-components";
import { Div } from "../../styledComponents/layout";

 

const ModalWrapper = styled(Div)`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation-name: ${backdrop};
  overflow: auto;
  opacity: 0;
  transform: scale(0.7);
  transition: all 0.2s;
  @media screen and (min-width: 768px) {
    width: 30rem;
    left: calc((100% - 30rem) / 2);
  }
`;

const ModalBody = styled(Div)``;

const ModalComp = props => {
  return (
    <ModalWrapper
      width="90%"
      boxShadow
      posFixed
      zIndex={props.zIndex}
      borderRadius
    >
      <ModalBody>{props.children && props.children}</ModalBody>
    </ModalWrapper>
  );
};

export default ModalComp;
