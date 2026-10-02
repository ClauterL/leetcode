import { repeatedNTimes } from "./0961-n-repeated-element-in-size-2n-array";

describe("961. N Repeated Element in Size 2n Array", () => {
it("example 1", () => expect(repeatedNTimes([1, 2, 3, 3])).toBe(3));
it("example 2", () => expect(repeatedNTimes([2, 1, 2, 5, 3, 2])).toBe(2));
it("example 3", () => expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toBe(5));
});
