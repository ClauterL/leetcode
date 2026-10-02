import { validMountainArray } from "./0941-valid-mountain-array";

describe("941. Valid Mountain Array", () => {
it("example 1", () => expect(validMountainArray([2, 1])).toBe(false));
it("example 2", () => expect(validMountainArray([3, 5, 5])).toBe(false));
it("example 3", () => expect(validMountainArray([0, 3, 2, 1])).toBe(true));
it("only ascending", () => expect(validMountainArray([1, 2, 3])).toBe(false));
});
