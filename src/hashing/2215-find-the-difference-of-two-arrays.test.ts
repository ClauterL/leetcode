import { findDifference } from "./2215-find-the-difference-of-two-arrays";

describe("2215. Find the Difference of Two Arrays", () => {
const norm = (r: number[][]) => r.map(x => [...x].sort((p, q) => p - q));
it("example 1", () => expect(norm(findDifference([1, 2, 3], [2, 4, 6]))).toEqual([[1, 3], [4, 6]]));
it("example 2", () => expect(norm(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))).toEqual([[3], []]));
});
