import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { FlexBox } from "../../styledComponents/layout";
import Login from "./loginPage";
import SignUp from "./signupPage";

const AuthWrapper = styled(FlexBox)`
  margin: 18vh auto;
`;

const AuthContainer = styled(FlexBox)`
  box-shadow: 0px 0px 12px 2px rgba(15, 15, 15, 0.2);
`;

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
    props.signup == true
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

const Auth = () => {
  const [isLogInActive, setIsLogInActive] = useState(false);
  const current = isLogInActive ? "Login" : "Register";

  const changeState = () => {
    setIsLogInActive(!isLogInActive);
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
        {current == "Login" ? <Login /> : <SignUp />}
      </AuthContainer>
      <SideDiv signup={isLogInActive} current={current} onClick={changeState} />
    </AuthWrapper>
  );
};

const SideDiv = props => {
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
      signup={props.signup}
      onClick={props.onClick}
    >
      {props.current}
    </FloatingDiv>
  );
};

export default Auth;
