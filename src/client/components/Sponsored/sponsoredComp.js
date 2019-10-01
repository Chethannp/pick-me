import React from "react";
import { FlexBox, Div } from "../../styledComponents/layout";
import CarouselComp from "../Carousel/carouselComp";
import styled from "styled-components";

const SponsoredDeck = styled(FlexBox)`
  position: sticky;
  top: 55px;
  background-color: #fffaf0;
`;

const SponsoredComp = () => {
  return (
    <SponsoredDeck width="380px" mar10 flowCol alignCenter>
      <Div
        width="100%"
        borderRadius
        borderStyle="lightGrey"
        color="brandSecondary"
      >
        <CarouselComp />
      </Div>
    </SponsoredDeck>
  );
};

export default SponsoredComp;
