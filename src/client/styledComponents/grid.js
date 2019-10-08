import styled from "styled-components";

const GridBanner = styled.div`
    width: 100%;
    height: 100px;
    background: ${props => props.theme.colors[props.bg]};
    padding: 20px;
`;

const GridContainer = styled.div`
    width: 1200px;
    margin: 0 auto;
    @media only screen and (max-width: 1199px) {
        width: 95%;
    }
`;

const GridRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
`;

const GridItem = styled.div`
    flex-basis: ${props => props.grow};
    -ms-flex: auto;
    position: relative;
    box-sizing: border-box;
    margin: 10px;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0 1px 3px 0 rgba(255, 250, 240, 1);
    border: 1px solid #dfdfdf;
    @media (max-width: 1073px) {
        flex-basis: 25%;
    }
    @media (max-width: 815px) {
        flex-basis: 45%;
    }
    @media (max-width: 555px) {
        flex-basis: 100%;
        width: 100%;
    }
`;

//Helper methods to extract the values
function getWidthString(span) {
    if (!span) return;

    let width = (span / 12) * 100;
    return `width: ${width}%`;
}

const Row = styled.div`
    &::after {
        content: "";
        clear: both;
        display: table;
    }
`;

const Column = styled.div`
    float: left;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

    @media screen and (min-width: 768px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }

    @media screen and (min-width: 992px) {
        ${({ md }) => md && getWidthString(md)};
    }

    @media screen and (min-width: 1200px) {
        ${({ lg }) => lg && getWidthString(lg)};
    }
`;

export { Row, Column, GridRow, GridItem, GridBanner, GridContainer };
