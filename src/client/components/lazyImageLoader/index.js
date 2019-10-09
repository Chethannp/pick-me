/**
 * React Imports
 */
import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Styled Component Imports
 */
import { Div, ImageBlock, CenterBlock } from "../../styledComponents/layout";

/**
 * Reusable functional components
 */
import InlineLoaderComp from "../InlineLoader";

/**
 * @function LazyImageLoader - Functional Component
 * @param {url} string - holds the image url, by default the value is empty string
 * @param {fallbackUrl} string - holds the fallback image url, if the component fails to render the image
 * @param {width} string - css property which decides the dimension, wanted this component to be reused hence keeping the dimensions variable
 * @param {height} string - css property which decides the dimension, wanted this component to be reused hence keeping the dimensions variable
 * @returns {component} - which present the image holder view
 */
const LazyImageLoader = ({
    url = "",
    fallbackUrl,
    width = "50px",
    height = "50px"
}) => {
    //State that decides to show the inline loader component until the image is loaded or errored out.
    const [loadedState, setLoadedState] = useState({
        loaded: false,
        error: false
    });

    //Triggers when Javascript built-in function onLoad gets invoked
    const onImageLoaded = () => {
        setLoadedState({ ...loadedState, loaded: true });
    };

    //Triggers when Javascript built-in function onError gets invoked
    const onImageError = () => {
        setLoadedState({ ...loadedState, error: true });
    };

    const { loaded, error } = loadedState;

    //The variable which is finally used to display the image
    let imgSrc = !error ? url : fallbackUrl;

    return (
        <Div bg="opacity" posRel borderRadius width={width} height={height}>
            <ImageBlock
                src={imgSrc}
                onLoad={onImageLoaded}
                onError={onImageError}
                width="100%"
                height="100%"
            />
            {!loaded && (
                <CenterBlock>
                    <InlineLoaderComp />
                </CenterBlock>
            )}
        </Div>
    );
};

export default LazyImageLoader;

LazyImageLoader.propTypes = {
    url: PropTypes.string,
    fallbackUrl: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};
