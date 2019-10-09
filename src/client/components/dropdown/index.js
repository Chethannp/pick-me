/**
 * React Imports
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * FontAwesome Imports for icons support
 */
import {
    DropdownHeading,
    DropdownMenu,
    List,
    DropdownContainer
} from "../../styledComponents/dropdown";
import { Div } from "../../styledComponents/layout";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @function Dropdown - Functional Component
 * @param {options} Object - holds the list of options to be shown as entries to dropdown
 * @param {query} Function - used to trigger a function in the parent component for filtering the main job list
 * @returns {component} - dropdown menu
 */
const Dropdown = ({ options, query }) => {
    //Initial state declaration
    const [status, setStatus] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All");

    const showDropdownMenu = () => {
        setStatus(!status);
    };

    const handleFilterSelection = filter => {
        setSelectedFilter(filter);
    };

    //Passes the selected filter option to the parent for filtering the job list.
    useEffect(() => {
        query(selectedFilter);
    }, [selectedFilter]);

    return (
        <DropdownContainer onClick={showDropdownMenu} role="navigation">
            <DropdownHeading alignCenter jcSpaceBetween>
                <Div>{selectedFilter}</Div>
                <Div>
                    <FontAwesomeIcon icon={faChevronDown} />
                </Div>
            </DropdownHeading>
            <DropdownMenu>
                {status && (
                    <Div>
                        {options.map(option => (
                            <List
                                key={option}
                                onClick={() => handleFilterSelection(option)}
                            >
                                {option}
                            </List>
                        ))}
                    </Div>
                )}
            </DropdownMenu>
        </DropdownContainer>
    );
};

export default Dropdown;

Dropdown.propTypes = {
    query: PropTypes.func,
    options: PropTypes.array
};
