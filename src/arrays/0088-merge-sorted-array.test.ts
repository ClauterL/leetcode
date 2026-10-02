import { merge } from "./0088-merge-sorted-array";

describe("88. Merge Sorted Array", () => {
  it("example 1", () => { const a = [1, 2, 3, 0, 0, 0]; merge(a, 3, [2, 5, 6], 3); expect(a).toEqual([1, 2, 2, 3, 5, 6]); });
  it("example 2", () => { const a = [1]; merge(a, 1, [], 0); expect(a).toEqual([1]); });
  it("example 3", () => { const a = [0]; merge(a, 0, [1], 1); expect(a).toEqual([1]); });
  it("nums2 all smaller", () => { const a = [4, 5, 6, 0, 0, 0]; merge(a, 3, [1, 2, 3], 3); expect(a).toEqual([1, 2, 3, 4, 5, 6]); });
});
