import React, { useState } from "react";
import {
    CarouselWrapper,
    CarouselContainer,
    CarouselItem,
    CarouselFooter,
    Prev,
    Next
} from "../../styledComponents/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [clientX, setClientX] = useState();
    const [clientY, setClientY] = useState();
    const [leftVal, setLeftVal] = useState(0);
    const [imageWidth] = useState(200);
    const [swipeDirection, setSwipeDirection] = useState();

    const slideNext = () => {
        if (slideIndex != 2 && slideIndex < 2) {
            let slideTo = (slideIndex + 1) * -250;
            setLeftVal(slideTo);
            setSlideIndex(slideIndex + 1);
        }
    };

    const slidePrev = () => {
        if (slideIndex != 0 && slideIndex > 0) {
            let slideTo = leftVal + 250;
            setLeftVal(slideTo);
            setSlideIndex(slideIndex - 1);
        }
    };

    //For Touch scroll to enable we need to watch on 3 functions onTouchStart, onTouchMove, onTouchEnd
    const onTouchStart = e => {
        setClientX(e.touches[0].clientX);
        setClientY(e.touches[0].clientY);
    };

    const onTouchEnd = () => {
        let left = leftVal;
        let index = slideIndex;
        let swipeDirection = swipeDirection;
        if (swipeDirection == "left") {
            left = Math.round((leftVal - 250) / imageWidth) * (imageWidth + 30);
            index = left < leftVal ? ++index : index;
        }
        if (swipeDirection == "right") {
            left = Math.round((leftVal + 250) / imageWidth) * (imageWidth + 30);
            index = left > leftVal ? --index : index;
        }
        if (index >= 3 || index < 0) return;
        setLeftVal(left);
        setSlideIndex(index);
    };

    const onTouchMove = e => {
        let maxWidth = -(imageWidth + 30) * (3 - 1);
        let deltaX = e.touches[0].clientX - clientX;
        let deltaY = e.touches[0].clientY - clientY;
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            let left = leftVal + deltaX;
            left = maxWidth < left ? left : maxWidth;
            left = 0 > left ? left : 0;
            setClientX(e.touches[0].clientX);
            setClientY(e.touches[0].clientY);
            setLeftVal(left);
            setSwipeDirection(deltaX < 0 ? "left" : "right");
        }
    };

    return (
        <CarouselWrapper>
            <CarouselFooter>
                <Prev
                    style={{ opacity: slideIndex == 0 ? "0.2" : "1" }}
                    onClick={slidePrev}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Prev>

                <Next
                    style={{
                        opacity: slideIndex === 3 - 1 ? "0.2" : "1"
                    }}
                    onClick={slideNext}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </Next>
            </CarouselFooter>
            <CarouselContainer
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{
                    transform: `translate3d(${leftVal}px,0,0)`,
                    transition: "transform 0.2s linear"
                }}
            >
                <CarouselItem
                    style={{
                        width: `${imageWidth}px`
                    }}
                >
                    hh
                </CarouselItem>
                <CarouselItem
                    style={{
                        width: `${imageWidth}px`
                    }}
                >
                    hh
                </CarouselItem>
                <CarouselItem
                    style={{
                        width: `${imageWidth}px`
                    }}
                >
                    hh
                </CarouselItem>
            </CarouselContainer>
        </CarouselWrapper>
    );
};

export default Carousel;
