/**
 * React Imports
 */
import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Component Imports
 */
import Login from "./loginPage";
import SignUp from "./signupPage";

/**
 * Styled Component Imports
 */
import styled, { css, keyframes } from "styled-components";
import { FlexBox } from "../../styledComponents/layout"; //This is a reusable styled component

/**
 * Note: These below styles are more specific to this component.
 *       Hence I decided to place it inline rather than
 *       creating a seperate file.
 */

const AuthWrapper = styled(FlexBox)`
    margin: 18vh auto;
`;
const AuthContainer = styled(FlexBox)`
    box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
`;

/**
 * Note: The below styled component showcases the use of keyframe and css helper methods.
 * It also dynamically renders a specific css based on props.
 */

const bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-15px);
  }
`;
const FloatingDiv = styled(FlexBox)`
    transition: all 300ms ease-out;
    animation: ${bounce} 1s infinite alternate;
    cursor: pointer;
    overflow: hidden;
    &:before {
        content: "";
        position: absolute;
        width: 50px;
        height: 100%;
        background: rgba(255, 255, 255, 0.3);
        transform: skewX(-30deg);
        transition: 1s;
    }
    ${props =>
        props.view == true
            ? css`
                  right: 40%;
                  align-items: flex-start;
                  &:before {
                      top: 0;
                      left: -230px;
                  }
                  &:hover {
                      right: 45%;
                  }
                  &:hover:before {
                      left: 510px;
                  }

                  @media screen and (max-width: 768px) {
                      right: 0;
                      top: -70px;
                      justify-content: flex-start;
                      &:hover {
                          right: 0%;
                          top: -90px;
                      }
                  }
              `
            : css`
                  right: -40%;
                  align-items: flex-end;
                  &:before {
                      top: 0;
                      left: -70px;
                  }
                  &:hover {
                      right: -45%;
                  }
                  &:hover:before {
                      left: 510px;
                  }

                  @media screen and (max-width: 768px) {
                      right: 0;
                      top: 110px;
                      justify-content: flex-end;

                      &:hover {
                          right: 0%;
                          top: 115px;
                      }
                  }
              `}
`;

/**
 * @function Auth - Functional Component
 * @params {hide} - It is a reference to a function which helps to close the modal popup present in the parent component. (I could have used useContext but I wanted to show case on how to pass the parent reference to children of childrens. [Ps fyi: I have used useContext, showcasing Provider and Consumer methods in the side bar component]).
 * @returns {component} - It returns Login/SignUp component based on authView state.
 */

const Auth = ({ hide }) => {
    const [authView, setAuthView] = useState(true);
    const currentView = authView ? "Register" : "Login";

    const changeAuthView = () => {
        setAuthView(!authView);
    };

    return (
        <AuthWrapper
            width="280px"
            height="320px"
            mar0
            jcCenter
            alignCenter
            marT55
            posRel
            zIndex="9"
        >
            <AuthContainer
                jcCenter
                alignCenter
                bg="white"
                borderRadius
                posRel
                zIndex="99"
                pad5
            >
                {currentView == "Login" ? (
                    <SignUp dismissSignup={hide} />
                ) : (
                    <Login dismissLogin={hide} />
                )}
            </AuthContainer>
            <SideDiv
                sideView={authView}
                currentView={currentView}
                toggleAuthView={changeAuthView}
            />
        </AuthWrapper>
    );
};

/**
 * @function SideDiv - Functional Component
 * @params {sideView} - This decides which view should be the side to present on the side
 * @returns {Component} - It returns Login/SignUp component based on authView state.
 */
const SideDiv = ({ sideView, currentView, toggleAuthView }) => {
    return (
        <FloatingDiv
            jcCenter
            flowCol
            padL20
            padR20
            padT10
            padB10
            posAbs
            borderRadius
            height="90%"
            width="85%"
            bg="brandPrimary"
            color="white"
            zIndex="1"
            view={sideView}
            onClick={toggleAuthView}
        >
            {currentView}
        </FloatingDiv>
    );
};

SideDiv.propTypes = {
    sideView: PropTypes.bool,
    currentView: PropTypes.string,
    toggleAuthView: PropTypes.func
};

export default Auth;

Auth.propTypes = {
    hide: PropTypes.func,
    onClick: PropTypes.func,
    currentView: PropTypes.string
};
