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

const Confirm = ({
  nextStep,
  prevStep,
  handleChange,
  firstName,
  lastName,
  email,
  company,
  designation,
  experience
}) => {
  const moveToNextStep = e => {
    e.preventDefault();
    nextStep();
  };

  const moveToPrevStep = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MultiFormWrapper>
      <Div fontSize="lg">Please check if the details are correct</Div>
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
        <FormGroupSpacer>
          <FormGroup>
            <FormInput
              autoComplete="off"
              name="company"
              required
              defaultValue={company}
              onChange={handleChange("company")}
              type="text"
            />
            <FormLabel htmlFor="company">
              <FormLabelName>Current Company</FormLabelName>
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
              name="designation"
              required
              defaultValue={designation}
              onChange={handleChange("designation")}
              type="text"
            />
            <FormLabel htmlFor="designation">
              <FormLabelName>Current Designation</FormLabelName>
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
              name="experience"
              required
              defaultValue={experience}
              onChange={handleChange("experience")}
              type="text"
            />
            <FormLabel htmlFor="experience">
              <FormLabelName>Total Experience </FormLabelName>
            </FormLabel>
          </FormGroup>
          {/* {errors.firstName && (
          <FormInputError>{errors.firstName}</FormInputError>
        )} */}
        </FormGroupSpacer>
        <br /> <br />
      </Div>
      <FlexBox jcSpaceAround alignCenter width="60%">
        <CustomButton width="100px" marAuto onClick={moveToNextStep}>
          Confirm
        </CustomButton>
      </FlexBox>
    </MultiFormWrapper>
  );
};

export default Confirm;
