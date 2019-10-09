/**
 * React Imports
 */
import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Styled Component Imports
 */
import {
    CarouselWrapper,
    CarouselContainer,
    CarouselItem,
    CarouselFooter,
    Prev,
    Next
} from "../../styledComponents/carousel";
import { Div, Anchor, FlexBox } from "../../styledComponents/layout";
import { CustomButton } from "../../styledComponents/button";

/**
 * FontAwesome Imports for icons support
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";

/**
 * @function Carousel - Functional Component
 * @param {list} Array - It holds the array of iteratable objects
 * @returns {component}
 * Note: This is a resuable component and can be used to get a carousel/slider effect
 */

const Carousel = ({ list }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [clientX, setClientX] = useState();
    const [clientY, setClientY] = useState();
    const [leftVal, setLeftVal] = useState(0);
    const [imageWidth] = useState(200);
    const [userSwipeDirection, setUserSwipeDirection] = useState("");

    /**
     * Note: slideNext function will check for the slide index and length of the list to calculate its current position.
     * Accordingly sets the state of index and slide direction
     */
    const slideNext = () => {
        if (slideIndex != list.length - 1 && slideIndex < list.length - 1) {
            let slideTo = (slideIndex + 1) * -230;
            setLeftVal(slideTo);
            setSlideIndex(slideIndex + 1);
        }
    };

    /**
     * Note: slidePrev function will check for the slide index if the length is 0 or greater than 0.
     * Accordingly sets the state of index, direction and decides the view
     */
    const slidePrev = () => {
        if (slideIndex != 0 && slideIndex > 0) {
            let slideTo = leftVal + 230;
            setLeftVal(slideTo);
            setSlideIndex(slideIndex - 1);
        }
    };

    /**
     * Note: Following code enables touch options on mobile device
     * We make use of 3 Javascript built in functions
     * onTouchStart and onTouchEnd - to get the client x and y references
     * onTouchMove - to calculate the current index and swipe direction and decides the view
     */
    //For Touch scroll to enable we need to watch on 3 functions onTouchStart, onTouchMove, onTouchEnd
    const onTouchStart = e => {
        setClientX(e.touches[0].clientX);
        setClientY(e.touches[0].clientY);
    };

    const onTouchEnd = () => {
        let left = leftVal;
        let index = slideIndex;
        let swipeDirection = userSwipeDirection;

        if (swipeDirection == "left") {
            left = Math.round((leftVal - 230) / imageWidth) * (imageWidth + 30);
            index = left < leftVal ? ++index : index;
        }
        if (swipeDirection == "right") {
            left = Math.round((leftVal + 230) / imageWidth) * (imageWidth + 30);
            index = left > leftVal ? --index : index;
        }
        if (index >= list.length || index < 0) return;
        setLeftVal(left);
        setSlideIndex(index);
    };

    const onTouchMove = e => {
        let maxWidth = -(imageWidth + 30) * (list.length - 1);
        let deltaX = e.touches[0].clientX - clientX;
        let deltaY = e.touches[0].clientY - clientY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            let left = leftVal + deltaX;
            left = maxWidth < left ? left : maxWidth;
            left = 0 > left ? left : 0;
            setClientX(e.touches[0].clientX);
            setClientY(e.touches[0].clientY);
            setLeftVal(left);
            setUserSwipeDirection(deltaX < 0 ? "left" : "right");
        }
    };

    return (
        <CarouselWrapper>
            {list.length > 1 && (
                <CarouselFooter>
                    <Prev
                        style={{ opacity: slideIndex == 0 ? "0.1" : "1" }}
                        onClick={slidePrev}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Prev>

                    <Next
                        style={{
                            opacity:
                                slideIndex === list.length - 1 ? "0.1" : "1"
                        }}
                        onClick={slideNext}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Next>
                </CarouselFooter>
            )}

            <CarouselContainer
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{
                    transform: `translate3d(${leftVal}px,0,0)`,
                    transition: "transform 0.2s linear"
                }}
            >
                {list.map((item, i) => (
                    <CarouselItem
                        key={i}
                        style={{
                            width: `${imageWidth}px`
                        }}
                    >
                        <Div fontSize="xs">{item.title}</Div>
                        <Div fontSize="xxs" color="brandPrimary">
                            {item.company}
                        </Div>
                        <Div fontSize="xxs">{item.location}</Div>

                        <FlexBox jcEnd>
                            <Anchor
                                to={{
                                    pathname: `/details/${item.id}`,
                                    query: { props: item }
                                }}
                                textDecoration="none"
                                color="black"
                            >
                                <CustomButton>Apply</CustomButton>
                            </Anchor>
                        </FlexBox>
                    </CarouselItem>
                ))}
            </CarouselContainer>
        </CarouselWrapper>
    );
};

export default Carousel;

Carousel.propTypes = {
    list: PropTypes.array
};
