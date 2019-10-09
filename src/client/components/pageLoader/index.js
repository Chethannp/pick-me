/**
 * React Imports
 */
import React from "react";

/**
 * Styled Component Imports
 */
import styled, { keyframes } from "styled-components";

/**
 * Note: These below styles are more specific to this component.
 *       Hence I decided to place it inline rather than
 *       creating a seperate file.
 */
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const PageLoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.6);
    display: block;
    z-index: 99999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;
const PageLoader = styled.div`
    animation: ${spin} 1.2s linear infinite;
    border: 3px solid #e3ad30;
    border-radius: 50%;
    border-top: 3px solid #fff;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 30%;
    left: 40%;
    z-index: 99999;
`;

/**
 * @function Loader - Functional Component
 * @returns {component} - Page loader shown to user during asynchronous operations
 */
const Loader = () => {
    return (
        <PageLoaderWrapper>
            <PageLoader />
        </PageLoaderWrapper>
    );
};

export default Loader;
