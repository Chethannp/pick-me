import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
import useForm from "../formValidator/useForm";
import validate from "../formValidator/validate";
import { validateUserLogin } from "../../../redux-thunk/list/list.actions";

const Login = ({
    validateLogin,
    dismissLogin,
    isLoggedIn,
    loginErrorMessage
}) => {
    const [loginErrorState, setLoginErrorState] = useState("");

    const formInputs = {
        loginUserName: "",
        loginPassword: ""
    };

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
                            <FormLabelName>Username</FormLabelName>
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
                            <FormLabelName>Password</FormLabelName>
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
