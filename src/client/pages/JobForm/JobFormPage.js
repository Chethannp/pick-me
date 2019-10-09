/**
 * React Imports
 */
import React from "react";

/**
 * Styled Component Imports
 */
import {
    Container,
    Div,
    Breadcrumb,
    Anchor
} from "../../styledComponents/layout";

/**
 * Custom Reusable Hooks
 */
import UserForm from "../../components/multiPartForm";

/**
 * @function JobFormPage
 * @param {props} object - Passing props so that it can passed down to UserForm children.
 * @returns {component} - Holds the job application details, which the user has to update
 * in order to apply for a job!
 */
const JobFormPage = props => {
    return (
        <Container>
            <Div mar20>
                <Breadcrumb>
                    <Anchor to="/" color="brandSecondary">
                        Home
                    </Anchor>{" "}
                    -/- Job Application
                </Breadcrumb>
                <UserForm {...props} />
            </Div>
        </Container>
    );
};

export default JobFormPage;
