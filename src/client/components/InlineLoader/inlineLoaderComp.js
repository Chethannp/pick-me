import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const InlineLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 45px;
  height: 45px;
  margin-left: -20%;
  margin-top: -15%;
  z-index: 5;
  div {
    transform-origin: 32px 32px;
    animation: ${spin} 1.2s linear infinite;

    &:after {
      content: " ";
      display: block;
      position: absolute;
      top: 20px;
      left: 30px;
      width: 1.5px;
      height: 8px;
      background: linear-gradient(
        45deg,
        rgba(227, 173, 48, 1),
        rgba(197, 71, 127, 1)
      );
    }
    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    &:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    &:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    &:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    &:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    &:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    &:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    &:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    &:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    &:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    &:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    &:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
  }
`;

const InlineLoaderComp = () => {
  return (
    <InlineLoader>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </InlineLoader>
  );
};

export default InlineLoaderComp;
