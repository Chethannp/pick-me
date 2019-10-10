import { renderHook } from "../../../testHelper/testUtils";
import useForm from "../customHooks/formValidator/useForm";

describe("useFormHook", () => {
    test("Works", () => {
        const results = renderHook(useForm);
        expect(results.values).toBeUndefined();
    });
});
