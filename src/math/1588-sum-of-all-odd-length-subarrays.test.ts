import { sumOddLengthSubarrays } from "./1588-sum-of-all-odd-length-subarrays";

describe("1588. Sum of All Odd Length Subarrays", () => {
it("example 1", () => expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toBe(58));
it("example 2", () => expect(sumOddLengthSubarrays([1, 2])).toBe(3));
it("example 3", () => expect(sumOddLengthSubarrays([10, 11, 12])).toBe(66));
});
