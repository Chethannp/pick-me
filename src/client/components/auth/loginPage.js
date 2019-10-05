import React from "react";
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
import { validateUserLogin } from "../../../redux-thunk/dummy/dummy.actions";

const Login = ({ validateLogin, dismissLogin }) => {
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
    validateLogin(values);
    dismissLogin();
  }

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

        <br />
        <CustomButton>Submit</CustomButton>
        <br />
      </Form>
    </FlexBox>
  );
};

export default connect(
  null,
  dispatch => ({
    validateLogin: credentials => dispatch(validateUserLogin(credentials))
  })
)(Login);
