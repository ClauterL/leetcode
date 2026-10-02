import { numOfSubarrays } from "./1343-number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold";

describe("1343. Number of Sub Arrays of Size K and Average Greater Than or Equal to Threshold", () => {
it("example 1", () => expect(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)).toBe(3));
it("example 2", () => expect(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)).toBe(6));
});
