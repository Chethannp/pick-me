import React from "react";
import PropTypes from "prop-types";
import { MultiFormWrapper } from "../../styledComponents/forms";
import { Div, Anchor } from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";

const Success = ({ company }) => {
    return (
        <MultiFormWrapper>
            <Div
                textAlign="center"
                bg="lightShade"
                boxShadow="lightGrey"
                borderRadius
                padT20
                padB20
                padL10
                padR10
            >
                <Div marT20 marB20 fontSize="md">
                    Application has been successfully submitted to <br />
                </Div>
                <Div marT20 fontSize="md">
                    {company}
                </Div>
                <Div fontSize="xxs" marT10>
                    They We will go through your profile and let you know as
                    early as possible.
                </Div>
                <Div fontSize="xxs" marT10>
                    In the meanwhile if you have any concerns or doubts, <br />
                    please do email us at{" "}
                    <a href="mailto:pick-me@info.com">pick-me@info.com</a>
                </Div>
                <br />
                <br />
                <Anchor to={"/"} textDecoration="none" color="black">
                    <CustomButton>Explore Other Jobs</CustomButton>
                </Anchor>
            </Div>
        </MultiFormWrapper>
    );
};

export default Success;

Success.propTypes = {
    company: PropTypes.string
};
