import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = styled(FlexBox)`
  width: 90%;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #e9e9e9;
    border-right: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.4em 0.75em;
  font-size: 1.1em;
  text-decoration: none;
  line-height: normal;
  max-height: 2.8em;
  width: 100%;
  &:hover,
  &:focus {
    outline: none;
  }
`;

const SearchFromComp = () => {
  return (
    <SearchForm pad10>
      <SearchInput type="search" name="search" placeholder="Search..." />
      <CustomButton type="submit">
        <FontAwesomeIcon icon={faSearch} size="sm" />
      </CustomButton>
    </SearchForm>
  );
};

export default SearchFromComp;
