import styled from "styled-components";

const QuickViewWrapper = styled.div`
  margin-top: 10px;
  padding: 20px;
  background-color: ${props => props.theme.colors.lightShade};
  width: 320px;
  border: 1px solid ${props => props.theme.colors.whiteBg};

  @media screen and (min-width: 991px) {
    position: sticky;
    top: 56px;
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 88%;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    border: 1px solid rgba(208, 208, 208, 0.3);
    margin: 0 auto;
    padding: 10px;
  }
`;

const QuickViewDiv = styled.div`
  margin-bottom: 20px;
`;

const QuickViewHeading = styled.div`
  margin-bottom: 10px;
  padding-bottom: 5px;
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: ${props => props.theme.fontWeight.bold};
  border-bottom: 1px solid ${props => props.theme.colors.whiteBg};
`;

const QuickViewContent = styled.div``;

export { QuickViewWrapper, QuickViewDiv, QuickViewHeading, QuickViewContent };
