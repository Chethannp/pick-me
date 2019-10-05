import React from "react";
import { SearchForm, SearchInput } from "../../styledComponents/search";
import Dropdown from "../dropdown";
import { CustomButton } from "../../styledComponents/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <SearchForm>
      <Dropdown />
      <SearchInput
        type="search"
        name="search"
        placeholder="Search..."
        defaultValue=""
      />
      <CustomButton type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </CustomButton>
    </SearchForm>
  );
};

export default Search;
