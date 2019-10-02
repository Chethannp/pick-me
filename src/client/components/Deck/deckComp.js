import React, { useState } from "react";
import {
  Div,
  FlexBox,
  ImageBlock,
  Anchor
} from "../../styledComponents/layout";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../styledComponents/button";

import CompanyLogo from "../../assets/company-placeholder.png";
import InlineLoaderComp from "../InlineLoader/inlineLoaderComp";

const JobDeck = styled(Div)`
  border: 1px solid rgba(208, 208, 208, 0.3);
  &:hover {
    box-shadow: 0 1px 3px 0 rgba(208, 208, 208, 1);
  }
`;

const DeckComp = () => {
  const [saveJobStatus, setSaveJobStatus] = useState(false);
  const [showInlineLoader, setShowInlineLoader] = useState(false);
  const saveJob = () => {
    setShowInlineLoader(true);
    setTimeout(() => {
      setSaveJobStatus(true);
      setShowInlineLoader(false);
    }, 2000);
  };

  const removedSavedJob = () => {
    setShowInlineLoader(true);
    setTimeout(() => {
      setSaveJobStatus(false);
      setShowInlineLoader(false);
    }, 2000);
  };

  const Paragraph = styled.p`
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    background: -webkit-linear-gradient(#333, #eee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgb(0, 0, 0, 0.2);

    overflow: hidden;
  `;

  return (
    <JobDeck marB25 pad15 borderRadius>
      <FlexBox jcSpaceBetween alignStart>
        <Div>
          <Div fontWeight="bold" fontsize="lg">
            Senior Software- Developer (m/w/d)
          </Div>
          <Div fontSize="xxs">Posted 3 weeks ago</Div>
        </Div>
        <Button noborder xs>
          <Div posRel>
            {!showInlineLoader &&
              (saveJobStatus ? (
                <FlexBox
                  width="60px"
                  height="45px"
                  jcSpaceBetween
                  alignCenter
                  xxs
                  onClick={removedSavedJob}
                >
                  <FontAwesomeIcon
                    icon={faCheckSquare}
                    color="rgba(197,71,127,1.00)"
                  />
                  <span> saved</span>
                </FlexBox>
              ) : (
                <FlexBox
                  width="55px"
                  height="45px"
                  jcSpaceBetween
                  alignCenter
                  xxs
                  onClick={saveJob}
                >
                  <FontAwesomeIcon icon={faClock} color="#dfdfdf" />
                  <span> save</span>
                </FlexBox>
              ))}

            {showInlineLoader && (
              <InlineLoaderComp width="80px" height="80px" />
            )}
          </Div>
        </Button>
      </FlexBox>
      <Anchor to="/" textDecoration="none" color="black">
        <Div fontSize="xs">E.Stradis GmbH Company Location Augsburg, DE</Div>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </Anchor>
    </JobDeck>
  );
};

export default DeckComp;
