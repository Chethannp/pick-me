import React from "react";
import {
  QuickViewWrapper,
  QuickViewHeading,
  QuickViewContent,
  QuickViewDiv
} from "../../styledComponents/quickview";
import Carousel from "../carousel";

const QuickView = () => {
  return (
    <QuickViewWrapper>
      <QuickViewDiv>
        <QuickViewHeading>Heading</QuickViewHeading>
        <QuickViewContent>
          <Carousel />
        </QuickViewContent>
      </QuickViewDiv>
    </QuickViewWrapper>
  );
};

export default QuickView;
