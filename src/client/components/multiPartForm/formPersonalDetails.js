import React from "react";
import PropTypes from "prop-types";

import useForm from "../formValidator/useForm";
import validate from "../formValidator/validate";

import {
    MultiFormWrapper,
    FormGroupSpacer,
    FormGroup,
    FormInput,
    FormLabel,
    FormLabelName,
    Form,
    FormInputError
} from "../../styledComponents/forms";
import { Div } from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";

const FormPersonalDetails = ({ handleStepChange }) => {
    const formInputs = {
        company: "",
        designation: "",
        experience: 0,
        noticePeriod: 0
    };

    const { handleChange, handleSubmit, values, errors } = useForm(
        submit,
        validate,
        formInputs
    );

    function submit() {
        handleStepChange(values);
    }

    return (
        <MultiFormWrapper>
            <Div fontSize="lg">Please fill in user details </Div>
            <Div width="70%" marT30>
                <Form onSubmit={handleSubmit} noValidate>
                    <FormGroupSpacer>
                        <FormGroup>
                            <FormInput
                                autoComplete="off"
                                name="company"
                                required
                                value={values.company}
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
                                defaultValue={values.experience}
                                onChange={handleChange}
                                type="text"
                                pattern="\d*"
                                minLength="1"
                                maxLength="2"
                            />
                            <FormLabel htmlFor="experience">
                                <FormLabelName>
                                    Current Experience (in years)*
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
                                required
                                defaultValue={values.noticePeriod}
                                onChange={handleChange}
                                type="text"
                                name="noticePeriod"
                                pattern="\d*"
                                autoComplete="off"
                                minLength="1"
                                maxLength="2"
                            />
                            <FormLabel htmlFor="noticePeriod">
                                <FormLabelName>
                                    Notice period (in months)*
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
                    <CustomButton width="200px" marAuto>
                        Next
                    </CustomButton>
                </Form>
            </Div>
        </MultiFormWrapper>
    );
};

export default FormPersonalDetails;

FormPersonalDetails.propTypes = {
    handleStepChange: PropTypes.func,
    company: PropTypes.string,
    designation: PropTypes.string,
    experience: PropTypes.number,
    noticePeriod: PropTypes.number
};
