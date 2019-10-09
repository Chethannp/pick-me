import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../testHelper/testUtils";
import InlineLoader from "./index";

describe("Page Loader Component", () => {
    test("Should run without errors", () => {
        const component = shallow(<InlineLoader />);
        const wrapper = findByTestAttr(component, "inlineLoaderComponent");
        expect(wrapper.length).toBe(1);
    });
});
