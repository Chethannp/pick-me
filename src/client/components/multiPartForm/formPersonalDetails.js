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
import useForm from "../formValidator/useForm";
import validate from "../formValidator/validate";

/**
 * @function FormPersonalDetails - Functional Component
 * @param {handleStepChange} Callback - Parent function returns the desired component
 * @returns {component} - This component is rendered when the user tries to apply for a job
 */
const FormPersonalDetails = ({ handleStepChange }) => {
    /**
     * Since I am using resubale custom hooks
     * To keep it unique I am setting the initial value
     * Which is then passed to useForm as a parmeter and eventually gets validated for their respective enteries.
     */
    const formInputs = {
        company: "",
        designation: "",
        experience: 0,
        noticePeriod: 0
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
                                maxLength="3"
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
