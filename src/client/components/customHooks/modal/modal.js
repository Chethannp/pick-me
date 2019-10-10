/**
 * React Imports
 */
import React from "react";
import ReactDOM from "react-dom";

/**
 * Styled Component Imports
 */
import styled, { keyframes } from "styled-components";
import { Div, FlexBox } from "../../../styledComponents/layout";

/**
 * Note: These below styles are more specific to this component.
 *       Hence I decided to place it inline rather than
 *       creating a seperate file.
 */
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

/**
 * @function Modal - Functional Component
 * @param {isShowing} boolean - decides to show or hide the modal popup
 * @param {hide} - callback - that toggles the view
 * @param {children} - takes all the inner elements wrapped by <Modal></Modal> and inserts inside this component
 * @returns {component}
 */

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
