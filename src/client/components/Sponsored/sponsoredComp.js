import React from "react";
import { FlexBox, Div } from "../../styledComponents/layout";
import CarouselComp from "../Carousel/carouselComp";
import styled from "styled-components";

const SponsoredDeck = styled(FlexBox)`
  border: 1px solid rgba(208, 208, 208, 0.3);
  border-radius: 3px;
  position: sticky;
  top: 55px;
`;

const SponsoredComp = () => {
  return (
    <SponsoredDeck bg="lightShade" width="380px" mar10 flowCol alignCenter>
      <Div width="100%" color="brandSecondary">
        <CarouselComp />
      </Div>
    </SponsoredDeck>
  );
};

export default SponsoredComp;
