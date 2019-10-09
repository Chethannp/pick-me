/**
 * React Imports
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Styled Component Imports
 */
import { SearchForm, SearchInput } from "../../styledComponents/search";
import { CustomButton } from "../../styledComponents/button";

/**
 * FontAwesome Imports for icons support
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/**
 * Component Imports
 */
import Dropdown from "../dropdown";

/**
 * @function Search - Functional Component
 * @param {search} callback - Parent function to filter job list
 * @param {filters} array - Holds the dropdown filter options
 * @return {component}
 */
const Search = ({ search, filters }) => {
    const handleSearchSubmit = e => {
        e.preventDefault();
    };

    return (
        <SearchForm onSubmit={handleSearchSubmit}>
            <Dropdown options={filters} query={search} />
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

Search.propTypes = {
    search: PropTypes.func,
    filters: PropTypes.array
};
