import { findLucky } from "./1394-find-lucky-integer-in-an-array";

describe("1394. Find Lucky Integer in an Array", () => {
it("example 1", () => expect(findLucky([2, 2, 3, 4])).toBe(2));
it("example 2", () => expect(findLucky([1, 2, 2, 3, 3, 3])).toBe(3));
it("example 3", () => expect(findLucky([2, 2, 2, 3, 3])).toBe(-1));
});
