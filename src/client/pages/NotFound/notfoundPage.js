import React from "react";
import { Div, Anchor } from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";

const NotFoundPage = () => {
    return (
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
    );
};

export default NotFoundPage;
