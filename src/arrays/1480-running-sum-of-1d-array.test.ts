import { runningSum } from "./1480-running-sum-of-1d-array";

describe("1480. Running Sum of 1d Array", () => {
it("example 1", () => expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]));
it("example 2", () => expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]));
it("example 3", () => expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]));
});
