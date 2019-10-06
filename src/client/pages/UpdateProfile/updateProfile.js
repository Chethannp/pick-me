import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  FlexBox,
  Div,
  Container,
  DetailsWrapper,
  DetailsProfileImage,
  DetailsContent,
  Anchor,
  Breadcrumb
} from "../../styledComponents/layout";
import Guest from "../../assets/company-placeholder.png";
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
import useForm from "../../components/formValidator/useForm";
import validate from "../../components/formValidator/validate";
import { saveProfileInfo } from "../../../redux-thunk/list/list.actions";

const UpdateProfile = props => {
  const formInputs = {
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    designation: "",
    experience: "",
    noticePeriod: ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate,
    formInputs
  );

  function submit() {
    props.saveProfile(values);
    props.history.goBack();
  }

  return (
    <FlexBox flowCol>
      <Container>
        <Breadcrumb>
          <Anchor to="/" color="brandSecondary">
            Home
          </Anchor>{" "}
          ~> Update Profile
        </Breadcrumb>
      </Container>

      <Div height="75px" width="100%" bg="lightShade" borderRadius />
      <Container>
        <DetailsWrapper alignCenter jcStart>
          <DetailsContent>
            <Div
              marAuto
              width="60%"
              bg="white"
              borderRadius
              pad20
              style={{ border: "1px solid rgba(208,208,208,.3)" }}
            >
              <Div
                color="brandSecondary"
                marB30
                fontSize="lg"
                textAlign="center"
              >
                Please fill up the details
              </Div>
              <Div width="280px" marAuto>
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
                        name="company"
                        required
                        defaultValue={values.company}
                        onChange={handleChange}
                        type="text"
                      />
                      <FormLabel htmlFor="company">
                        <FormLabelName>Current Company*</FormLabelName>
                      </FormLabel>
                    </FormGroup>

                    {errors.company && (
                      <FormInputError>{errors.company}</FormInputError>
                    )}
                  </FormGroupSpacer>
                  <FormGroupSpacer>
                    <FormGroup>
                      <FormInput
                        autoComplete="off"
                        name="designation"
                        required
                        defaultValue={values.designation}
                        onChange={handleChange}
                        type="text"
                      />
                      <FormLabel htmlFor="designation">
                        <FormLabelName>Current Designation*</FormLabelName>
                      </FormLabel>
                    </FormGroup>

                    {errors.designation && (
                      <FormInputError>{errors.designation}</FormInputError>
                    )}
                  </FormGroupSpacer>
                  <FormGroupSpacer>
                    <FormGroup>
                      <FormInput
                        autoComplete="off"
                        name="experience"
                        required
                        defaultValue={values.experience}
                        onChange={handleChange}
                        type="text"
                      />
                      <FormLabel htmlFor="experience">
                        <FormLabelName>
                          Total years of experience*
                        </FormLabelName>
                      </FormLabel>
                    </FormGroup>

                    {errors.experience && (
                      <FormInputError>{errors.experience}</FormInputError>
                    )}
                  </FormGroupSpacer>
                  <FormGroupSpacer>
                    <FormGroup>
                      <FormInput
                        autoComplete="off"
                        name="noticePeriod"
                        required
                        defaultValue={values.noticePeriod}
                        onChange={handleChange}
                        type="text"
                      />
                      <FormLabel htmlFor="noticePeriod">
                        <FormLabelName>Notice period duration*</FormLabelName>
                      </FormLabel>
                    </FormGroup>

                    {errors.noticePeriod && (
                      <FormInputError>{errors.noticePeriod}</FormInputError>
                    )}
                  </FormGroupSpacer>
                  <br /> <br />
                  <CustomButton marAuto width="100px">
                    <Anchor to="/">Save</Anchor>
                  </CustomButton>
                </Form>
              </Div>
            </Div>
          </DetailsContent>
        </DetailsWrapper>
      </Container>
    </FlexBox>
  );
};

export default connect(
  null,
  dispatch => ({
    saveProfile: data => dispatch(saveProfileInfo(data))
  })
)(UpdateProfile);

UpdateProfile.propTypes = {
  saveProfile: PropTypes.func
};
