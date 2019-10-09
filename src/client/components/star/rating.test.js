import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../testHelper/testUtils";
import Rating from "./rating";

const setUp = (props = {}) => {
    const component = shallow(<Rating {...props} />);
    return component;
};

describe("Carousel Component", () => {
    describe("Has Props", () => {
        let component;
        beforeEach(() => {
            const props = {
                id: "1",
                ratingCount: 2
            };
            component = setUp(props);
        });

        test("Should render without errors", () => {
            const wrapper = findByTestAttr(component, "starRatingComponent");
            expect(wrapper.length).toBe(1);
        });
    });

    describe("Has No Props", () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        test("Should render without errors", () => {
            const wrapper = findByTestAttr(component, "starRatingComponent");
            expect(wrapper.length).toBe(0);
        });
    });
});
