import styled from "styled-components";
import { Div } from "./layout";

const CardHeader = styled(Div)`
  margin: 10px 20px;
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-top: 4px solid ${props => props.theme.colors.brandPrimary};
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 4px 0 ${props => props.theme.colors.lightGrey};
  }

  @media screen and (max-width: 991px) {
    width: 90%;
    margin: 10px auto 20px;
  }
 
`;

const Paragraph = styled(Div)`
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  background: -webkit-linear-gradient(#333, #eee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgb(0, 0, 0, 0.2);
  overflow: hidden;
`;

export { CardHeader, Paragraph };
