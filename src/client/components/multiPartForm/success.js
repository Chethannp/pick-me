import React from "react";
import { MultiFormWrapper } from "../../styledComponents/forms";
import { Div } from "../../styledComponents/layout";

const Success = () => {
    return (
        <MultiFormWrapper>
            <Div textAlign="center">
                <Div marT20 marB20 fontSize="md">
                    Thank you for your interest in Hey Jobs!
                </Div>
                <Div fontSize="xs">
                    We will go through your profile and let you know as early as
                    possible.
                </Div>
                <Div fontSize="xs">
                    In the meanwhile if you have any concerns or doubts, please
                    do email us at info@info.com
                </Div>
            </Div>
        </MultiFormWrapper>
    );
};

export default Success;
