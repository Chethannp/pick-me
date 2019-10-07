import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Div, FlexBox, Anchor } from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";
import StarRating from "../../components/star/rating";
import { Paragraph } from "../../styledComponents/card";
import { GridRow, GridItem } from "../../styledComponents/grid";

const SavedJobs = ({ userSavedList = [] }) => {
    useEffect(() => {
        return () => {};
    }, []);

    return (
        <Div marT20>
            <Container>
                {userSavedList.length > 0 ? (
                    <GridRow>
                        {userSavedList.map((item, i) => (
                            <GridItem key={i} grow="30%">
                                <Div fontsize="lg">{item.title}</Div>
                                <Div fontSize="xxs">{item.location}</Div>
                                <Paragraph>{item.description}</Paragraph>
                                <FlexBox jcSpaceBetween alignCenter marT30>
                                    <StarRating
                                        id={`randomId${item.title}`}
                                        ratingCount={item.rating}
                                    />
                                    <Anchor
                                        to={`/details/${item.id}`}
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

                        <Div fontSize="sm" marB40>
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
