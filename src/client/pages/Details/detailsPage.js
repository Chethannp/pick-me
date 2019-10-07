import React, { useEffect, useState } from "react";
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

const DetailsPage = props => {
    const [postDetails, setPostDetails] = useState();

    useEffect(() => {
        if (props.location.query.props) {
            setPostDetails(props.location.query.props);
        } else {
            history.push("/");
        }
    }, []);

    return (
        <Div marT20>
            <Container>
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

                        <Anchor to={"/"} textDecoration="none" color="black">
                            <CustomButton>Go Back</CustomButton>
                        </Anchor>
                    </Div>
                )}
            </Container>
        </Div>
    );
};

const mapStateToProps = state => {
    return {
        postList: state.list.postList
    };
};

export default connect(mapStateToProps)(DetailsPage);

DetailsPage.propTypes = {
    location: PropTypes.object,
    match: PropTypes.object,
    postList: PropTypes.array
};
