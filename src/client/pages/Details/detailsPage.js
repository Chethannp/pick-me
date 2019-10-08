import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Div,
    Anchor,
    Breadcrumb,
    Container
} from "../../styledComponents/layout";
import { connect } from "react-redux";
import PostDetails from "../../components/postDetails";
import { CustomButton } from "../../styledComponents/button";

const DetailsPage = ({ location, isLoggedIn }) => {
    const [postDetails] = useState(isLoggedIn ? location.query.props : "");

    return (
        <Div marT30>
            {isLoggedIn ? (
                <React.Fragment>
                    {postDetails ? (
                        <Div mar20>
                            <Container>
                                <Breadcrumb>
                                    <Anchor to="/" color="brandSecondary">
                                        Home
                                    </Anchor>{" "}
                                    -/- Job Details Page
                                </Breadcrumb>
                            </Container>

                            <PostDetails details={postDetails} />
                        </Div>
                    ) : (
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
                                Oops..! No posts found
                            </Div>

                            <Anchor
                                to={"/"}
                                textDecoration="none"
                                color="black"
                            >
                                <CustomButton>Go Back</CustomButton>
                            </Anchor>
                        </Div>
                    )}
                </React.Fragment>
            ) : (
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
                        Oops..!
                    </Div>

                    <Div fontSize="xs" marB40>
                        Looks like you have not logged In. You need to login in
                        order to access this page!
                    </Div>

                    <Anchor to={"/"} textDecoration="none" color="black">
                        <CustomButton>Go Back</CustomButton>
                    </Anchor>
                </Div>
            )}
        </Div>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.list.isLoggedIn
    };
};

export default connect(mapStateToProps)(DetailsPage);

DetailsPage.propTypes = {
    location: PropTypes.object,
    isLoggedIn: PropTypes.bool
};
