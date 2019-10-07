import styled from "styled-components";

const GridRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
`;

const GridItem = styled.div`
    flex-basis: 30%;
    -ms-flex: auto;
    position: relative;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
    box-shadow: 0 0 2px #122;
    margin: 10px;

    @media (max-width: 1073px) {
        flex-basis: 25%;
    }
    @media (max-width: 815px) {
        flex-basis: 50%;
    }
    @media (max-width: 555px) {
        flex-basis: 100%;
        width: 100%;
    }
`;

export { GridRow, GridItem };
