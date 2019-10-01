import React, { useState } from "react";
import styled from "styled-components";
import { Div, FlexBox } from "../../styledComponents/layout";

// get our fontawesome imports
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CarouselWrapper = styled(Div)`
  overflow-x: hidden;
`;

const CarouselContainer = styled(FlexBox)`
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  transition: transform 0.2s ease-out;
`;

const CarouselItem = styled(Div)`
  background: #fff;
  width: 250px;
  min-height: 60px;
  margin: 5px;
  padding: 20px;
  flex: 0 0 auto;
  border-radius: 3px;
  color: #000;
  box-shadow: 0 1px 3px 0 rgba(208, 208, 208, 1);
`;

const Next = styled.span`
  cursor: pointer;
  display: inline-block;
  margin-left: 5px;
`;

const Prev = styled.span`
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
`;

const CarouselComp = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [clientX, setClientX] = useState();
  const [clientY, setClientY] = useState();
  const [leftVal, setLeftVal] = useState(0);
  const [imageWidth, setImageWidth] = useState(200);
  const [swipeDirection, setSwipeDirection] = useState();

  const onTouchStart = e => {
    setClientX(e.touches[0].clientX);
    setClientY(e.touches[0].clientY);
  };

  const onTouchMove = e => {
    let maxWidth = -imageWidth * (8 - 1);

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

  const onTouchEnd = () => {
    let left = leftVal;
    let index = slideIndex;
    let swipeDirection = swipeDirection;

    if (swipeDirection == "left") {
      left = Math.round((leftVal - 120) / imageWidth) * imageWidth;
      index = left < leftVal ? ++index : index;
    }

    if (swipeDirection == "right") {
      left = Math.round((leftVal + 120) / imageWidth) * imageWidth;
      index = left > leftVal ? --index : index;
    }

    if (index >= 8) return;
    setLeftVal(left);
    setSlideIndex(index);
  };

  const slideNext = () => {
    if (8 != slideIndex) {
      let slideTo = (slideIndex + 1) * -200;
      setLeftVal(slideTo);
      setSlideIndex(slideIndex + 1);
    }
  };

  const slidePrev = () => {
    if (slideIndex != 0) {
      let slideTo = leftVal + 200;
      setLeftVal(slideTo);
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <Div pad10>
      <FlexBox 
        padL0
        padB5
        fontWeight="bold"
        color="brandPrimary"
        jcSpaceBetween
        alignCenter
      >
        <Div color="brandSecondary">Sponsored Jobs</Div>
        <Div>
          <Prev
            style={{ opacity: slideIndex == 0 ? "0.2" : "1" }}
            onClick={slidePrev}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          </Prev>
          <Next
            style={{
              opacity: 8 - 1 == slideIndex ? "0.2" : "1"
            }}
            onClick={slideNext}
          >
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </Next>
        </Div>
      </FlexBox>

      <CarouselWrapper posRel>
        <CarouselContainer
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          jcStart
          style={{
            transform: `translate3d(${leftVal}px,0,0)`
          }}
        >
          <CarouselItem marR10>hh</CarouselItem>
          <CarouselItem marR10>hh</CarouselItem>
          <CarouselItem marR10>hh</CarouselItem>
          <CarouselItem marR10>hh</CarouselItem>
          <CarouselItem marR10>hh</CarouselItem>
          <CarouselItem marR10>hh</CarouselItem>
          <CarouselItem marR10>hh</CarouselItem>
          <CarouselItem marR10>hh</CarouselItem>
        </CarouselContainer>
      </CarouselWrapper>
    </Div>
  );
};

export default CarouselComp;
