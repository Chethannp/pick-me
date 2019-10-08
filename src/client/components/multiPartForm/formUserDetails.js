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

const FormUserDetails = ({ handleStepChange }) => {
    const formInputs = {
        firstName: "",
        lastName: "",
        email: ""
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
            <Div fontSize="lg" color="brandSecondary">
                Please fill in user details
            </Div>
            <Div width="70%" marT30>
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
                                <FormLabelName>Email </FormLabelName>
                            </FormLabel>
                        </FormGroup>
                        {errors.email && (
                            <FormInputError>{errors.email}</FormInputError>
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

export default FormUserDetails;

FormUserDetails.propTypes = {
    handleStepChange: PropTypes.func,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
};
