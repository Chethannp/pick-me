import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Div, FlexBox } from "../../styledComponents/layout";
import { MultiFormWrapper } from "../../styledComponents/forms";
import { CustomButton } from "../../styledComponents/button";
import { applyForJob } from "../../../redux-thunk/list/list.actions";

const FormResumeUpload = ({ nextStep, formInputValues = {}, apply }) => {
    const [file, setFile] = useState();
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleFileUpload = e => {
        e.preventDefault();
        let files = Array.from(e.target.files)[0];
        setFile(files);
        setEnableSubmit(true);
    };

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
