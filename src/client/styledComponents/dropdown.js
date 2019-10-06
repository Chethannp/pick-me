import styled from "styled-components";
import { FlexBox } from "./layout";

const DropdownContainer = styled.ul`
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
    font-size: ${props => props.theme.fontSize.xxs};
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
    font-size: ${props => props.theme.fontSize.xxs};
`;

export { DropdownContainer, DropdownHeading, DropdownMenu, List };
