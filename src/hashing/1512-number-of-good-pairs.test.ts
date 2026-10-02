import { numIdenticalPairs } from "./1512-number-of-good-pairs";

describe("1512. Number of Good Pairs", () => {
it("example 1", () => expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4));
it("example 2", () => expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6));
it("example 3", () => expect(numIdenticalPairs([1, 2, 3])).toBe(0));
});
