import { maxSatisfied } from "./1052-grumpy-bookstore-owner";

describe("1052. Grumpy Bookstore Owner", () => {
it("example 1", () => expect(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)).toBe(16));
it("example 2", () => expect(maxSatisfied([1], [0], 1)).toBe(1));
it("all grumpy", () => expect(maxSatisfied([4, 10, 10], [1, 1, 1], 2)).toBe(20));
});
