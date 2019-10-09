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
import { saveJobFromChanges } from "../../../redux-thunk/list/list.actions";

/**
 * Styled Component Imports
 */
import { Div, Anchor } from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";
import FormResumeUpload from "./formResumeUpload";

/**
 * Component Imports
 */
import FormUserDetails from "./formUserDetails";
import FormPersonalDetails from "./formPersonalDetails";
import Success from "./success";

/**
 * @function UserForm - Functional Component
 * @param {isLoggedIn} Boolean - Holds the login state of the user
 * @param {saveFormInputs} Object - Holds the key value pairs of users form input
 * @param {match} Object - Used to retrieve the companies name from the props, to display it on the success page
 * @returns {component} - This component is built to showcase multi step form input method
 */
const UserForm = ({ isLoggedIn = false, saveFormInputs, match }) => {
    const InitialState = {
        step: 1
    };

    const [company] = useState(match.params.id);
    const [formValues, setFormValues] = useState(InitialState);

    //Proceed to next step
    const nextStep = () => {
        setFormValues({ ...formValues, step: formValues.step + 1 });
    };

    //Handle fields change
    const handleStepChange = val => {
        saveFormInputs(val);
        nextStep();
    };

    if (!isLoggedIn)
        return (
            <Div
                bg="lightShade"
                pad20
                boxShadow="lightGrey"
                borderRadius
                marAuto
                width="60%"
                textAlign="center"
            >
                <Div fontSize="md" marB20>
                    404
                </Div>

                <Div fontSize="xs" marB40>
                    You are not authorised to access this page, Please navigate
                    back to homepage
                </Div>

                <Anchor to={"/"} textDecoration="none" color="black">
                    <CustomButton>Go Back</CustomButton>
                </Anchor>
            </Div>
        );

    //Decides which component to be rendered based on the step state
    switch (formValues.step) {
    case 1:
        return (
            <FormUserDetails
                handleStepChange={handleStepChange}
                {...formValues}
            />
        );
    case 2:
        return (
            <FormPersonalDetails
                handleStepChange={handleStepChange}
                {...formValues}
            />
        );
    case 3:
        return <FormResumeUpload nextStep={nextStep} {...formValues} />;
    case 4:
        return <Success company={company} />;
    default:
        return {};
    }
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.list.isLoggedIn
    };
};

export default connect(
    mapStateToProps,
    dispatch => ({
        saveFormInputs: data => dispatch(saveJobFromChanges(data))
    })
)(UserForm);

UserForm.propTypes = {
    isLoggedIn: PropTypes.bool,
    saveFormInputs: PropTypes.func,
    match: PropTypes.object
};
