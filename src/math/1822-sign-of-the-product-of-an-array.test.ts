import { arraySign } from "./1822-sign-of-the-product-of-an-array";

describe("1822. Sign of the Product of an Array", () => {
it("example 1", () => expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toBe(1));
it("example 2", () => expect(arraySign([1, 5, 0, 2, -3])).toBe(0));
it("example 3", () => expect(arraySign([-1, 1, -1, 1, -1])).toBe(-1));
});
