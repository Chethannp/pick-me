import styled from "styled-components";

const QuickViewWrapper = styled.div`
    margin-top: 10px;
    padding: 20px;
    background-color: ${props => props.theme.colors.lightShade};
    width: 320px;
    border: 1px solid ${props => props.theme.colors.whiteBg};
`;

const QuickViewDiv = styled.div`
    margin-bottom: 20px;
`;

const QuickViewHeading = styled.div`
    margin-bottom: 10px;
    padding-bottom: 5px;
    font-size: ${props => props.theme.fontSize.xs};
    border-bottom: 1px solid ${props => props.theme.colors.whiteBg};
`;

const QuickViewContent = styled.div``;

export { QuickViewWrapper, QuickViewDiv, QuickViewHeading, QuickViewContent };
