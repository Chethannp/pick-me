import React from "react";
import { connect } from "react-redux";
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
import useForm from "../formValidator/useForm";
import validate from "../formValidator/validate";
import { registerUserDetails } from "../../../redux-thunk/dummy/dummy.actions";

const SignUp = ({ registerUser, dismissSignup }) => {
  const formInputs = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    userPassword: ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    formInputs
  );

  function submit() {
    registerUser(values);
    dismissSignup();
  }

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
              <FormLabelName>First Name</FormLabelName>
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
              <FormLabelName>Last Name</FormLabelName>
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
              <FormLabelName>Email</FormLabelName>
            </FormLabel>
          </FormGroup>
          {errors.email && <FormInputError>{errors.email}</FormInputError>}
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
              <FormLabelName>Choose a username</FormLabelName>
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
              <FormLabelName>Choose a password</FormLabelName>
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

export default connect(
  null,
  dispatch => ({
    registerUser: userInfo => dispatch(registerUserDetails(userInfo))
  })
)(SignUp);
