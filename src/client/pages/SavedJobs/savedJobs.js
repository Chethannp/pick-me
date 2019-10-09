/**
 * React Imports
 */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Redux - Thunk Imports
 * To read state values
 */
import { connect } from "react-redux";

/**
 * Styled Component Imports
 */
import {
    Container,
    Div,
    FlexBox,
    Anchor,
    Breadcrumb
} from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";
import { Paragraph } from "../../styledComponents/card";
import { GridRow, GridItem } from "../../styledComponents/grid";

/**
 * @function SavedJobs
 * @param {userSavedList} array - Holds the list of user saved jobs
 * @return {component}
 */

const SavedJobs = ({ userSavedList = [] }) => {
    useEffect(() => {
        return () => {};
    }, []);

    return (
        <Div marT20>
            <Container>
                <Breadcrumb>
                    <Anchor to="/" color="brandSecondary">
                        Home
                    </Anchor>{" "}
                    -/- Saved Jobs
                </Breadcrumb>
            </Container>

            <Container>
                {userSavedList.length > 0 ? (
                    <GridRow>
                        {userSavedList.map((item, i) => (
                            <GridItem key={i} grow="30%">
                                <Div fontsize="lg">{item.title}</Div>
                                <Div fontSize="xxs">{item.location}</Div>
                                <Paragraph>{item.description}</Paragraph>
                                <FlexBox jcSpaceBetween alignCenter marT30>
                                    <Anchor
                                        to={{
                                            pathname: `/details/${item.id}`,
                                            query: { props: item }
                                        }}
                                        textDecoration="none"
                                        color="black"
                                    >
                                        <CustomButton>Apply</CustomButton>
                                    </Anchor>
                                </FlexBox>
                            </GridItem>
                        ))}
                    </GridRow>
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
                            Oops..! List is empty
                        </Div>

                        <Div fontSize="xs" marB40>
                            Looks like you have not saved any jobs.
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
        userSavedList: state.list.userSavedList
    };
};

export default connect(mapStateToProps)(SavedJobs);

SavedJobs.propTypes = {
    userSavedList: PropTypes.array
};
