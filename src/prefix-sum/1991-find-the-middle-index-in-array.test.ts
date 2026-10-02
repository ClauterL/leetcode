import { findMiddleIndex } from "./1991-find-the-middle-index-in-array";

describe("1991. Find the Middle Index in Array", () => {
it("example 1", () => expect(findMiddleIndex([2, 3, -1, 8, 4])).toBe(3));
it("example 2", () => expect(findMiddleIndex([1, -1, 4])).toBe(2));
it("example 3", () => expect(findMiddleIndex([2, 5])).toBe(-1));
it("single element", () => expect(findMiddleIndex([1])).toBe(0));
});
