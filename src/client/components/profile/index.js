import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Guest from "../../assets/user-placeholder.png";
import User from "../../assets/user.jpeg";
import { FlexBox, Div, ImageBlock } from "../../styledComponents/layout";
import styled from "styled-components";
import { CustomButton } from "../../styledComponents/button";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import Auth from "../auth";
import LazyImageLoader from "../lazyImageLoader";

const ProfileImage = styled.div`
  border-radius: 10%;
  border: 2px solid #fff;
  box-shadow: inset 0 21.5px 36px 0 rgb(227, 173, 48),
    0 -4.5px 0px 0 rgba(255, 255, 255, 0.15);
  margin: -50px auto 0;
`;

const ProfileComp = ({ isLoggedIn, profile }) => {
  const { isShowing, toggle } = useModal();

  return (
    <React.Fragment>
      <FlexBox
        bg="white"
        width="250px"
        mar10
        flowCol
        alignCenter
        borderRadius
        style={{ border: "1px solid rgba(208,208,208,.3)" }}
      >
        <Div height="80px" width="100%" bg="lightShade" borderRadius />
        <Div>
          <ProfileImage>
            {isLoggedIn ? (
              <LazyImageLoader
                url={
                  profile.image
                    ? `${profile.image}`
                    : "http://placeimg.com/295/295/any/tech"
                }
                fallbackUrl={User}
                width="80px"
                height="80px"
              />
            ) : (
              <ImageBlock src={Guest} width="80px" height="80px" />
            )}
          </ProfileImage>

          {/* <ProfileImage
            src={isLoggedIn ? User : profile.image}
            alt=""
            width="100%"
          /> */}
        </Div>
        {!isLoggedIn && (
          <Div textAlign="center" pad20>
            <Div fontSize="xs">Hey there, Welcome !!!</Div>
            <Div fontSize="xxs" marT10>
              We would love to serve you better, can you please
            </Div>
            <br />
            <CustomButton secondary xs onClick={toggle}>
              Login / Sign Up
            </CustomButton>
          </Div>
        )}
      </FlexBox>
      <Modal isShowing={isShowing} hide={toggle}>
        <Auth hide={toggle} />
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.list.isLoggedIn,
    profile: state.list.profile
  };
};

export default connect(mapStateToProps)(ProfileComp);

ProfileComp.propTypes = {
  isLoggedIn: PropTypes.bool
};
