import { checkString } from "./2124-check-if-all-as-appears-before-all-bs";

describe("2124. Check If All as Appears before All Bs", () => {
it("example 1", () => expect(checkString("aaabbb")).toBe(true));
it("example 2", () => expect(checkString("abab")).toBe(false));
it("example 3", () => expect(checkString("bbb")).toBe(true));
});
