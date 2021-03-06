/**
 * React Imports
 */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Redux - Thunk Imports
 * To read state values and to Dispatch an action to the reducer
 */
import { connect } from "react-redux";
import { saveProfileInfo } from "../../../redux-thunk/list/list.actions";

/**
 * Styled Component Imports
 */
import { FlexBox, Div } from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";
import {
    FormGroup,
    FormInput,
    FormLabel,
    FormLabelName,
    Form,
    FormGroupSpacer,
    FormInputError
} from "../../styledComponents/forms";

/**
 * Custom Reusable Hooks
 */
import useForm from "../customHooks/formValidator/useForm";
import validate from "../customHooks/formValidator/validate";

/**
 * @function SignUp - Functional Component
 * @param {dismissSignup} - Function => parent reference to close the Modal popup
 * @param {isLoggedIn} - Boolean => state value from reducer
 * @param {registerUser} - Function => used to dispatch an action
 * @returns {Component} - SignUp
 */

const SignUp = ({ dismissSignup, isLoggedIn = false, registerUser }) => {
    /**
     * Since I am using resubale custom hooks
     * To keep it unique I am setting the initial value
     * Which is then passed to useForm as a parmeter and eventually gets validated for their respective enteries.
     */
    const formInputs = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        userPassword: ""
    };

    /**
     * @CustomHook  UseForm
     * @constant {handleChange} - Function => holds the value of a particular input when an onChange event triggers
     * @constant {handleSubmit} - Function => validates form input erros
     * @constant {values} - Object => holds validated form input values
     * @constant {errors} - Object => holds errors specific to inputs
     * @param {submit} - Callback reference
     * @param {validate} - It is a function which validates form inputs
     * @param {formInputs} - It is an object which holds the values of form inputs
     */
    const { handleChange, handleSubmit, values, errors } = useForm(
        submit,
        validate,
        formInputs
    );

    function submit() {
        registerUser(values, "Thank you for registering!");
    }

    useEffect(() => {
        if (isLoggedIn) {
            dismissSignup();
        }
    }, [isLoggedIn]);

    return (
        <FlexBox flowCol jcCenter alignCenter posRel>
            <Div color="brandSecondary" fontWeight="bold" pad10>
                Register
            </Div>

            <Form onSubmit={handleSubmit} noValidate>
                <FormGroupSpacer>
                    <FormGroup>
                        <FormInput
                            autoComplete="off"
                            name="firstName"
                            required
                            defaultValue={values.firstName}
                            onChange={handleChange}
                            type="text"
                        />
                        <FormLabel htmlFor="firstName">
                            <FormLabelName>First Name*</FormLabelName>
                        </FormLabel>
                    </FormGroup>

                    {errors.firstName && (
                        <FormInputError>{errors.firstName}</FormInputError>
                    )}
                </FormGroupSpacer>

                <FormGroupSpacer>
                    <FormGroup>
                        <FormInput
                            autoComplete="off"
                            name="lastName"
                            required
                            defaultValue={values.lastName}
                            onChange={handleChange}
                            type="text"
                        />
                        <FormLabel htmlFor="lastName">
                            <FormLabelName>Last Name*</FormLabelName>
                        </FormLabel>
                    </FormGroup>
                    {errors.lastName && (
                        <FormInputError>{errors.lastName}</FormInputError>
                    )}
                </FormGroupSpacer>

                <FormGroupSpacer>
                    <FormGroup>
                        <FormInput
                            autoComplete="off"
                            name="email"
                            required
                            defaultValue={values.email}
                            onChange={handleChange}
                            type="text"
                        />
                        <FormLabel htmlFor="email">
                            <FormLabelName>Email*</FormLabelName>
                        </FormLabel>
                    </FormGroup>
                    {errors.email && (
                        <FormInputError>{errors.email}</FormInputError>
                    )}
                </FormGroupSpacer>

                <FormGroupSpacer>
                    <FormGroup>
                        <FormInput
                            autoComplete="off"
                            name="userName"
                            required
                            defaultValue={values.userName}
                            onChange={handleChange}
                            type="text"
                        />
                        <FormLabel htmlFor="userName">
                            <FormLabelName>Choose a username*</FormLabelName>
                        </FormLabel>
                    </FormGroup>
                    {errors.userName && (
                        <FormInputError>{errors.userName}</FormInputError>
                    )}
                </FormGroupSpacer>

                <FormGroupSpacer>
                    <FormGroup>
                        <FormInput
                            autoComplete="off"
                            name="userPassword"
                            required
                            defaultValue={values.userPassword}
                            onChange={handleChange}
                            type="password"
                        />
                        <FormLabel htmlFor="userPassword">
                            <FormLabelName>Choose a password*</FormLabelName>
                        </FormLabel>
                    </FormGroup>
                    {errors.userPassword && (
                        <FormInputError>{errors.userPassword}</FormInputError>
                    )}
                </FormGroupSpacer>

                <br />
                <CustomButton>Submit</CustomButton>
                <br />
            </Form>
        </FlexBox>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.list.isLoggedIn
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        registerUser: (userInfo, message) =>
            dispatch(saveProfileInfo(userInfo, message))
    })
)(SignUp);

SignUp.propTypes = {
    registerUser: PropTypes.func,
    dismissSignup: PropTypes.func,
    isLoggedIn: PropTypes.bool
};
