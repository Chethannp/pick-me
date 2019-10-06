import React from "react";
import { SearchForm, SearchInput } from "../../styledComponents/search";
import Dropdown from "../dropdown";
import { CustomButton } from "../../styledComponents/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ search }) => {
    const handleSearchSubmit = e => {
        e.preventDefault();
    };

    return (
        <SearchForm onSubmit={handleSearchSubmit}>
            <Dropdown />
            <SearchInput
                autoComplete="off"
                type="text"
                name="search"
                placeholder="Search..."
                defaultValue=""
                onChange={e => search(e)}
            />
            <CustomButton>
                <FontAwesomeIcon icon={faSearch} />
            </CustomButton>
        </SearchForm>
    );
};

export default Search;
