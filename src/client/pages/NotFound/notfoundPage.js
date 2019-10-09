/**
 * React Imports
 */
import React from "react";

/**
 * Styled Component Imports
 */
import {
    Div,
    Anchor,
    Breadcrumb,
    Container
} from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";

/**
 * @function NotFoundPage
 * @returns {component} - This view is shown when the user tries to access a route which is not present in our routes object
 */
const NotFoundPage = () => {
    return (
        <Container>
            <Div mar20>
                <Breadcrumb>
                    <Anchor to="/" color="brandSecondary">
                        Home
                    </Anchor>{" "}
                    -/- Not Found
                </Breadcrumb>
                <Div
                    bg="lightShade"
                    pad20
                    boxShadow="lightGrey"
                    borderRadius
                    marAuto
                    marT30
                    width="60%"
                    textAlign="center"
                >
                    <Div fontSize="md" marB20>
                        404
                    </Div>

                    <Div fontSize="xs" marB40>
                        Sorry, we could not find that page for you!
                    </Div>

                    <Anchor to={"/"} textDecoration="none" color="black">
                        <CustomButton>Go Back</CustomButton>
                    </Anchor>
                </Div>
            </Div>
        </Container>
    );
};

export default NotFoundPage;
