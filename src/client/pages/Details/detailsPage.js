import React, { useState, useEffect } from "react";
import {
  Div,
  Anchor,
  Breadcrumb,
  Container
} from "../../styledComponents/layout";
import { connect } from "react-redux";
import PostDetails from "../../components/postDetails";

const DetailsPage = props => {
  return (
    <Div mar20>
      <Container>
        <Breadcrumb>
          <Anchor to="/" color="brandSecondary">
            Home
          </Anchor>{" "}
          ~> Job Details Page
        </Breadcrumb>
      </Container>

      <PostDetails {...props} />
    </Div>
  );
};

const mapStateToProps = state => {
  return {
    jobList: state.list.JobList
  };
};

export default connect(mapStateToProps)(DetailsPage);
