/**
 * React Imports
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Styled Component Imports
 */
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

/**
 * Custom Reusable Hooks
 */
import useForm from "../customHooks/formValidator/useForm";
import validate from "../customHooks/formValidator/validate";

/**
 * @function FormUserDetails - Functional Component
 * @param {handleStepChange} Callback - Parent function returns the desired component
 * @returns {component} - This component is rendered when the user tries to apply for a job and this is the first screen shown for collecting employee details
 */
const FormUserDetails = ({ handleStepChange }) => {
    const formInputs = {
        firstName: "",
        lastName: "",
        email: ""
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

    //Invokes the parent function to decide on the rendering component
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
