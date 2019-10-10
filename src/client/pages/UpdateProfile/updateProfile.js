/**
 * React Imports
 */
import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

/**
 * Redux - Thunk Imports
 * To read state values and to Dispatch an action to the reducer
 */
import { connect } from "react-redux";
import { saveProfileInfo } from "../../../redux-thunk/list/list.actions";

/**
 * Static Assets
 */
import UserImage from "../../assets/user-placeholder.png";

/**
 * Styled Component Imports
 */
import { Row, Column } from "../../styledComponents/grid";
import { CustomButton } from "../../styledComponents/button";
import {
    Form,
    FormGroupSpacer,
    FormGroup,
    FormInput,
    FormLabel,
    FormLabelName,
    FormInputError
} from "../../styledComponents/forms";
import {
    Breadcrumb,
    Anchor,
    Container,
    Div
} from "../../styledComponents/layout";

/**
 * Component Imports
 */
import useForm from "../../components/customHooks/formValidator/useForm";
import validate from "../../components/customHooks/formValidator/validate";

/**
 * @function UpdateProfile
 * @param {profile} object - Holds user information
 * @param {saveProfile} callback - Used to dispatch action to make api call and save the user's profile input on server
 * @param {history} object - Need this to dynamically route the user back to homepage.
 * @param {isLoggedIn} boolean - Holds the user state whether he is logged in or not
 * @returns {component}
 * Note: This component allows the user to update his profile pic and information which might need to apply AI to find the best jobs for him!!!
 */
const UpdateProfile = ({
    profile,
    saveProfile,
    history,
    isLoggedIn = false
}) => {
    const [image, setImage] = useState();
    const imageInputElement = useRef();

    const handleClick = () => {
        imageInputElement.current.click();
    };

    const handleImageUpload = e => {
        e.preventDefault();
        let files = Array.from(e.target.files);
        files.forEach(file => {
            let reader = new FileReader();

            reader.onloadend = event => {
                const img = new Image();
                img.src = event.target.result;
                setImage(img.src);
            };
            reader.readAsDataURL(file);
        });
    };

    const formInputs = {
        firstName: (profile && profile.firstName) || "",
        lastName: (profile && profile.lastName) || "",
        email: (profile && profile.email) || "",
        company: (profile && profile.company) || "",
        designation: (profile && profile.designation) || "",
        experience: (profile && profile.experience) || 0,
        noticePeriod: (profile && profile.noticePeriod) || 0
    };

    const { handleChange, handleSubmit, values, errors } = useForm(
        submit,
        validate,
        formInputs
    );

    function submit() {
        let profileInfo = values;
        profileInfo.profileImage = image;
        saveProfile(profileInfo, "Profile updated!");
        setTimeout(() => {
            history.push("/");
        }, 1000);
    }

    return (
        <Container>
            {isLoggedIn ? (
                <Div marB30 pad20>
                    <Row>
                        <Column xs="12">
                            <Div marB30>
                                <Breadcrumb>
                                    <Anchor to="/" color="brandSecondary">
                                        Home
                                    </Anchor>{" "}
                                    -/- Job Details Page
                                </Breadcrumb>
                            </Div>
                        </Column>
                    </Row>

                    <Row>
                        <Column xs="12" sm="4" md="4" lg="4">
                            <Div
                                marAuto
                                width="100px"
                                height="100px"
                                textAlign="center"
                                boxShadow="lightGrey"
                                borderRadius
                                pad5
                            >
                                <input
                                    accept="image/x-png,image/jpeg,image/jpg,image/heic"
                                    className="upload"
                                    type="file"
                                    onChange={handleImageUpload}
                                    ref={imageInputElement}
                                    style={{ display: "none" }}
                                />
                                <img
                                    src={image ? image : UserImage}
                                    width="100%"
                                    height="100%"
                                    onClick={handleClick}
                                />
                            </Div>
                        </Column>

                        <Column xs="12" sm="4" md="4" lg="4">
                            <Div fontSize="md" color="brandSecondary" marT20>
                                Please fill in your details
                            </Div>

                            <Row>
                                <Column xs="12" sm="12" md="12" lg="12">
                                    <Div width="280px" marAuto>
                                        <Form
                                            onSubmit={handleSubmit}
                                            noValidate
                                        >
                                            <FormGroupSpacer>
                                                <FormGroup>
                                                    <FormInput
                                                        autoComplete="off"
                                                        name="firstName"
                                                        required
                                                        defaultValue={
                                                            values.firstName
                                                        }
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                    <FormLabel htmlFor="firstName">
                                                        <FormLabelName>
                                                            First Name*
                                                        </FormLabelName>
                                                    </FormLabel>
                                                </FormGroup>

                                                {errors.firstName && (
                                                    <FormInputError>
                                                        {errors.firstName}
                                                    </FormInputError>
                                                )}
                                            </FormGroupSpacer>
                                            <FormGroupSpacer>
                                                <FormGroup>
                                                    <FormInput
                                                        autoComplete="off"
                                                        name="lastName"
                                                        required
                                                        defaultValue={
                                                            values.lastName
                                                        }
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                    <FormLabel htmlFor="lastName">
                                                        <FormLabelName>
                                                            Last Name*
                                                        </FormLabelName>
                                                    </FormLabel>
                                                </FormGroup>

                                                {errors.lastName && (
                                                    <FormInputError>
                                                        {errors.lastName}
                                                    </FormInputError>
                                                )}
                                            </FormGroupSpacer>
                                            <FormGroupSpacer>
                                                <FormGroup>
                                                    <FormInput
                                                        autoComplete="off"
                                                        name="email"
                                                        required
                                                        defaultValue={
                                                            values.email
                                                        }
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                    <FormLabel htmlFor="email">
                                                        <FormLabelName>
                                                            Email*
                                                        </FormLabelName>
                                                    </FormLabel>
                                                </FormGroup>

                                                {errors.email && (
                                                    <FormInputError>
                                                        {errors.email}
                                                    </FormInputError>
                                                )}
                                            </FormGroupSpacer>
                                            <FormGroupSpacer>
                                                <FormGroup>
                                                    <FormInput
                                                        autoComplete="off"
                                                        name="company"
                                                        required
                                                        defaultValue={
                                                            values.company
                                                        }
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                    <FormLabel htmlFor="company">
                                                        <FormLabelName>
                                                            Current Company*
                                                        </FormLabelName>
                                                    </FormLabel>
                                                </FormGroup>

                                                {errors.company && (
                                                    <FormInputError>
                                                        {errors.company}
                                                    </FormInputError>
                                                )}
                                            </FormGroupSpacer>
                                            <FormGroupSpacer>
                                                <FormGroup>
                                                    <FormInput
                                                        autoComplete="off"
                                                        name="designation"
                                                        required
                                                        defaultValue={
                                                            values.designation
                                                        }
                                                        onChange={handleChange}
                                                        type="text"
                                                    />
                                                    <FormLabel htmlFor="designation">
                                                        <FormLabelName>
                                                            Current Designation*
                                                        </FormLabelName>
                                                    </FormLabel>
                                                </FormGroup>

                                                {errors.designation && (
                                                    <FormInputError>
                                                        {errors.designation}
                                                    </FormInputError>
                                                )}
                                            </FormGroupSpacer>
                                            <FormGroupSpacer>
                                                <FormGroup>
                                                    <FormInput
                                                        autoComplete="off"
                                                        name="experience"
                                                        required
                                                        defaultValue={
                                                            values.experience
                                                        }
                                                        onChange={handleChange}
                                                        type="text"
                                                        pattern="\d*"
                                                        minLength="1"
                                                        maxLength="3"
                                                    />
                                                    <FormLabel htmlFor="experience">
                                                        <FormLabelName>
                                                            Total years of
                                                            experience*
                                                        </FormLabelName>
                                                    </FormLabel>
                                                </FormGroup>

                                                {errors.experience && (
                                                    <FormInputError>
                                                        {errors.experience}
                                                    </FormInputError>
                                                )}
                                            </FormGroupSpacer>
                                            <FormGroupSpacer>
                                                <FormGroup>
                                                    <FormInput
                                                        autoComplete="off"
                                                        name="noticePeriod"
                                                        required
                                                        defaultValue={
                                                            values.noticePeriod
                                                        }
                                                        onChange={handleChange}
                                                        type="text"
                                                        pattern="\d*"
                                                        minLength="1"
                                                        maxLength="2"
                                                    />
                                                    <FormLabel htmlFor="noticePeriod">
                                                        <FormLabelName>
                                                            Notice period
                                                            duration (month/s)*
                                                        </FormLabelName>
                                                    </FormLabel>
                                                </FormGroup>

                                                {errors.noticePeriod && (
                                                    <FormInputError>
                                                        {errors.noticePeriod}
                                                    </FormInputError>
                                                )}
                                            </FormGroupSpacer>
                                            <br /> <br />
                                            <CustomButton marAuto width="100px">
                                                Save
                                            </CustomButton>
                                        </Form>
                                    </Div>
                                </Column>
                            </Row>
                        </Column>
                    </Row>
                </Div>
            ) : (
                <Div
                    bg="lightShade"
                    pad20
                    boxShadow="lightGrey"
                    borderRadius
                    marAuto
                    marT20
                    width="60%"
                    textAlign="center"
                >
                    <Div fontSize="md" marB20>
                        Oops..!
                    </Div>

                    <Div fontSize="xs" marB40>
                        Looks like you are not logged in.
                    </Div>

                    <Anchor to={"/"} textDecoration="none" color="black">
                        <CustomButton>Go Back</CustomButton>
                    </Anchor>
                </Div>
            )}
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        profile: state.list.profile,
        isLoggedIn: state.list.isLoggedIn
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        saveProfile: (data, message) => dispatch(saveProfileInfo(data, message))
    })
)(UpdateProfile);

UpdateProfile.propTypes = {
    saveProfile: PropTypes.func,
    profile: PropTypes.object,
    history: PropTypes.object,
    isLoggedIn: PropTypes.bool
};
