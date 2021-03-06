/**
 * React Imports
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Redux - Thunk Imports
 * To read state values
 */
import { connect } from "react-redux";

/**
 * Static Assets
 */
import Guest from "../../assets/user-placeholder.png";

/**
 * Styled Component Imports
 */
import {
    FlexBox,
    Div,
    ImageBlock,
    Anchor,
    ProfileImage
} from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";

/**
 * Custom Reusable Hooks
 */
import Modal from "../customHooks/modal/modal";
import useModal from "../customHooks/modal/useModal";

/**
 * Component Imports
 */
import Auth from "../auth";
import LazyImageLoader from "../lazyImageLoader";

/**
 * @function ProfileComp - Functional Component
 * @param {isLoggedIn} boolean - Holds the user state if he is logged in or not
 * @param {profile} object - Holds the profile information of the user
 * @return {component} - The main purpose of the component is to showcase the user status and motivate the user to login / update the profile information!
 */
const ProfileComp = ({ isLoggedIn = false, profile }) => {
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
                                    profile
                                        ? `${profile.profileImage}`
                                        : "http://placeimg.com/295/295/any/tech"
                                }
                                fallbackUrl={Guest}
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
                    profile ? (
                        <Div textAlign="center" pad20>
                            <Div marT5 marB5 fontSize="xs">
                                {profile.firstName} {profile.lastName}
                            </Div>
                            <Div marT5 marB5 fontSize="xxs">
                                {profile.designation}
                            </Div>
                            <br />
                            <Anchor to="/update-profile">
                                <CustomButton secondary xs>
                                    Edit Profile
                                </CustomButton>
                            </Anchor>
                        </Div>
                    ) : (
                        <Div textAlign="center" pad20>
                            <Div fontSize="xxs" marT10>
                                Could you please take a moment to update your
                                profile.
                            </Div>
                            <Div fontSize="xxs" marT10>
                                Our team needs it to bring in the best suiting
                                jobs for you!
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
        profile: state.list.profile
    };
};

export default connect(mapStateToProps)(ProfileComp);

ProfileComp.propTypes = {
    isLoggedIn: PropTypes.bool,
    profile: PropTypes.object
};
