import React from "react";
import Guest from "../../assets/user-placeholder.png";
import User from "../../assets/user.jpeg";
import { FlexBox, Div, ImageBlock } from "../../styledComponents/layout";
import styled from "styled-components";
import { CustomButton } from "../../styledComponents/button";

const ProfileImage = styled(ImageBlock)`
  border-radius: 10%;
  border: 2px solid #fff;
  box-shadow: inset 0 1.5px 3px 0 rgba(0, 0, 0, 0.15),
    0 1.5px 3px 0 rgba(0, 0, 0, 0.15);
  margin: -50px auto 0;
`;

const ProfileComp = props => {
  return (
    <FlexBox
      bg="white"
      width="320px"
      borderRadius
      borderStyle="lightGrey"
      mar10
      flowCol
      alignCenter
    >
      <Div height="80px" width="100%" bg="brandPrimary" />
      <Div width="80px">
        <ProfileImage
          src={props.loggedIn ? User : Guest}
          alt=""
          width="100%"
        />
      </Div>
      <Div textAlign="center" pad20>
        <Div fontSize="xs">Hey there, Welcome !!!</Div>
        <Div fontSize="xxs" marT10>
          We would love to serve you better, can you please
        </Div>
        <br />
        <CustomButton secondary xs>
          Login / Sign Up
        </CustomButton>
      </Div>
    </FlexBox>
  );
};

export default ProfileComp;
