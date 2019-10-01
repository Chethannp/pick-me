import React from "react";
import { FlexBox, Div } from "../../styledComponents/layout";
import SearchFromComp from "../Search/searchFormComp";
import DeckComp from "../Deck/deckComp";

const MainComp = () => {
  return (
    <FlexBox width="70%" marL30 marR30 flowCol alignCenter>
      <Div
        width="100%"
        bg="white"
        borderRadius
        borderStyle="lightGrey"
        marB30
        padT15
        textAlign="center"
        style={{
          position: "sticky",
          top: "55px",
          left: "0",
          right: "0",
          backgroundColor: "#f5f5f5",
          boxShadow: "0 1px 3px 0 rgba(208,208,208,1.00)"
        }}
      >
        Your dream job’s just a search away…
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
