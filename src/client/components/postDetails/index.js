import React from "react";
import styled from "styled-components";
import {
  FlexBox,
  Div,
  ImageBlock,
  Container,
  Anchor
} from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";
import Guest from "../../assets/company-placeholder.png";

const ProfileImage = styled(ImageBlock)`
  border-radius: 10%;
  border: 2px solid #fff;
  box-shadow: inset 0 1.5px 3px 0 rgba(0, 0, 0, 0.15),
    0 1.5px 3px 0 rgba(0, 0, 0, 0.15);
  margin: -60px auto 20px;
  display: block;
`;

const DetailsWrapper = styled(FlexBox)`
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    flex-flow: wrap;
  }
`;

const DetailsContent = styled(Div)`
  margin-top: -20px;
  width: 80%;
  margin-right: 40px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;

const PostDetails = props => {
  return (
    <FlexBox flowCol>
      <Div height="125px" width="100%" bg="lightShade" borderRadius />
      <Container>
        <DetailsWrapper alignCenter jcStart>
          <Div width="20%" marAuto>
            <ProfileImage src={Guest} alt="" width="100" />
          </Div>

          <DetailsContent>
            <Div
              bg="white"
              borderRadius
              pad20
              style={{ border: "1px solid rgba(208,208,208,.3)" }}
            >
              <Div fontSize="md" marB10 fontStyle="bold">
                Senior Software Enginerr
              </Div>
              <Div fontSize="xs" marB20 color="brandPrimary">
                Hey Jobs
              </Div>

              <Div fontSize="xs" marB20 color="mediumGrey">
                <Div padB5>Posted: 24 days ago</Div>
                <Div padB5>Skills: HTML | CSS</Div>
                <Div padB5>Location: Berlin, Germany</Div>
                <Div padB5>Experience: Mid-Senior level</Div>
              </Div>

              <Div marB20 fontSize="xs" color="mediumGrey">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Div>

              <Div marB20>
                <Div marB10 color="darkGrey" fontWeight="bold">
                  What we expect
                </Div>
                <Div fontSize="xs" color="mediumGrey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Div>
              </Div>

              <Div marB20>
                <Div marB10 color="darkGrey" fontWeight="bold">
                  What we offer
                </Div>
                <Div fontSize="xs" color="mediumGrey">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Div>
              </Div>

              <FlexBox jcEnd>
                <Anchor to="/apply" textDecoration="none" color="black">
                  <CustomButton width="200px"> Apply</CustomButton>
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