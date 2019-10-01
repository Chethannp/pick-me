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

// Media Query
media: {
  query: (lower, upper) => {
    var queryString;
    if (lower != null && upper != null) {
      queryString = `@media screen and (min-width: ${lower}px) and (max-width: ${upper}px)`;
    } else if (lower != null) {
      queryString = `@media screen and (min-width: ${lower}px)`;
    } else if (upper != null) {
      queryString = `@media screen and (max-width: ${upper}px)`;
    } else {
      queryString = `@media screen and (min-width: 0px)`;
    }
    return queryString;
  };
}
