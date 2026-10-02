import { sortedSquares } from "./0977-squares-of-a-sorted-array";

describe("977. Squares of a Sorted Array", () => {
it("example 1", () => expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]));
it("example 2", () => expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]));
it("all negative", () => expect(sortedSquares([-3, -2, -1])).toEqual([1, 4, 9]));
});
