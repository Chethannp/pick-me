import React from "react";
import styled from "styled-components";

const Dropdown = styled.div`
  position: absolute;
  ${props => (props.right ? "right: 1px;" : "left: 1px;")}
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

const DropdownComp = () => {
  return (
    <Dropdown>
      <List>1</List>
      <List>2</List>
      <List>3</List>
    </Dropdown>
  );
};

export default DropdownComp;
