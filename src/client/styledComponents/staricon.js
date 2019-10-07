import React from "react";
import styled from "styled-components";

const S = {};

S.svg = styled.svg`
    flex-shrink: 0;
    margin-right: 5px;
`;

function StarIcon() {
    return (
        <S.svg
            viewBox="0 0 1000 1000"
            width="1rem"
            height="1rem"
            aria-hidden="true"
        >
            <path
                fill="currentColor"
                d="M79.6,330.1l241-36.6L430.8,60.6C438.5,44.4,458,9.4,488.6,10c30.7,0.6,49.6,33.7,57.8,50.6l110.1,232.9  l241,36.6c22.5,3.5,49.3,11.6,63.3,34c21.6,34.7-13.3,72.5-23.8,83.1L760.4,627l42.3,257.1c0.7,2.8,11.1,57-22,76.8  c-27.7,16.6-66.6-3.9-75-8.8L488.6,833l-217,119.1c-9.1,4.9-49.9,26.7-77.1,7.6c-30.3-21.2-20.6-69.9-19.9-75.6L216.9,627  L40.2,447.2c-20.4-20.1-27.9-39.7-29.6-51.7C9,384.1,6.6,342.4,79.6,330.1z"
            />
        </S.svg>
    );
}

export default StarIcon;
