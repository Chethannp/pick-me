import React from "react";
import PropTypes from "prop-types";
import { FlexBox, Div } from "../../styledComponents/layout";
import {
    FormGroupSpacer,
    FormGroup,
    FormInput,
    FormLabel,
    FormLabelName
} from "../../styledComponents/forms";
import { CustomButton } from "../../styledComponents/button";

const FormPersonalDetails = ({
    nextStep,
    prevStep,
    handleChange,
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
        <FlexBox flowCol pad20 jcCenter alignCenter width="500px" marAuto>
            <Div fontSize="lg">Please fill in your personal details </Div>
            <Div width="70%" marT30>
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
                <CustomButton width="100px" marAuto onClick={moveToPrevStep}>
                    Prev
                </CustomButton>
                <CustomButton width="100px" marAuto onClick={moveToNextStep}>
                    Next
                </CustomButton>
            </FlexBox>
        </FlexBox>
    );
};

export default FormPersonalDetails;

FormPersonalDetails.propTypes = {
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    handleChange: PropTypes.func,
    company: PropTypes.string,
    designation: PropTypes.string,
    experience: PropTypes.string
};
