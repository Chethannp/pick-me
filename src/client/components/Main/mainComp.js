import React from "react";
import { FlexBox, Div } from "../../styledComponents/layout";
import SearchFromComp from "../Search/searchFormComp";
import DeckComp from "../Deck/deckComp";

const MainComp = () => {
  return (
    <FlexBox width="70%" marL30 marR30 flowCol alignCenter>
      <Div width="100%" marB30>
        <SearchFromComp />
      </Div>

      <DeckComp />
      <DeckComp />
      <DeckComp />
      <DeckComp />
      <DeckComp />
      <DeckComp />
      <DeckComp />
      <DeckComp />
      <DeckComp />
      <DeckComp />
      <DeckComp />
    </FlexBox>
  );
};

export default MainComp;
