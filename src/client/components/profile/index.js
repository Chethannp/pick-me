import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Guest from "../../assets/user-placeholder.png";
import User from "../../assets/user.jpeg";
import {
    FlexBox,
    Div,
    ImageBlock,
    Anchor
} from "../../styledComponents/layout";
import styled from "styled-components";
import { CustomButton } from "../../styledComponents/button";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import Auth from "../auth";
import LazyImageLoader from "../lazyImageLoader";

const ProfileImage = styled.div`
    border-radius: 10%;
    border: 2px solid #fff;
    box-shadow: inset 0 0 5px 0 rgb(218, 218, 218),
        0 0px 2px 0 rgb(199, 199, 199);
    margin: -50px auto 0;
`;

const ProfileComp = ({ isLoggedIn, profileInfo }) => {
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
                                    profileInfo
                                        ? `${profileInfo.image}`
                                        : "http://placeimg.com/295/295/any/tech"
                                }
                                fallbackUrl={User}
                                width="80px"
                                height="80px"
                            />
                        ) : (
                            <ImageBlock
                                src={Guest}
                                width="80px"
                                height="80px"
                            />
                        )}
                    </ProfileImage>
                </Div>
                {isLoggedIn ? (
                    profileInfo ? (
                        <Div textAlign="center" pad20>
                            {profileInfo.firstName} {profileInfo.lastName}
                        </Div>
                    ) : (
                        <Div textAlign="center" pad20>
                            <Div fontSize="xs">Thanks for the log In !!!</Div>
                            <Div fontSize="xxs" marT10>
                                Oops...! We do not have your profile information
                                with us :(
                            </Div>
                            <Div fontSize="xxs" marT10>
                                Our team needs it to bring in the best suiting
                                jobs for you,
                            </Div>
                            <Div fontSize="xxs" marT10>
                                Please spare some time to
                            </Div>
                            <br />
                            <Anchor to="/update-profile">
                                <CustomButton secondary xs>
                                    Update your Profile :)
                                </CustomButton>
                            </Anchor>
                        </Div>
                    )
                ) : (
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
        profileInfo: state.list.profile
    };
};

export default connect(mapStateToProps)(ProfileComp);

ProfileComp.propTypes = {
    isLoggedIn: PropTypes.bool,
    profileInfo: PropTypes.object
};
