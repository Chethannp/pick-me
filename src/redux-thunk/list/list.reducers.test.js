import listReducer from "./list.reducers";
import { types } from "./types";

describe("List Reducer", () => {
    //Check if type does not match then the reducer should return the default value which would be []
    test("Should return default state", () => {
        const newState = listReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    test("Should return new state if it recieving type", () => {
        const stateOutput = {
            pageLoader: true
        };

        const newState = listReducer(undefined, {
            type: types.HANDLE_PAGE_LOADER,
            payload: true
        });

        expect(newState).toEqual(stateOutput);
    });
});
