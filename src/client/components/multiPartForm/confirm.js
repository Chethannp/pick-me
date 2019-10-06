import React from "react";
import PropTypes from "prop-types";
import {
    MultiFormWrapper,
    FormGroupSpacer,
    FormGroup,
    FormInput,
    FormLabel,
    FormLabelName,
    Form
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
                <Form noValidate>
                    <FormGroupSpacer>
                        <FormGroup>
                            <FormInput
                                autoComplete="off"
                                name="firstName"
                                required
                                defaultValue={firstName}
                                onChange={handleChange}
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
                                onChange={handleChange}
                                type="text"
                            />
                            <FormLabel htmlFor="lastName">
                                <FormLabelName>Last Name</FormLabelName>
                            </FormLabel>
                        </FormGroup>

                        {/* {errors.lastName && (
                            <FormInputError>{errors.lastName}</FormInputError>
                        )} */}
                    </FormGroupSpacer>

                    <FormGroupSpacer>
                        <FormGroup>
                            <FormInput
                                autoComplete="off"
                                name="email"
                                required
                                defaultValue={email}
                                onChange={handleChange}
                                type="text"
                            />
                            <FormLabel htmlFor="email">
                                <FormLabelName>Email</FormLabelName>
                            </FormLabel>
                        </FormGroup>

                        {/* {errors.email && (
                            <FormInputError>{errors.email}</FormInputError>
                        )} */}
                    </FormGroupSpacer>

                    <FormGroupSpacer>
                        <FormGroup>
                            <FormInput
                                autoComplete="off"
                                name="company"
                                required
                                defaultValue={company}
                                onChange={handleChange}
                                type="text"
                            />
                            <FormLabel htmlFor="company">
                                <FormLabelName>
                                    Current Company Name
                                </FormLabelName>
                            </FormLabel>
                        </FormGroup>

                        {/* {errors.company && (
                            <FormInputError>{errors.company}</FormInputError>
                        )} */}
                    </FormGroupSpacer>

                    <FormGroupSpacer>
                        <FormGroup>
                            <FormInput
                                autoComplete="off"
                                name="designation"
                                required
                                defaultValue={designation}
                                onChange={handleChange}
                                type="text"
                            />
                            <FormLabel htmlFor="designation">
                                <FormLabelName>Designation</FormLabelName>
                            </FormLabel>
                        </FormGroup>

                        {/* {errors.designation && (
                            <FormInputError>
                                {errors.designation}
                            </FormInputError>
                        )} */}
                    </FormGroupSpacer>

                    <FormGroupSpacer>
                        <FormGroup>
                            <FormInput
                                autoComplete="off"
                                name="experience"
                                required
                                defaultValue={experience}
                                onChange={handleChange}
                                type="text"
                            />
                            <FormLabel htmlFor="experience">
                                <FormLabelName>Total Experience</FormLabelName>
                            </FormLabel>
                        </FormGroup>

                        {/* {errors.experience && (
                            <FormInputError>{errors.experience}</FormInputError>
                        )} */}
                    </FormGroupSpacer>
                </Form>
                <br /> <br />
            </Div>
            <FlexBox jcSpaceAround alignCenter width="60%">
                <CustomButton width="100px" marAuto onClick={moveToPrevStep}>
                    Prev
                </CustomButton>
                <CustomButton width="100px" marAuto onClick={moveToNextStep}>
                    Next
                </CustomButton>
            </FlexBox>
        </MultiFormWrapper>
    );
};

export default Confirm;

Confirm.propTypes = {
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    handleChange: PropTypes.func,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.string,
    designation: PropTypes.string,
    experience: PropTypes.string
};
