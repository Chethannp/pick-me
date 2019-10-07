import styled from "styled-components";

const CarouselWrapper = styled.div`
    overflow-x: hidden;
    position: relative;
`;

const CarouselContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    transition: transform 0.2s ease-out;
`;

const CarouselItem = styled.div`
    background: rgba(255, 250, 240, 1);
    min-height: 60px;
    margin: 5px 10px;
    padding: 10px;
    flex: 0 0 auto;
    border-radius: 3px;
    color: #000;
    box-shadow: 0 1px 3px 0 rgba(208, 208, 208, 1);
`;

const CarouselFooter = styled.div`
    display: flexbox;
    margin: 5px;
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

export {
    CarouselWrapper,
    CarouselContainer,
    CarouselItem,
    CarouselFooter,
    Next,
    Prev
};
