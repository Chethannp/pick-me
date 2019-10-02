import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../styledComponents/layout";
import { CustomButton, Button } from "../../styledComponents/button";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SelectableDropDownComp from "../SelectableDropdown/selectableDropDownComp";

const SearchForm = styled(FlexBox)`
  margin: 0 auto;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #e9e9e9;
  border-right: none;
  border-left: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.5em 0.75em;
  font-size: 0.9rem;
  text-decoration: none;
  line-height: normal;
  max-height: 36px;
  width: 100%;
  &:hover,
  &:focus {
    outline: none;
  }
`;

const SearchFromComp = () => {
  return (
    <SearchForm pad10 bg="lightShade" borderRadius>
      <SelectableDropDownComp />
      <SearchInput type="search" name="search" placeholder="Search..." />
      <CustomButton type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </CustomButton>
    </SearchForm>
  );
};

export default SearchFromComp;
