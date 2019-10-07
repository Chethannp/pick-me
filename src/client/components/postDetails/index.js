import React from "react";
import PropTypes from "prop-types";
import {
    FlexBox,
    Div,
    Container,
    Anchor,
    DetailsWrapper,
    DetailsContent,
    DetailsProfileImage
} from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";
import Guest from "../../assets/company-placeholder.png";

const PostDetails = ({ details }) => {
    const {
        title,
        company,
        company_info,
        description,
        employment_type,
        experience_level,
        id,
        location,
        skills,
        time_of_post
    } = details;

    return (
        <FlexBox flowCol>
            <Div height="75px" width="100%" bg="lightShade" borderRadius />
            <Container>
                <DetailsWrapper alignCenter jcStart>
                    <Div width="20%" marAuto>
                        <DetailsProfileImage src={Guest} alt="" width="100" />
                    </Div>

                    <DetailsContent>
                        <Div
                            bg="white"
                            borderRadius
                            pad20
                            style={{ border: "1px solid rgba(208,208,208,.3)" }}
                        >
                            {title && (
                                <Div
                                    fontSize="md"
                                    marB10
                                    fontStyle="bold"
                                ></Div>
                            )}
                            {company && (
                                <Div fontSize="xs" marB20 color="brandPrimary">
                                    {company}
                                </Div>
                            )}

                            <Div fontSize="xs" marB20 color="mediumGrey">
                                {time_of_post && (
                                    <Div fontSize="xxs" padB5>
                                        Posted: {time_of_post}
                                    </Div>
                                )}

                                {skills.length > 0 && (
                                    <Div fontSize="xxs" padB5>
                                        Skills:
                                        {skills.map((item, i) => (
                                            <span key={i}>{item} | </span>
                                        ))}
                                    </Div>
                                )}
                                {employment_type && (
                                    <Div fontSize="xxs" padB5>
                                        Employment Type: {employment_type}
                                    </Div>
                                )}

                                {location && (
                                    <Div fontSize="xxs" padB5>
                                        Location: {location}
                                    </Div>
                                )}
                                {experience_level && (
                                    <Div fontSize="xxs" padB5>
                                        Experience: {experience_level}
                                    </Div>
                                )}
                            </Div>

                            {description && (
                                <Div marB20 fontSize="xs" color="mediumGrey">
                                    {description}
                                </Div>
                            )}

                            <Div marB20>
                                <Div marB10 color="darkGrey" fontWeight="bold">
                                    What we expect
                                </Div>
                                <Div fontSize="xxs" color="mediumGrey">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </Div>
                            </Div>

                            <Div marB20>
                                <Div marB10 color="darkGrey" fontWeight="bold">
                                    What we offer
                                </Div>
                                <Div fontSize="xxs" color="mediumGrey">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </Div>
                            </Div>

                            <FlexBox jcEnd>
                                <Anchor
                                    to="/apply"
                                    textDecoration="none"
                                    color="black"
                                >
                                    <CustomButton width="200px">
                                        Apply
                                    </CustomButton>
                                </Anchor>
                            </FlexBox>
                        </Div>
                    </DetailsContent>
                </DetailsWrapper>
            </Container>
        </FlexBox>
    );
};

export default PostDetails;

PostDetails.propTypes = {
    details: PropTypes.object
};
