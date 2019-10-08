import React from "react";
import { shallow } from "enzyme";
import HomePage from "./homePage";

describe("Homepage component", () => {
    test("should render without error", () => {
        const wrapper = shallow(<HomePage />);
        expect(wrapper.text()).toEqual("Welcome to home page!");
    });
});
