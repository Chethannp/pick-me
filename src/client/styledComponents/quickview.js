import styled from "styled-components";

const QuickViewWrapper = styled.div`
    margin-top: 10px;
    padding: 10px 20px;
    width: 320px;
    border: 1px solid ${props => props.theme.colors.whiteBg};
`;

const QuickViewDiv = styled.div`
    margin-bottom: 20px;
    position: relative;
`;

const QuickViewHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 5px;
    background-color: ${props => props.theme.colors.lightShade};

    font-size: ${props => props.theme.fontSize.xs};
    border-bottom: 1px solid ${props => props.theme.colors.whiteBg};
    &:before {
        content: "";
        left: -10px;
        top: -10px;
        position: absolute;
        width: 200px;
        height: 35px;
        background: rgb(197, 71, 127);
        transform: skewX(-30deg);
        transition: 1s;
    }
`;

const QuickViewContent = styled.div``;

export { QuickViewWrapper, QuickViewDiv, QuickViewHeading, QuickViewContent };
