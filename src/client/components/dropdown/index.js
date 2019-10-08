import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    DropdownHeading,
    DropdownMenu,
    List,
    DropdownContainer
} from "../../styledComponents/dropdown";
import { Div } from "../../styledComponents/layout";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({ options, query }) => {
    const [status, setStatus] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All");
    const showDropdownMenu = () => {
        setStatus(!status);
    };
    const handleFilterSelection = filter => {
        setSelectedFilter(filter);
    };

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
