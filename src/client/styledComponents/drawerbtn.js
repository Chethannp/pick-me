import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  box-sizing: border-box;
  height: 18px;
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
  }
`;

const Line = styled.div`
  width: 23px;
  height: 1px;
  background-color: ${props => props.theme.colors[props.bg]};
`;

const DrawerToggleButton = props => {
  return (
    <Button onClick={props.click}>
      <Line bg="brandPrimary" />
      <Line bg="brandPrimary" />
      <Line bg="brandPrimary" />
    </Button>
  );
};

export default DrawerToggleButton;
