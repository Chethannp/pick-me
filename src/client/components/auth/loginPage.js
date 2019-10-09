/**
 * React Imports
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Redux - Thunk Imports
 * To read state values and to Dispatch an action to the reducer
 */
import { connect } from "react-redux";
import { validateUserLogin } from "../../../redux-thunk/list/list.actions";

/**
 * Styled Component Imports
 */
import { FlexBox, Div } from "../../styledComponents/layout";
import {
    Form,
    FormGroupSpacer,
    FormGroup,
    FormInput,
    FormLabel,
    FormLabelName,
    FormInputError
} from "../../styledComponents/forms";
import { CustomButton } from "../../styledComponents/button";

/**
 * Custom Reusable Hooks
 */
import useForm from "../formValidator/useForm";
import validate from "../formValidator/validate";

/**
 * @function Login - Functional Component
 * @param {dismissLogin} - Function => parent reference to close the Modal popup
 * @param {isLoggedIn} - Boolean => state value from reducer
 * @param {loginErrorMessage} - Boolean => state value from reducer
 * @param {validateLogin} - Function => used to dispatch an action
 */

const Login = ({
    validateLogin,
    dismissLogin,
    isLoggedIn = false,
    loginErrorMessage = ""
}) => {
    const [loginErrorState, setLoginErrorState] = useState("");

    /**
     * Since I am using resubale custom hooks
     * To keep it unique I am setting the initial value
     * Which is then passed to useForm as a parmeter and eventually gets validated for their respective enteries.
     */
    const formInputs = {
        loginUserName: "",
        loginPassword: ""
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
     * @returns {Component}
     */
    const { handleChange, handleSubmit, values, errors } = useForm(
        submit,
        validate,
        formInputs
    );

    function submit() {
        setLoginErrorState("");
        validateLogin(values);
    }

    useEffect(() => {
        if (isLoggedIn) {
            dismissLogin();
        }
        if (loginErrorMessage.length > 0) {
            setLoginErrorState(loginErrorMessage);
        }
    }, [isLoggedIn, loginErrorMessage]);

    return (
        <FlexBox flowCol jcCenter alignCenter posRel>
            <Div color="brandSecondary" fontWeight="bold" pad10>
                Login
            </Div>

            <Form onSubmit={handleSubmit} noValidate>
                <FormGroupSpacer>
                    <FormGroup>
                        <FormInput
                            autoComplete="off"
                            name="loginUserName"
                            required
                            defaultValue={values.loginUserName}
                            onChange={handleChange}
                            type="text"
                        />
                        <FormLabel htmlFor="loginUserName">
                            <FormLabelName>Username*</FormLabelName>
                        </FormLabel>
                    </FormGroup>

                    {errors.loginUserName && (
                        <FormInputError>{errors.loginUserName}</FormInputError>
                    )}
                </FormGroupSpacer>

                <FormGroupSpacer>
                    <FormGroup>
                        <FormInput
                            autoComplete="off"
                            name="loginPassword"
                            required
                            defaultValue={values.loginPassword}
                            onChange={handleChange}
                            type="password"
                        />
                        <FormLabel htmlFor="loginPassword">
                            <FormLabelName>Password*</FormLabelName>
                        </FormLabel>
                    </FormGroup>
                    {errors.loginPassword && (
                        <FormInputError>{errors.loginPassword}</FormInputError>
                    )}
                </FormGroupSpacer>
                {loginErrorState && (
                    <FormInputError>{loginErrorState}</FormInputError>
                )}
                <br />
                <CustomButton>Submit</CustomButton>
                <br />
            </Form>
        </FlexBox>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.list.isLoggedIn,
        loginErrorMessage: state.list.loginErrorMessage
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        validateLogin: credentials => dispatch(validateUserLogin(credentials))
    })
)(Login);

Login.propTypes = {
    validateLogin: PropTypes.func,
    dismissLogin: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    loginErrorMessage: PropTypes.string
};
