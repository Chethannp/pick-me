import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    Container,
    Div,
    FlexBox,
    Anchor,
    Breadcrumb
} from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";
import StarRating from "../../components/star/rating";
import { Paragraph } from "../../styledComponents/card";
import { GridRow, GridItem } from "../../styledComponents/grid";

const SponsoredJobs = ({ sponsoredList = [] }) => {
    return (
        <Div marT20>
            <Container>
                <Breadcrumb>
                    <Anchor to="/" color="brandSecondary">
                        Home
                    </Anchor>{" "}
                    -/- Sponsored Jobs
                </Breadcrumb>

                {sponsoredList.length > 0 ? (
                    <GridRow>
                        {sponsoredList.map((item, i) => (
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
                            We are trying our best to get the right jobs for you
                            as soon as possible!
                        </Div>

                        <Div marB30 fontSize="xs">
                            Trying re-visiting this link sometimes later
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
        sponsoredList: state.list.sponsoredList
    };
};

export default connect(mapStateToProps)(SponsoredJobs);

SponsoredJobs.propTypes = {
    sponsoredList: PropTypes.array
};
