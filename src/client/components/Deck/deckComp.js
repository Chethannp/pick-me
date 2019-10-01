import React from "react";
import {
  Div,
  FlexBox,
  ImageBlock,
  Anchor
} from "../../styledComponents/layout";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../styledComponents/button";

import CompanyLogo from "../../assets/company-placeholder.png";

const JobDeck = styled(Anchor)`
  display: block;
  margin: 0 0 10px 0;
  width: 90%;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: #000;
  border: 1px solid rgba(208, 208, 208, 1);
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(208, 208, 208, 1);
  }
`;

const DeckComp = () => {
  return (
    <JobDeck to="/">
      <Div padT5 padB5 padL10 padR10>
        <FlexBox jcSpaceBetween alignCenter>
          <FlexBox jcStart alignCenter fontWeight="bold" fontSize="sm">
            <Div
              width="50px"
              height="50px"
              borderRadius
              borderStyle="lightGrey"
              marR5
            >
              <ImageBlock src={CompanyLogo} alt="" width="100%" height="100%" />
            </Div>
            Company Name
          </FlexBox>
          <Button noborder xs>
            <FontAwesomeIcon icon={faEllipsisH} size="sm" />
          </Button>
        </FlexBox>
        <Div marT10>
          <Div fontSize="sm">Senior Software- Developer (m/w/d)</Div>
          <Div fontSize="xs">E.Stradis GmbH Company Location Augsburg, DE</Div>
          <Div fontSize="xxs">Posted 3 weeks ago</Div>
        </Div>
      </Div>
    </JobDeck>
  );
};

export default DeckComp;
