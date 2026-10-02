import { countNegatives } from "./1351-count-negative-numbers-in-a-sorted-matrix";

describe("1351. Count Negative Numbers in a Sorted Matrix", () => {
it("example 1", () => expect(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])).toBe(8));
it("example 2", () => expect(countNegatives([[3, 2], [1, 0]])).toBe(0));
it("all negative", () => expect(countNegatives([[-1, -2], [-3, -4]])).toBe(4));
});
