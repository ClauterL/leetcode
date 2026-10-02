import { kClosest } from "./0973-k-closest-points-to-origin";

describe("973. K Closest Points to Origin", () => {
it("example 1", () => expect(kClosest([[1, 3], [-2, 2]], 1)).toEqual([[-2, 2]]));
it("example 2", () => {
  const r = kClosest([[3, 3], [5, -1], [-2, 4]], 2).map(p => p.join()).sort();
  expect(r).toEqual(["-2,4", "3,3"]);
});
});
