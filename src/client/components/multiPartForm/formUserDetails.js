import React from "react";
import {
  MultiFormWrapper,
  FormGroupSpacer,
  FormGroup,
  FormInput,
  FormLabel,
  FormLabelName,
  FormInputError
} from "../../styledComponents/forms";
import { FlexBox, Div } from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";

const FormUserDetails = ({
  nextStep,
  handleChange,
  firstName,
  lastName,
  email
}) => {
  const moveToNextStep = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <MultiFormWrapper>
      <Div fontSize="lg">Please fill in user details </Div>
      <Div width="70%" marT30>
        <FormGroupSpacer>
          <FormGroup>
            <FormInput
              autoComplete="off"
              name="firstName"
              required
              value={firstName}
              onChange={handleChange("firstName")}
              type="text"
            />
            <FormLabel htmlFor="firstName">
              <FormLabelName>First Name</FormLabelName>
            </FormLabel>
          </FormGroup>
          {/* {errors.firstName && (
          <FormInputError>{errors.firstName}</FormInputError>
        )} */}
        </FormGroupSpacer>
        <FormGroupSpacer>
          <FormGroup>
            <FormInput
              autoComplete="off"
              name="lastName"
              required
              defaultValue={lastName}
              onChange={handleChange("lastName")}
              type="text"
            />
            <FormLabel htmlFor="lastName">
              <FormLabelName>Last Name</FormLabelName>
            </FormLabel>
          </FormGroup>
          {/* {errors.firstName && (
          <FormInputError>{errors.firstName}</FormInputError>
        )} */}
        </FormGroupSpacer>
        <FormGroupSpacer>
          <FormGroup>
            <FormInput
              autoComplete="off"
              name="email"
              required
              defaultValue={email}
              onChange={handleChange("email")}
              type="text"
            />
            <FormLabel htmlFor="email">
              <FormLabelName>Email </FormLabelName>
            </FormLabel>
          </FormGroup>
          {/* {errors.firstName && (
          <FormInputError>{errors.firstName}</FormInputError>
        )} */}
        </FormGroupSpacer>
        <br /> <br />
      </Div>
      <CustomButton width="200px" marAuto onClick={moveToNextStep}>
        Next
      </CustomButton>
    </MultiFormWrapper>
  );
};

export default FormUserDetails;
