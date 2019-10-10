import React from "react";
import { shallow } from "enzyme";
import { testStore } from "../../../testHelper/testUtils";
import Post from "./index";

describe("Post Component", () => {
    let fetchMorePosts = jest.fn();
    let scrollCallBack = jest.fn();

    const store = testStore();
    const wrapper = shallow(
        <Post
            fetchMorePosts={fetchMorePosts}
            scrollCallBack={scrollCallBack}
            store={store}
        />
    ).dive();

    test("Check if the fetchMorePosts function is present", () => {
        expect(wrapper).not.toBeNull();
    });

    test("Check if the execution times of the functions are correct", () => {
        expect(fetchMorePosts).toHaveBeenCalledTimes(0);
        expect(scrollCallBack).toHaveBeenCalledTimes(0);
    });
});
