import { smallerNumbersThanCurrent } from "./1365-how-many-numbers-are-smaller-than-the-current-number";

describe("1365. How Many Numbers Are Smaller Than the Current Number", () => {
it("example 1", () => expect(smallerNumbersThanCurrent([8, 1, 2, 2, 3])).toEqual([4, 0, 1, 1, 3]));
it("example 2", () => expect(smallerNumbersThanCurrent([6, 5, 4, 8])).toEqual([2, 1, 0, 3]));
it("example 3", () => expect(smallerNumbersThanCurrent([7, 7, 7, 7])).toEqual([0, 0, 0, 0]));
});
