import React from "react";
import { Container, Div } from "../../styledComponents/layout";
import UserForm from "../../components/multiPartForm";

const JobFormPage = props => {
    return (
        <Container>
            <Div mar20>
                <UserForm {...props} />
            </Div>
        </Container>
    );
};

export default JobFormPage;
