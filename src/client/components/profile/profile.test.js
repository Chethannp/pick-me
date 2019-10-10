import { renderHook } from "../../../testHelper/testUtils";
import useModal from "../customHooks/modal/useModal";
import { act } from "react-dom/test-utils";

describe("useModalHook", () => {
    test("Works", () => {
        const results = renderHook(useModal);
        expect(results.isShowing).toBeFalsy();
    });

    test("Check for a method", () => {
        const results = renderHook(useModal);
        act(() => {
            results.toggle();
        });
        expect(results.toggle).not.toBeUndefined();
    });
});
