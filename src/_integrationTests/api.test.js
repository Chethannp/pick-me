import moxios from "moxios";

// import { fetchAllPosts } from "../redux-thunk/list/list.actions";
// import { testStore } from "../testHelper/testUtils";

describe("FetchPostAction", () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test("Store is updated correctly", () => {
        // const expectedState = [
        //     {
        //         title: "Senior",
        //         company: "Company"
        //     },
        //     {
        //         title: "Senior",
        //         company: "Company"
        //     },
        //     {
        //         title: "Senior",
        //         company: "Company"
        //     }
        // ];
        // const store = testStore();
        // moxios.wait(() => {
        //     const request = moxios.requests.mostRecent();
        //     request.respondWith({
        //         status: 200,
        //         response: expectedState
        //     });
        // });
        // return store.dispatch(fetchAllPosts()).then(() => {
        //     const newState = store.getState();
        //     expect(newState.list).toBe(expectedState);
        // });
    });
});
