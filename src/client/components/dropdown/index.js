import React, { useState } from "react";
import {
  DropdownHeading,
  DropdownMenu,
  List,
  DropdownContainer
} from "../../styledComponents/dropdown";
import { Div } from "../../styledComponents/layout";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = props => {
  const [status, setStatus] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Content 1");
  const showDropdownMenu = () => {
    setStatus(!status);
  };
  const handleFilterSelection = filter => {
    setSelectedFilter(filter);
  };

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
            <List onClick={() => handleFilterSelection("Content 1")}>
              Content1
            </List>
            <List onClick={() => handleFilterSelection("Content 2")}>
              Content2
            </List>
            <List onClick={() => handleFilterSelection("Content 3")}>
              Content3
            </List>
          </Div>
        )}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
