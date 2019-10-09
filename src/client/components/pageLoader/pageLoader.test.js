import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../testHelper/testUtils";
import PageLoader from "./index";

describe("Page Loader Component", () => {
    test("Should run without errors", () => {
        const component = shallow(<PageLoader />);
        const wrapper = findByTestAttr(component, "pageLoaderComponent");
        expect(wrapper.length).toBe(1);
    });
});
