import styled from "styled-components";

const SearchForm = styled.form`
    top: 1px;
    position: sticky;
    z-index: 99;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${props => props.theme.colors.lightShade};
    padding: 10px;
    box-shadow: 0 1px 3px 0 ${props => props.theme.colors.lightGrey};

    @media screen and (max-width: 768px) {
        top: 56px;
    }
`;

const SearchInput = styled.input`
    box-sizing: border-box;
    border: 1px solid #e9e9e9;
    border-right: none;
    border-left: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0.5em 0.75em;
    font-size: ${props => props.theme.fontSize.xxs};
    text-decoration: none;
    line-height: normal;
    max-height: 36px;
    width: 100%;
    &:hover,
    &:focus {
        outline: none;
    }
`;

export { SearchForm, SearchInput };
