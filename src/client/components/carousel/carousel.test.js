import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../testHelper/testUtils";
import Carousel from "./index";

const setUp = (props = {}) => {
    const component = shallow(<Carousel {...props} />);
    return component;
};

describe("Carousel Component", () => {
    describe("Has Props", () => {
        let component;
        beforeEach(() => {
            const props = {
                list: [
                    { title: "Senior Web Developer", company: "Hey Jobs" },
                    { title: "Web Developer", company: "Red Sofa" },
                    { title: "Team Lead", company: "Take Away" }
                ]
            };
            component = setUp(props);
        });

        test("Should render without errors", () => {
            const wrapper = findByTestAttr(component, "carouselComponent");
            expect(wrapper.length).toBe(1);
        });

        test("Clicking on next button should increment the slide Index by 1", () => {
            let length = 3;

            let next = findByTestAttr(component, "nextButton");
            next.simulate("click");
            let count = findByTestAttr(component, "slideCount").text();

            expect(count).toBe(`1 / ${length - 1}`);
        });

        test("Mock function to check if slidePrev method is present", () => {
            const slidePrev = jest.fn();
            const comp = shallow(<Carousel slidePrev={slidePrev} />);
            expect(comp).not.toBeNull();
        });
    });

    describe("Has No Props", () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        test("Should render without errors", () => {
            const wrapper = findByTestAttr(component, "carouselComponent");
            expect(wrapper.length).toBe(0);
        });
    });
});
