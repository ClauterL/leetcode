import { heightChecker } from "./1051-height-checker";

describe("1051. Height Checker", () => {
it("example 1", () => expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3));
it("example 2", () => expect(heightChecker([5, 1, 2, 3, 4])).toBe(5));
it("example 3", () => expect(heightChecker([1, 2, 3, 4, 5])).toBe(0));
});
