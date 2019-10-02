import React, { useState } from "react";
import styled from "styled-components";

// get our fontawesome imports
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexBox, Div } from "../../styledComponents/layout";

const Dropdown = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  cursor: pointer;
`;

const DropdownHeading = styled(FlexBox)`
  min-width: 80px;
  height: 26px;
  padding: 2px 20px;
  border: 1px solid #dfdfdf;
  color: #c5477f;
  font-size: 0.9rem;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  left: 1px;
  top: 100%;
  width: 200px;
  background: #fff;
  list-style-type: none;
  border-radius: 3px;
  border-top-left-radius: 0px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

const List = styled.li`
  cursor: pointer;
  padding: 4px 8px;
  border-bottom: 1px solid #dfdfdf;
`;
const SelectableDropDownComp = () => {
  const [status, setStatus] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Content 1");

  const showDropdownMenu = () => {
    setStatus(!status);
  };
  const handleFilterSelection = filter => {
    setSelectedFilter(filter);
  };

  return (
    <Dropdown onClick={showDropdownMenu}>
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
    </Dropdown>
  );
};

export default SelectableDropDownComp;
