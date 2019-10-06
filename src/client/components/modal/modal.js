import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { Div, FlexBox } from "../../styledComponents/layout";

const CloseButton = styled(Div)`
    top: 0;
    right: 0;
    cursor: pointer;
`;
const fadeIn = keyframes`
  from {
      opacity: 0;
      -webkit-transform: translate3d(0, 30%, 0);
      transform: translate3d(0, 30%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
`;

const ModalContent = styled.div`
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-name: ${fadeIn};
`;

const Modal = ({ isShowing, hide, children }) =>
    isShowing
        ? ReactDOM.createPortal(
            <React.Fragment>
                <Div
                    posFixed
                    zIndex="1040"
                    width="100vw"
                    height="100vh"
                    bg="opacity"
                    zIndex="1050"
                    onClick={hide}
                />
                <CloseButton
                    mar10
                    pad10
                    posAbs
                    width="15px"
                    height="15px"
                    color="white"
                    zIndex="9999"
                    fontSize="md"
                    type="button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                >
                    <span aria-hidden="true">&times;</span>
                </CloseButton>
                <FlexBox
                    posFixed
                    zIndex="1050"
                    width="100%"
                    height="100%"
                    jcCenter
                    overflowX="hidden"
                    aria-modal
                    aria-hidden
                    tabIndex={-1}
                    role="dialog"
                >
                    <ModalContent posRel zIndex="100" borderRadius marT>
                        <Div>
                            <FlexBox alignStart pad15></FlexBox>
                            <FlexBox posRel flowCol width="100%" borderRadius>
                                {children}
                            </FlexBox>
                        </Div>
                    </ModalContent>
                </FlexBox>
            </React.Fragment>,
            document.body
        )
        : null;

export default Modal;
