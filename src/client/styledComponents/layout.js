import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 1199px) {
    width: 95%;
  }
`;

export const addPaddingStyles = (a, props) => {
  let style =
    a.indexOf("pad") === 0 && props[a] && !isNaN(a.slice(3))
      ? `padding:${a.slice(3)}px;`
      : "";
  style +=
    a.indexOf("padT") === 0 && props[a] ? `padding-top:${a.slice(4)}px;` : "";
  style +=
    a.indexOf("padR") === 0 && props[a] ? `padding-right:${a.slice(4)}px;` : "";
  style +=
    a.indexOf("padB") === 0 && props[a]
      ? `padding-bottom:${a.slice(4)}px;`
      : "";
  style +=
    a.indexOf("padL") === 0 && props[a] ? `padding-left:${a.slice(4)}px;` : "";
  return style;
};

export const addMarginStyles = (a, props) => {
  let style =
    a.indexOf("mar") === 0 && props[a] && !isNaN(a.slice(3))
      ? `margin:${a.slice(3)}px;`
      : "";
  style +=
    a.indexOf("marT") === 0 && props[a] ? `margin-top:${a.slice(4)}px;` : "";
  style +=
    a.indexOf("marR") === 0 && props[a] ? `margin-right:${a.slice(4)}px;` : "";
  style +=
    a.indexOf("marB") === 0 && props[a] ? `margin-bottom:${a.slice(4)}px;` : "";
  style +=
    a.indexOf("marL") === 0 && props[a] ? `margin-left:${a.slice(4)}px;` : "";
  return style;
};

export const Div = styled.div`
  ${props => {
    let style = "";
    Object.keys(props).forEach(a => {
      style += addPaddingStyles(a, props);
      style += addMarginStyles(a, props);
    });

    /* Dimensions Properties */
    style += props["width"] ? `width:${props["width"]};` : "";
    style += props["height"] ? `height:${props["height"]};` : "";
    style += props["fade"] ? `animation: 0.4s ease-out${{ fade }};` : "";

    /* Text Properties */
    style += props["color"] ? `color: ${props.theme.colors[props.color]};` : "";
    style += props["fontSize"]
      ? `font-size: ${props.theme.fontSize[props.fontSize]};`
      : "";
    style += props["fontWeight"]
      ? `font-weight: ${props.theme.fontWeight[props.fontWeight]};`
      : "";
    style += props["textAlign"]
      ? `text-align: ${props.theme.textAlign[props.textAlign]};`
      : "";
    style += props["textCase"]
      ? `text-transform: ${props.theme.textTransform[props.textCase]};`
      : "";

    /* Position Properties */
    style += props["posAbs"] ? "position:absolute;" : "";
    style += props["posRel"] ? "position:relative;" : "";
    style += props["posFixed"] ? "position: fixed; top:0; left:0;" : "";
    style += props["posSticky"]
      ? "position: sticky; top:0; left:0;right:0;"
      : "";

    /* Background Properties */
    style += props["bg"]
      ? `background-color: ${props.theme.colors[props.bg]};`
      : "";

    style += props["boxShadow"]
      ? `box-shadow: 0 1px 3px 0 ${props.theme.colors[props.boxShadow]};`
      : "";

    style += props["borderStyle"]
      ? `border: 1px solid ${props.theme.colors[props.borderStyle]};`
      : "";

    style += props["borderRadius"]
      ? `border-radius: ${props.theme.baseRadius};`
      : "";

    /* Flex Properties */
    style += props["alignSelfStretch"]
      ? "align-self:stretch;"
      : props["alignSelfStart"]
      ? "align-self:flex-start;"
      : props["alignSelfEnd"]
      ? "align-self:flex-end;"
      : "";
    style += props["grow"] ? "flex-grow:1;" : "";
    style += props["flexReset"] ? "flex:0 0 auto;" : "";
    style += props["flexBasis"] ? `flex-basis:${props["flexBasis"]};` : "";
    style += props["zIndex"] ? `z-index: ${props.zIndex};` : 0;
    return style;
  }};
`;

export const FlexBox = styled(Div)`
  display: flex;
  flex-grow: ${props => {
    if (props.flexGrow) return `${props.flexGrow}`;
    return 1;
  }};
  align-items: ${props => {
    if (props.alignStart) return "flex-start";
    if (props.alignStretch) return "stretch";
    if (props.alignCenter) return "center";
    return "flex-start";
  }};
  justify-content: ${props => {
    if (props.jcEnd) return "flex-end";
    if (props.jcStart) return "flex-start";
    if (props.jcSpaceBetween) return "space-between";
    if (props.jcSpaceAround) return "space-around";
    return "center";
  }};
  flex-flow: ${props => {
    if (props.flowWrap) return "wrap";
    if (props.flowCol) return "column";
    return "";
  }};
`;

export const ImageBlock = styled.img`
  ${props => {
    let style = "";
    style += props["width"] ? `width: ${props.width};` : "";
    style += props["height"] ? `height: ${props.height};` : "";
    return style;
  }}
`;

export const Anchor = styled(Link)`
  ${props => {
    let style = "";
    style += props["color"] ? `color: ${props.theme.colors[props.color]};` : "";
    style += props["textCase"]
      ? `text-transform: ${props.theme.textTransform[props.textCase]};`
      : "";
    style += props["textDecoration"]
      ? `text-decoration: ${props.theme.textDecoration[props.textDecoration]};`
      : "";
    return style;
  }}
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
  }
`;

export const Backdrop = styled(FlexBox)`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  left: 0;
  ${props => (props.zIndexValue ? `z-index:${props.zIndexValue};` : "")};
`;
