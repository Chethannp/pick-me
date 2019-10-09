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

        // test("Clicking on next button should increment the slide Index by 1", () => {
        //     let initialCounterState = 0;
        //     let next = findByTestAttr(component, "nextButton");
        //     next.simulate("click");

        //     console.log(expect(component.state("slideIndex")).toBe(0));
        // });

        // test("Clicking on prev button should decrement the slide Index by 1", () => {
        //     const wrapper = findByTestAttr(component);
        // });
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
