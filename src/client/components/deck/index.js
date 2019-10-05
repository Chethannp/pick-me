import React, { useState } from "react";
import { Div, FlexBox, Anchor } from "../../styledComponents/layout";
import { CardHeader, Paragraph } from "../../styledComponents/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import InlineLoaderComp from "../InlineLoader";

const Deck = ({
  title,
  company,
  company_info,
  description,
  employment_type,
  skills,
  location
}) => {
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
  return (
    <CardHeader pad10>
      <FlexBox jcSpaceBetween>
        <Div width="100%">
          <Div fontWeight="bold" fontsize="lg">
            Senior Software- Developer (m/w/d)
          </Div>
          <Div fontSize="xxs">Augsburg, DE</Div>
        </Div>
        <Div>
          {!showInlineLoader &&
            (saveJobStatus ? (
              <FlexBox
                width="50px"
                jcSpaceBetween
                alignCenter
                fontSize="xxs"
                onClick={removedSavedJob}
              >
                <FontAwesomeIcon
                  icon={faCheckSquare}
                  style={{ marginRight: 5 }}
                  color="rgba(197,71,127,1.00)"
                />
                <span> saved</span>
              </FlexBox>
            ) : (
              <FlexBox
                width="45px"
                jcEnd
                alignCenter
                fontSize="xxs"
                onClick={saveJob}
              >
                <FontAwesomeIcon
                  style={{ marginRight: 5 }}
                  icon={faClock}
                  color="#dfdfdf"
                />
                <span> save</span>
              </FlexBox>
            ))}

          {showInlineLoader && <InlineLoaderComp width="80px" height="80px" />}
        </Div>
      </FlexBox>
      <Anchor to="/details" textDecoration="none" color="black">
        <Paragraph>{description}</Paragraph>
      </Anchor>
      <Div marT10 fontSize="xxs">
        Posted 3 weeks ago
      </Div>
    </CardHeader>
  );
};

export default Deck;
