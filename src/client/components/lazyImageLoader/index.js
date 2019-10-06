import React, { useState } from "react";
import PropTypes from "prop-types";
import InlineLoaderComp from "../InlineLoader";
import { Div, ImageBlock, CenterBlock } from "../../styledComponents/layout";

const LazyImageLoader = ({
    url = "",
    fallbackUrl,
    width = "50px",
    height = "50px"
}) => {
    const [loadedState, setLoadedState] = useState({
        loaded: false,
        error: false
    });

    const onImageLoaded = () => {
        setLoadedState({ ...loadedState, loaded: true });
    };

    const onImageError = () => {
        setLoadedState({ ...loadedState, error: true });
    };

    const { loaded, error } = loadedState;

    //
    let imgSrc = !error ? url : fallbackUrl;

    return (
        <Div
            bg="opacity"
            posRel
            borderRadius
            mar5
            width={width}
            height={height}
        >
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
