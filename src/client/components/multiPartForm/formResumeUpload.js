/**
 * React Imports
 */
import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Redux - Thunk Imports
 * To read state values and to Dispatch an action to the reducer
 */
import { connect } from "react-redux";
import { applyForJob } from "../../../redux-thunk/list/list.actions";

/**
 * Styled Component Imports
 */
import { Div, FlexBox } from "../../styledComponents/layout";
import { MultiFormWrapper } from "../../styledComponents/forms";
import { CustomButton } from "../../styledComponents/button";

/**
 * @function FormResumeUpload - Functional Component
 * @param {nextStep} Callback - Parent function to return the desired component
 * @param {apply} Dispatch - Dispatches action to save the form submitted data
 * @returns {component}
 */
const FormResumeUpload = ({ nextStep, formInputValues = {}, apply }) => {
    const [file, setFile] = useState();
    const [enableSubmit, setEnableSubmit] = useState(false);

    //Handles uploaded file and saves it to file variable in the state
    const handleFileUpload = e => {
        e.preventDefault();
        let files = Array.from(e.target.files)[0];
        setFile(files);
        setEnableSubmit(true);
    };

    //Combines the previous form details and adds the uploaded document and is then dispatched for server call
    const submitResume = () => {
        let newData = formInputValues;
        newData.resume = file;
        apply(newData);
        nextStep();
    };

    return (
        <MultiFormWrapper>
            <Div fontSize="lg">Please upload your resume </Div>
            <Div width="80%" marT30 textAlign="center">
                <FlexBox
                    jcCenter
                    pad20
                    mar3
                    borderRadius
                    boxShadow="lightGrey"
                    bg="lightShade"
                >
                    <FlexBox jcSpaceBetween>
                        <input
                            accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                            type="file"
                            id="myFile"
                            onChange={handleFileUpload}
                        />
                    </FlexBox>
                </FlexBox>
                <br /> <br />
                {enableSubmit && (
                    <CustomButton width="200px" marAuto onClick={submitResume}>
                        Submit
                    </CustomButton>
                )}
            </Div>
        </MultiFormWrapper>
    );
};

const mapStateToProps = state => {
    return {
        formInputValues: state.list.formInputValues
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        apply: data => dispatch(applyForJob(data))
    })
)(FormResumeUpload);

FormResumeUpload.propTypes = {
    nextStep: PropTypes.func,
    formInputValues: PropTypes.object,
    apply: PropTypes.func
};
