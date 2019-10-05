import styled from "styled-components";

const size = {
  min: 0,
  sm: 576,
  md: 767,
  lg: 992,
  xl: 1200
};

export const DisplayDecisionMaker = styled.div`
  ${props =>
    `@media screen and 
      (min-width: ${size[props.minWidth]}px) 
      ${props.maxWidth ? `and (max-width: ${size[props.maxWidth]}px)` : ""}
    {
      display:none;
    }`}
`;
