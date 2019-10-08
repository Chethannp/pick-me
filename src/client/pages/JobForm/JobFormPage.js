import React from "react";
import {
    Container,
    Div,
    Breadcrumb,
    Anchor
} from "../../styledComponents/layout";
import UserForm from "../../components/multiPartForm";

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
